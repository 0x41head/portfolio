import { writable } from 'svelte/store';

export const zindex_about = writable(0);
export const left_about = writable(200);
export const zindex2 = writable(0);
export const display_about = writable(false);
export const display2 = writable(false);
export const source_projects = `
# Old Projects
My newer projects are usually on my blog:

---
- ### CTF Writeups
    [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0x41head/CTF-Writeups)
    [![Website](https://img.shields.io/badge/website-blue)](https://0x41head.github.io/CTF-Writeups/book/index.html)  
    A website that contains all of my CTF writeups from college :)  
    Hosted on mdbook.

    ---

- ### Excel AI  
    [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0x41head/Excel-AI)  
    A path finding AI made solely in MS Excel.

    ---

- ### Music using MS Paint  
    [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0x41head/Music-Using-MSPaint)  
    A digital audio workstation (DAW) that utilizes MS paint as the GUI.

    ---

- ### Sonic AI
    [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0x41head/Sonic-AI)  
    An RL Project utilizes the NeuroEvolution of Augmenting Topologies (NEAT) algorithm to teach Sonic to navigate complex levels autonomously.  

---
       `
export const source_about = `
# Aryan Prasad

---

### A Creative Technologist who likes tinkering with stuff.

## Programming Languages I know
* Python
* Javascript
* C
* C++
* Typescript
* Node

## Databases I have used
* Redis
* MongoDB
* SQL

## Technologies I have used
* Docker
* AWS 
* Azure
`


