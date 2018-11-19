# React Commentary App

## Description

An app which provides commentary coverage of a football match. Functionality that allows the user to interact with key moments in the match.

## Installation and Usage

This project is built with React v16. To install and make full use of this project, please follow the following steps:

1. `git clone https://github.com/RPlaha0390/react-commentary-app.git`

2. Once you have cloned the repository, open a terminal window (OSX) or command prompt if you are a Windows user. `cd pathToApp/react-commentary-app`. 

3. Run `npm install` to install all dependencies. 

	- This command will create a **node_modules** folder. Inside this **node_modules** folder are dependencies that the app needs to run the project.


4. To see the app in action, run `npm start` in the CLI. 

	- This command will start the **webpack-dev-server** which will fire up a cached version of your app on `http://localhost:3000`. To change the port address, head over to the **package.json** file. On _line 13_ change `3000` to another port of your choice. 


5. Open up a browser and fire up `http://localhost:3000`. You will now see the _dev_ instance of the app. 

6. To build the app for _production_ you will need to open your CLI, stop the dev server and run `npm run build`. This will build all the files into the *dist* folder.

7. Put all the contents of the *dist* folder on a server and enjoy! 

	- To make life more convenient, I have uploaded the website on an AWS bucket: [React Commentary App Link](http://react-commentary-app.s3-website.eu-west-2.amazonaws.com/)

## Dependencies

+ Babel 7
+ React 16.6
+ ReactDom 16.6
+ Webpack 4


