# MetricQL
## A GraphQL Migration Tool

### Table of Contents

    About MetricQL
    Getting Started
    Contributors
    To Do
    Usage 
    Built With
    Developers
    Acknowledgments
    License


### About MetricQL
MetricQL is a migration assistance tool that facilitates the transition from REST to GraphQL. Generate, customize, and export GraphQL schemas from existing PostgreSQL databases and visualize performance metrics.

Transform existing PostgresQL databases into GraphQL code, including query resolvers and types
Visualize PostgresQL entity-relational diagrams to view and analyze database relationships 
Edit, test and compare queries with the code playground and query history panel
Analyze query response times to optimize GraphQL performance



Accelerated by OS Labs. 

### Getting Started is Easy!


Visit metricql.com for easy access. Navigate to the ‘Generate Schema’ page to access our URL input form. Copy a relational database link (i.e., PostgresQL) and paste into the input box. After clicking submit, you will see your GraphQL types on the left, and your resolvers on the right. For access to the full host of MetricQL’s features, fork & clone our repo for an easy spin-up


### Database Connection

Connect to MetricQL by inputting an existing PostgreSQL URI to auto-populate data, or use our sample database to test our utilities

### Accessing Customized GraphQL Code*

Input your specific query under Query Input (code playground) and click Submit to generate customized GraphQL code based on your needs
Access query history via the left panel 
Export or highlight and copy the auto-generated GraphQL code that displays beneath the performance graph
Visit the sidebar on the left to view GraphQL Types and Resolvers
Click on Export or highlight and copy/paste

### ER Visualizer*

The PostgreSQL entity-relational diagram is also accessible via the sidebar on the left, simply click on “View Visualizer” to manipulate and analyze relationships

### Performance*

Easily view performance metrics on the top right panel and start analyzing and comparing the efficiency of your GraphQL queries 
Contributions
MetricQL greatly welcomes any contributions from the open source community! Please click here to view our contribution FAQ page. A big thank you for your interest and passion in contributing to MetricQL!


### Contributing to MetricQL

The MetricQL team would like to thank you for your interest in helping to maintain and improve our app!
Please follow these steps for a seamless contribution experience:
There are 3 npm actions you need to run before working:
npm install
npm run build
npm run dev (to launch website) 
Reporting Bugs and Adding New Features
All code changes happen through Github Pull Requests and we actively welcome them! To submit your pull request, follow the steps below:


### Fork the Project

Create your Feature Branch from dev (git checkout -b feature/NewFeature)
Commit your Changes (git commit -m 'Add some NewFeature')
Push to the Branch on your Fork (git push origin feature/NewFeature)
Open a Pull Request from the Branch on your Fork to the dev branch on the MetricQL Dev Branch
We will review Pull Requests on an ongoing basis. 

### Pull Requests

Fork the repo and create your branch from dev
If you've added code that should be tested, add tests.
If you've changed APIs, please update the documentation.
Ensure the tests pass by running npm run tests
Make sure your code lints.
Submit a pull request.
To-Dos
Non-Relational Database Integration to extend users' options by allowing non-relational DB imports
TypeScript code refactoring
Add support for all SQL data types

### Built With

MetricQL was built using the following frameworks and libraries:
    Next.js
    React
    Context API
    GraphQL
    Node.js
    Express
    PostgreSQL
    Jest
    Supertest
