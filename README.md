# Typescript Node/Express Seed
A highly opinionated boilerplate seed app for starting a new Node/Express Server 
using Typescript.

## About
The purpose of this project is to streamline the process when creating a new RESTful API 
using Node/Express with Typescript. The developer can get straight ot writing the code 
that matters without having to configure the initial structure and build processes. This 
project also sets up an initial test suite that you can build on top of. The project is 
highly opinionated and curated to use only specific dependencies to keep it on the lighter 
side as much as possible. Add your own extras as you see fit.

### Dependencies

   - [NodeJS](https://nodejs.org/en/)
      - Pre-requisite. Written with v14.x LTS in mind.
   - [Express](https://expressjs.com/)
      - Web Framework
         - [dotenv](https://github.com/motdotla/dotenv#readme)
            - Used to parse environment variables during development.
         - [Morgan](https://github.com/expressjs/morgan#readme)
            - HTTP request logger middleware for node.js
         - [Winston](https://github.com/winstonjs/winston#readme)
            - A logger for just about everything.
   - [Typescript](https://www.typescriptlang.org/)
      - Superset of Javascript. Written with Typescript 4 in mind.
   - [JEST](https://jestjs.io/)
     - A delightful JavaScript Testing Framework with a focus on simplicity.
   - [Prettier](https://prettier.io/)
      - An opinionated code formatter.

### About Database Connections
This project does not have any boilerplate surrounding the database system that you should use. 
I decided to leave that up to your specific purposes and use-case. It should be fairly simple to 
integrate with NoSQL or a Relational Database System.

## Setup

   - Use the "Use This Template" button to create a new repo from this project.
   - Clone the new repo to your local machine.
   - `npm i` to install all dependencies.
   - Rename `.env.example` to `.env` and input your own variables.
   - `npm start` to start the app.
   - Smile.

## Contact Me

Have some suggestions or other opinions on how this can be made better or organized better? Feel free to open an issue or contact me via Twitter or Email.

   - [@Dylan_Legendre](https://twitter.com/Dylan_Legendre)
   - [dylanlegendre09@gmail.com](mailto:dylanlegendre09@gmail.com)
