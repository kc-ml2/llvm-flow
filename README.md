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
