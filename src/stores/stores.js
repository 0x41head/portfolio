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
- ### Sonic AI
    project text goes here`
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

