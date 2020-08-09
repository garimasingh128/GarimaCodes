---
title: 'Introduction to Qiskit Library'
date: 2020-06-20 16:21:13
category: 'development'
draft: false
---
# What is Qiskit Library?

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dae7cd73-0894-4243-a612-1e51b7d7f45c/30696987.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dae7cd73-0894-4243-a612-1e51b7d7f45c/30696987.png)

**Qiskit** is an open-source framework for working with noisy quantum computers at the level of pulses, circuits, and algorithms.

Qiskit is made up of elements that each work together to enable quantum computing. This is a simple meta-package to install the elements of Qiskit altogether.

> In this article, we'll discuss the knacks of Quantum Computing, a brief introduction to Qiskit library and steps to install it and practice it yourself.

# Introduction

## What is Quantum Computing?

Quantum programming is the process of assembling sequences of instructions, called quantum programs, that are capable of running on a quantum computer. Quantum programming languages help express quantum algorithms using high-level constructs.

## Quantum software development kits

Quantum [software development kits](https://en.wikipedia.org/wiki/Software_development_kit) provide collections of tools to create and manipulate quantum programs. They also provide the means to simulate the quantum programs , or prepare them to be run using [cloud-based quantum devices](https://en.wikipedia.org/wiki/Cloud-based_quantum_computing).

## Why is **Qiskit important?**

An [Open Source](https://en.wikipedia.org/wiki/Open_Source) project developed by [IBM](https://en.wikipedia.org/wiki/IBM). Quantum circuits are created and manipulated using [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), [Swift](https://en.wikipedia.org/wiki/Swift_(programming_language)), or [Java](https://en.wikipedia.org/wiki/Java_(programming_language)). Results are obtained either using simulators that run on the user's own device, simulators provided by IBM or prototype quantum devices provided by IBM. As well as the ability to create programs using basic quantum operations, higher-level algorithms are available within the Qiskit Aqua package. Qiskit is based on the [OpenQASM](https://en.wikipedia.org/wiki/OpenQASM) standard for representing quantum circuits and will support pulse level control of quantum systems as specified by the OpenPulse standard

# Installing Qiskit

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4765c3dd-6d54-4281-b7eb-3b085f3e0585/Screen_Shot_2019-12-13_at_10.50.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4765c3dd-6d54-4281-b7eb-3b085f3e0585/Screen_Shot_2019-12-13_at_10.50.56.png)

You will need to have Python ( version > 3.5 ), Anaconda, and the Jupyter Console. You can install all of them at the same time, simply by getting the Anaconda distribution. You can find it [here](https://www.anaconda.com/distribution).

Next, you will need to install the Qiskit library. To do that, you can use any package management system, but for this tutorial, I will demonstrate the steps of doing it using PIP. Now, you will need to get PIP which is a package management system for Python. Use this command to install PIP:

```
sudo apt install python-pip
```

The best way of installing `qiskit` is using `pip`:

```
$ pip install qiskit
```

See [install](https://qiskit.org/documentation/install.html) Qiskit for detailed instructions, how to use virtual environments, and build from source standalone versions of the individual Qiskit elements and components.

# Getting started with Qiskit

The workflow of using Qiskit consists of three high-level steps:

- **Build**: design a quantum circuit that represents the problem you are considering.
- **Execute**: run experiments on different backends (*which include both systems and simulators*).
- **Analyze**: calculate summary statistics and visualize the results of experiments.

Here is an example of the entire workflow, with each step explained in detail in subsequent sections:

```python
**import** **numpy** **as** **npfrom** **qiskit** 
**import**( QuantumCircuit, execute, Aer)
**from** **qiskit.visualization** **import** plot_histogram
# Use Aer's qasm_simulator
simulator = Aer.get_backend('qasm_simulator')
# Create a Quantum Circuit acting on the q register
circuit = QuantumCircuit(**2**, **2**)
# Add a H gate on qubit 0
circuit.h(**0**)
# Add a CX (CNOT) gate on control qubit 0 and target qubit 1
circuit.cx(**0**, **1**)
# Map the quantum measurement to the classical bits
circuit.measure([**0**,**1**], [**0**,**1**])
# Execute the circuit on the qasm simulator
job = execute(circuit, simulator, shots=**1000**)
# Grab results from the job
result = job.result()
# Returns counts
counts = result.get_counts(circuit)
print("**\n**Total count for 00 and 11 are:",counts)
# Draw the circuit
circuit.draw()
```

Total count for 00 and 11 are: {'00': 500, '11': 500}

┌───┐ ┌─┐
q_0: ┤ H ├──■──┤M├─── └───┘┌─┴─┐└╥┘┌─┐
q_1: ─────┤ X ├─╫─┤M├ └───┘ ║ └╥┘
c_0: ═══════════╩══╬═ ║
c_1: ══════════════╩═

```python
# Plot a histogram
plot_histogram(counts)
```

![https://qiskit.org/documentation/_images/getting_started_1_0.png](https://qiskit.org/documentation/_images/getting_started_1_0.png)

# **Workflow Step–by–Step**

The program above can be broken down into six steps:

1. Import packages
2. Initialize variables
3. Add gates
4. Visualize the circuit
5. Simulate the experiment
6. Visualize the results

# Goal of Qiskit

A central goal of Qiskit is to build a software stack that makes it easy for anyone to use quantum computers. However, Qiskit also aims to facilitate research on the most important open issues facing quantum computation today.

You can use Qiskit to easily design experiments and run them on simulators and real quantum computers.

# Elements of Qiskit

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd38ab42-af17-4e31-91d6-7135ca25fb20/1_PCitWbwqQPJIlWJpIOv8sA.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd38ab42-af17-4e31-91d6-7135ca25fb20/1_PCitWbwqQPJIlWJpIOv8sA.jpeg)

The four elements of Qiskit are the essential parts that give Qiskit its power.

- [Qiskit Terra](https://qiskit.org/documentation/the_elements.html#terra): Composing quantum programs at the level of circuits and pulses with the code foundation.
- [Qiskit Aer](https://qiskit.org/documentation/the_elements.html#aer): Accelerating development via simulators and noise models
- [Qiskit Ignis](https://qiskit.org/documentation/the_elements.html#ignis): Addressing noise and errors
- [Qiskit Aqua](https://qiskit.org/documentation/the_elements.html#aqua): Building algorithms and applications

And if you want to run your experiments on real systems, You'll need:

- IBM Q Provider

# Qiskit Aqua

Qiskit is made up elements that work together to enable quantum computing. This element is **Aqua** (Algorithms for QUantum computing Applications) providing a library of cross-domain algorithms upon which domain-specific applications can be built.

- [Aqua](https://github.com/Qiskit/qiskit-aqua#aqua)

Aqua includes domain application support for:

- [Chemistry](https://github.com/Qiskit/qiskit-aqua#chemistry)
- [Finance](https://github.com/Qiskit/qiskit-aqua#finance)
- [Machine Learning](https://github.com/Qiskit/qiskit-aqua#machine-learning)
- [Optimization](https://github.com/Qiskit/qiskit-aqua#optimization)

Aqua was designed to be extensible, and uses a framework where algorithms and support objects used by algorithms, such as optimizers, variational forms, and oracles etc,. are derived from a defined base class for the type. These along with other building blocks provide a means for end-users and developers alike to have flexibility and facilitate building and experimenting with different configurations and capability.

# Qiskit Terra

Terra provides the foundations for Qiskit. It allows the user to write quantum circuits easily, and takes care of the constraints of real hardware.

We encourage installing Qiskit via the pip tool (a python package manager), which installs all Qiskit elements, including Terra.

```
pip install qiskit
```

PIP will handle all dependencies automatically and you will always install the latest (and well-tested) version.

# Qiskit Aer

Qiskit is made up of elements that each work together to enable quantum computing. This element is **Aer**, which provides high-performance quantum computing simulators with realistic noise models. Install Qiskit via the PIP tool (a python package manager), which installs all Qiskit elements, including this one.

```
pip install qiskit
```

PIP will handle all dependencies automatically for us and you will always install the latest (and well-tested) version.

# Qiskit Ignis

This element is **Ignis**, which provides tools for quantum hardware verification, noise characterization, and error correction. Install Qiskit via the PIP tool (a python package manager), which installs all Qiskit elements, including this one.

```
pip install qiskit
```

PIP will handle all dependencies automatically for us and you will always install the latest (and well-tested) version.

# Qiskit IBM Quantum Provider

**Qiskit** is an open-source framework for working with noisy quantum computers at the level of pulses, circuits, and algorithms. This module contains a provider that allows accessing the **[IBM Quantum](https://www.research.ibm.com/ibm-q/)** devices and simulators. Install Qiskit via the PIP tool (a python package manager), which installs all Qiskit elements and components, including this one.

```
pip install qiskit
```

PIP will handle all dependencies automatically for us and you will always install the latest (and well-tested) version.

# Tips and Reminders for Qiskit

![https://images.unsplash.com/photo-1568209865332-a15790aed756?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ](https://images.unsplash.com/photo-1568209865332-a15790aed756?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ)

Quantum computing is a developing science which is increasing its reach day by day. To practice it, you must be ready to learn and understand concepts. The development strategy in the official documentation itself says that "We are going to look out 12 months to establish a set of goals we want to work towards. When planning, we typically look at potential work from the perspective of the elements." 

## **Versioning**

The Qiskit project is made up of several elements each performing different functionality. Each is independently useful and can be used on their own, but for convenience we provide this repository and meta-package to provide a single entrypoint to install all the elements at once. This is to simplify the install process and provide a unified interface to end users. However, because each Qiskit element has it’s own releases and versions some care is needed when dealing with versions between the different repositories. This document outlines the guidelines for dealing with versions and releases of both Qiskit elements and the meta-package.

# Closing

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0dfb4417-c572-4c12-ad48-3f1a3306db23/1_wfBylzNphPJtCAHHE2x0AA.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0dfb4417-c572-4c12-ad48-3f1a3306db23/1_wfBylzNphPJtCAHHE2x0AA.png)

Wrap up your amazing new blog post with a great closing. Remind your readers of the key takeaway you want them to walk away with and consider pointing them to other resources you have on your website.

# Call-to-Action/ Resources of the blog

These are the lead-generating piece of content and landing pages for a demo or consultation.

These include the official Github repository of Qiskit as the code is public and you can aslo contribute to the community by solving and raising issues. An informational blog on Medium about Qiskit and the Wikipedia page will pave your way further. Lastly, the documentation is quite elaborate and promising so surf through it in case of an difficulty.

[Qiskit](https://en.wikipedia.org/wiki/Qiskit)

[Qiskit](https://github.com/Qiskit)

[Qiskit - Medium](https://medium.com/qiskit)

[Qiskit documentation - Qiskit 0.19.6 documentation](https://qiskit.org/documentation/)