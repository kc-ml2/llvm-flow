# Use an official Python runtime as a parent image
FROM python:3.12-bullseye

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    wget \
    gnupg \
    lsb-release \
    software-properties-common \
    libclang-dev \
    openssh-server \
    graphviz \
    libzstd-dev \
    ca-certificates \
    gpg \
    ninja-build \
    && rm -rf /var/lib/apt/lists/*


# Install CMake 4.0.2 from release page instead of manually builing it
RUN test -f /usr/share/doc/kitware-archive-keyring/copyright || \
    wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | tee /usr/share/keyrings/kitware-archive-keyring.gpg >/dev/null
RUN echo 'deb [signed-by=/usr/share/keyrings/kitware-archive-keyring.gpg] https://apt.kitware.com/ubuntu/ focal main' | tee /etc/apt/sources.list.d/kitware.list >/dev/null
RUN apt-get update && apt-get install -y cmake

COPY llvm.sh /tmp/llvm.sh
RUN chmod +x /tmp/llvm.sh && \
    for version in 14 15 16 17 18 19 20; do \
        /tmp/llvm.sh $version; \
    done
ENV LLVM_ROOT=/usr/lib/llvm-20

# Download llvm-block source code & build
WORKDIR /llvm-block
RUN wget https://github.com/kc-ml2/llvm-block/archive/refs/tags/v1.0.2.tar.gz -O llvm-block.tar.gz && \
    tar -xzf llvm-block.tar.gz --strip-components=1 && \
    rm llvm-block.tar.gz
RUN  cmake --preset=default && cmake --build build 
RUN cp build/llvm-block/llvm-block /usr/bin/llvm-block

RUN mkdir /var/run/sshd
RUN echo 'root:root' | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

# Set the working directory in the container
WORKDIR /llvm-flow-api

# Install uv
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#installing-uv
COPY --from=ghcr.io/astral-sh/uv:0.5.11 /uv /uvx /bin/

# Place executables in the environment at the front of the path
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#using-the-environment
ENV PATH="/llvm-flow-api/.venv/bin:$PATH"

# Compile bytecode
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#compiling-bytecode
ENV UV_COMPILE_BYTECODE=1

# uv Cache
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#caching
ENV UV_LINK_MODE=copy

# Install dependencies
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project

ENV PYTHONPATH=/llvm-flow-api

COPY ./scripts /llvm-flow-api/scripts

COPY ./pyproject.toml ./uv.lock ./alembic.ini /llvm-flow-api/

COPY ./alembic /llvm-flow-api/alembic

COPY ./app /llvm-flow-api/app

# Sync the project
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync

# Expose the port that FastAPI will run on
EXPOSE 8000

EXPOSE 22

RUN echo '#!/bin/bash\nservice ssh start\nuvicorn app.main:app --host 0.0.0.0 --port 8000 --reload' > /start.sh && \
    chmod +x /start.sh

# Command to run the FastAPI application
CMD ["/start.sh"]
