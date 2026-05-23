[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.org/project/pip/)

<p align="center">
  <img width="251" height="92" src="/logo.png">
</p>

## Visualize the LLVM CFG interactively !

<b>LLVM-FLOW</b> is an open-source project that provides interactive visualization of [LLVM IR Control Flow Graphs (CFG)](https://flang.llvm.org/docs/ControlFlowGraph.html). With <b>LLVM-FLOW</b> , users can easily compare the CFG before and after optimization. <br>
The tool can be accessed either through the <i>LLVM-FLOW website</i> or by running it directly on your local environment via <i>Docker</i>.

---

### ✅ Get started: LLVM-FLOW website

👉 visit https://llvmflow.kc-ml2.com/

![example](/example.gif)

### ✅ Get started: Docker

To run this project with Docker, first, you'll need to install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/) on your machine. Once you've installed Docker, follow these steps:

1. Clone the repository:

```
git clone https://github.com/kc-ml2/llvm-flow.git
```

2. Build the Docker image:

```
docker-compose build
```

3. Run the Docker container:

```
docker-compose up
```

This will start the application on http://localhost:3000

---

### ⚙️ Recent Fixes (2026-05-23)

- Fixed an intermittent CFG rendering bug where only one node was shown after uploading files.
  - Root cause: multiple function `.dot` files were generated, but a single JSON output (`before.json` / `after.json`) sometimes reflected only one function graph.
  - Fix: CFG generation now prefers `main` using `-cfg-func-name=main` for stable comparisons, and falls back to the first defined function when `main` is not present.
- Updated Docker LLVM setup for bookworm compatibility.
  - LLVM `15~20` is installed via `apt.llvm.org`.
  - LLVM `14` is installed through a separate Debian package path because `llvm-toolchain-bookworm-14` is not available on `apt.llvm.org`.

---

### ✏️ TODO

- Consider replacing the current fixed-function strategy (`main` first, then fallback to first defined function) with a function-selection workflow so users can choose exactly which function CFG to render.

---

### ✅ Features

1. Detect the same Basic Block between IR modules
2. Switch the mode of CFG
3. Switch modes only for certain nodes
4. Move the node
5. Find the target&source node of the edge
6. Resize the `div`
7. Change the direction of CFG
8. Zoom in / Zoom out
9. Download `.ll` files
10. Query uploaded history from board page

---

### ✅ Architecture

```
┌── llvm-flow-api
│   ├── backend
|   	   └ llvm.sh
|   	   └ app		    # api, services
|
├── llvm-flow-frontend
│   ├── src
|   	   └ components
|   	  	 └ modules	# common components
|   	  	 └ pages	  # page components
|
└── docker-compose.yaml

```

---

### ✅ Contribution

- Please make a new branch instead of the current basic branch (ex. main) and work on it.
- If there is an additional commit after the review, please proceed with the `Re-request` review!

---

### 📢 Presented at EuroLLVM 2023

This project was presented at the **[EuroLLVM Developers' Meeting 2023](https://llvm.org/devmtg/2023-05/)**, with the talk titled **“Spot the Difference with LLVM-FLOW: an open-source interactive visualization tool for comparing IR CFGs”**.

- 📄 [Slides (PDF)](https://drive.google.com/file/d/1INbwCZOdRXDtm7Xa6P6wnJOQiAF6ks4H/view)
- 🎥 [Presentation Video](https://www.youtube.com/watch?v=bCwteA-9mSs)
