# commit-history

A fullstack JavaScript application that shows the list of this project's commits provided by Github API.

Some of the concepts/technologies applied on the development process were:

- Backend

  - express
  - SOLID principles
  - hexagonal arquitecture
  - typescript
  - object oriented programming
  - APIs

- Frontend
  - react
  - webpack
  - hooks
  - flexbox

## Requirements

For development, you will need Node.js installed on your environment

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.1

    $ npm --version
    8.3.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/danielpqe/commit-history.git
    $ cd commit-history/app
    $ npm install
    $ npm run install-client

## Running the project

    make sure you are in the app directory (commit-history/app)
    $ npm run start
