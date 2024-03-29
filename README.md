# my-apps

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Getting Started

Clone the repository, and open that folder in vscode.

Things you need install for vscode:

-   The NX Extension

Things you might want to install for vscode:

-   the Prettier extension
-   The UnoCSS extension
-   The Vite extension (the one by Anthony Fu)

### After installing extensions

You'll need to have `npm` installed!

After installing npm, run the command below from the `my-apps` directory. This will install the dependencies for all of our projects at once.

```
npm install
```

After installing the dependencies, be sure nx is installed by running

```
npm install -g nx@latest
```

You should now be able to use `nx` commmands to launch both applications.

To launch the HMR development server for the `pwa` project, run:

```
nx serve pwa
```

To run the `api` project with what I believe will also hot-reload:

```
nx serve api
```

To build either project, run:

```
nx build <project>
```

where `<project>` is `pwa` or `api`.

I'll flesh out these documents more once it matters, but `pwa` should be the only thing you really need to serve for now.

## Applications in this MonoRepo

This repository uses an NX workspace which is designed to share dependencies between projects easily. I have not yet fully configured all features of the monorepo, but I have created a `pwa` project with a React/TypeScript stack, and an expressJS backend which I will be configuring to use PostgreSQL. The reasons for some of the stuff I've set up will be explained, but first, you'll need to know what they all are and what they do.

## The Frontend

I'm using **React/TS** as our framework, because it's what I use at work, and it's pretty powerful. If you've been working with Angular, Vue, Svelte, or anything in the realm of modern javascript frameworks, React/TS should come easily to you and might have some unexpected creature comforts.

Below are some of the other technologies that I've included with the React/TS build that are meant to make our lives easier.

### UnoCSS

UnoCSS is an [atomic CSS engine](https://unocss.dev/interactive/) that turns any CSS property you could want into an individual class that can be assigned via className on your elements. At compile time, it evaluates all the classes you're using in your code and creates the minimum necessary stylesheet for the application to look as expected. **This tool means NO CSS IS NEEDED IN OUR CODE. You can do it in the `className` prop, and programmatically building classes for components. this utility has huge benefits that you'll see as development progresses.** Download the UnoCSS extension for VSCode to see some extra benefits.

### DaisyUI

[DaisyUI](https://daisyui.com/) is a simple component library. It also operates entirely through className, and has a strict set of variants we can use for all components. It comes with quite a few built-in themes. We could potentially ditch this library later if we felt like it, because the classnames could easily be ported to new components. It's just a nice starting place.

### Bootstrap Icons

[Bootstrap](https://icons.getbootstrap.com/) has a huge set of nice icons, so I included them here since they're integrated with unoCSS out of the box. I'm familiar with UnoCSS though, so whatever icons we may want to bring in, I can have them accessible similarly to how these are used. Just add `i-bi-[iconName]` to the `className` of a div element, and it becomes an SVG mask icon on the page. add a quick `<div className="i-bi-star h-5 w-5" />` to your code, and you'll have an icon of width and height 1.25rem.

### Vite

[Vite](https://vitejs.dev/) is a bundling tool that can be used to develop web applications with HMR (hot module reloading), meaning every time you save a file, your page should automatically update with the new code. It's got some fancy caching tools, so builds should be pretty quick, and it has some proxying features I plan on using in conjunction with the backend project.

## The Backend

I've only got the out-of-the-box configured expressJS application that NX set up for me at this point, but I intend to use PostgreSQL and expressJS to do the back half of things. I've still got research to do in this department, but the libraries that I've established should take *some* of the leg work out of building the backend. I have plans to implement or write an ORM capable of joining tables in all the ways we would like.

### Libraries

We'll have some other projects in this monorepo too. We'll have a library for code that needs to be shared between frontend and backend (which will probably be slimmer than the others), and we'll need a library to store typing and some class definitions for our record types which will always be shared. I am going to try to find a way to build or reference a database schema from typescript interface or class definitions, so that we can reference the same types in the frontend and backend for the purposes of referencing our main records (buildings, assets, machinery, etc.)

With a large enough base of shared typing between the frontend and backend, I believe development will be significantly easier since the flow of data from the database to the page and vice versa will be a relatively straight line, with minimal manipulation needed at any stage of transfer. I've learned some tricks for programmatically building SQL queries, so I'm hopeful that with those shared types across the board, I can implement querying via the API easily and safely and use some OOP shenanigans to generalize away all the tough bits. Ideally, we write a few generic data handlers that can be applied to each of our record types, and we're set. I'm also still exploring existing ORM options.

I am also hoping to do the same for the frontend. I will either create a folder inside the `spa` project or create a new project to house the clientside API code.