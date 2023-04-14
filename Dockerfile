FROM ubuntu:20.04

RUN apt-get update && apt-get -y install make llvm graphviz cmake clang-10 

# Install Python and Django dependencies
RUN apt-get install -y python3 python3-pip git
RUN pip3 install django

# Install Node.js 18.x
RUN apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the Django app
COPY llvm-flow-backend /app/llvm-flow-backend

# Copy the React app
COPY llvm-flow-frontend /app/llvm-flow-frontend

# Install Django and React dependencies
RUN cd llvm-flow-backend && pip3 install -r requirements.txt
RUN cd llvm-flow-frontend && npm install

# Expose ports for Django and React
EXPOSE 8000 3000

# Build LLVM-BLOCK, Start the Django and React servers
CMD ["bash", "-c", "cd llvm-flow-backend/backend && git clone https://github.com/kc-ml2/llvm-block.git && cd llvm-block && rm -rf .git && mkdir build && cd build && cmake .. -DLLVM_ROOT=/usr/lib/llvm-config/ && make llvm-block && cd ../../ && export DJANGO_SETTINGS_MODULE=backend.settings.local && rm -rf db.sqlite3 && python3 manage.py migrate --run-syncdb && gunicorn --bind 0:8000 backend.wsgi:application & cd llvm-flow-frontend && npm start"]
