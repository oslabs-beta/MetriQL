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

Transform existing PostgresQL databases into GraphQL code, including query resolvers and types.
Visualize PostgresQL entity-relational diagrams to view and analyze database relationships. 
Edit, test and compare queries with the code playground and query history panel.
Analyze query response times to optimize GraphQL performance.



Accelerated by OS Labs. 

### Getting Started is Easy!
You can access our tool's URL input in-browser, or download the application for access to all additional features. Initial instructions for both methods are detailed below: 

#### In-Browser ####
Visit metricql.com for easy access. Navigate to the ‘Generate Schema’ page to access our URL input form. Copy a relational database link (i.e., PostgresQL) and paste into the input box. After clicking submit, you will see your GraphQL types on the left, and your resolvers on the right. For access to the full host of MetricQL’s features, fork & clone our repo for an easy spin-up.

#### Download Instructions #### 
* Clone our repo onto your personal machine
* Once the file has been cloned and opened, run 'npm install' in your CLI
* After installation, run 'npm build' 
    * If you run into any issues with the option to install with "--legacy-peer-deps", do so 
* Once the build is complete, use the 'npm run dev' command to spin up the application, accessing it through localhost:3000


### Database Connection

Connect to MetricQL by inputting an existing PostgreSQL URI to auto-populate data, or use our sample database to test our utilities.

![](/public/demo.gif)

### Accessing Customized GraphQL Code*

Input your specific query under Query Input (code playground) and click Submit to generate customized GraphQL code based on your needs.

![](/public/gif-4.gif)

Access query history via the left panel.

![](/public/query-history.gif)

Export or highlight and copy the auto-generated GraphQL code that displays beneath the performance graph.
Visit the sidebar on the left to view GraphQL Types and Resolvers.
Click on Export or highlight and copy/paste.

![](/public/schema.gif)

### ER Visualizer*

The PostgreSQL entity-relational diagram is also accessible via the sidebar on the left, simply click on “View Visualizer” to manipulate and analyze relationships.

![](/public/visualizer.gif)

### Performance*

Easily view performance metrics on the top right panel and start analyzing and comparing the efficiency of your GraphQL queries.

![](/public/graph.gif)

### Contributions
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

Fork the repo and create your branch from dev.
If you've added code that should be tested, add tests.
If you've changed APIs, please update the documentation.
Ensure the tests pass by running npm run tests.
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
    React ContextAPI
    GraphQL
    Node.js
    Express
    PostgreSQL
    Jest
    Supertest
    

### Contributors

Rehema Armorer 

Diana Li

Raymond Huang

Eric Rodgers

Alfonso Zamarripa

### Acknowledgments

A big thank you to the tech accelerator Open Source Labs for their continued support and sponsorship throughout this whole process.

This project is licensed under the MIT License - see the License.MD file for details
