# Instruction Set Simulator for Basic Computer

A **web-based graphical simulator** for the **Basic Computer** as described in **Morris Mano's "Computer System Architecture"**. This simulator allows users to write, assemble, and execute assembly programs while visualizing the operation of the computer’s datapath, registers, and memory.

## Features

- 💻 **Graphical User Interface**: Interactive and visual representation of the basic computer’s **datapath components**, including **registers**, **ALU**, **flip-flops**, and **memory unit**.
- ✍️ **Code Editor**: Built-in **assembly code editor** with syntax highlighting, pre-defined examples, and the ability to write, assemble, and load machine code.
- 🔄 **Step-by-Step Simulation**: Simulate execution of assembly programs with an adjustable clock cycle frequency, providing a cycle-by-cycle breakdown of the program’s execution.
- 📊 **Register & Memory Display**: Real-time display of register and memory values in **hexadecimal**, **decimal**, and **binary** formats, with live updates as the simulation progresses.
- 🚨 **Breakpoints**: Set breakpoints to pause simulation at specific clock cycles, enabling debugging and analysis of the execution process.
- 🔄 **Input Handling**: Allows users to provide input to the **INPR register** during execution, simulating input functionality for the basic computer.
- ⚡ **Optimized Performance**: The simulator runs efficiently, allowing users to adjust the clock speed for fast or detailed observation of the instruction cycle.
- 🖥️ **Built with Vue.js & Nuxt.js**: The frontend is built using **Vue.js** and **Nuxt.js**, ensuring a responsive and interactive interface.
- 📦 **Dockerized**: The application is containerized using **Docker**, enabling easy deployment and hosting on any server.

## Technologies

- **Vue.js** & **Nuxt.js** (Frontend framework)
- **Tailwind CSS** (Styling)
- **Docker** (Containerization)
- **Nuxt Composables** (Global memory management)

## How It Works

1. **Write Assembly Code**: Users can write or load assembly code in the built-in editor.
2. **Assemble Code**: The editor converts assembly code into machine code and loads it into memory.
3. **Run the Simulation**: Start the simulation and view real-time execution in the graphical interface.
4. **Analyze Execution**: Observe each cycle of the program, the current instruction being executed, and the state of registers and memory.
5. **Adjust Clock Speed & Set Breakpoints**: Modify clock cycle frequency and set breakpoints to pause the simulation at specific points for debugging.

## Usage

- Navigate the interface to write, assemble, and simulate assembly programs.
- Set breakpoints to pause and inspect the state of the simulation at any point.

