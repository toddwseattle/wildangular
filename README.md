# Go Wild with Angular
This is the Repository for the Wild Hacks Meetup on 5/17/2017.  For the moment it is just a placeholder.

# pre-reqs
In order for the tutorial to work, please install the following:

## Nodejs
NodeJS provides a batch javascript runtime and a set of tools for managing packages (libraries) in javascript.   NodeJS can be downloaded at [nodejs.org](https://nodejs.org).   Download vertion 6.1 or better.

after installing you should be able to type the following commands:

```
node -v
npm -v

```

This should display the versions of the node engine (>6.1) and the package manager NPM (~4.1)

## Git, Github, and a github account
You should have a working version of git with the ability to connect to github.com.  The easist way to do that, is to simply install the software at [desktop.github.com](https://desktop.github.com/).  After installation, you should be able to go to the command line and type:
```
git --Version
```
And have it display a version number (mine is 2.10.1.windows.1)

## The angular cli.   
The information on the angular cli can be found on [cli.angular.io](https://cli.angular.io).  To install after installing nodejs:

```bash
npm install @angular/cli -g
```

Verify that the cli is correctly installed by typing:

```bash
ng --version
```

your output should look something like:

```
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.0.0
node: 7.5.0
os: win32 x64
```

Your versions and the components may vary slightly (for example on my other machine its angular/cli 1.0.1 and Node 6.10)

# Making sure your configuration is correct and packages are installed
If you have done the pre-reqs you have the base framework, but all the files and packages have not been downloaded.   Creating an example app with the CLI and serving it will install the major components.   To do a run through, do the following:

1.  create a directory where your angular projects will live
  I like putting them in `\ng`
 2.  change to that directory.  Now initiate the angular cli to generate a sample. We will call it `sample-app` by invoking the following command
 ```
 ng new sample-app
 ```
 This will take some time as it installs all the dependencies.  
 3. when the command line comes back, change into the `\sample-app` directory and run the application.  so:
 ```
cd sample-app
ng serve -o
```
   This command starts the web server that is part of the angular-cli to serve the current applicaton.   the `-o` option opens a browser to the app.  In your browser, you should see a screen that says *app-works* 
   
now if you do `ng --version`  it should look more like the following:


```
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.0.0
node: 7.5.0
os: win32 x64
@angular/animations: 4.0.2
@angular/common: 4.0.2
@angular/compiler: 4.0.2
@angular/core: 4.0.2
@angular/flex-layout: 2.0.0-beta.7
@angular/forms: 4.0.2
@angular/http: 4.0.2
@angular/material: 2.0.0-beta.3
@angular/platform-browser: 4.0.2
@angular/platform-browser-dynamic: 4.0.2
@angular/router: 4.0.2
@angular/cli: 1.0.0
```
# Angular CLI Readme for WildAng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
