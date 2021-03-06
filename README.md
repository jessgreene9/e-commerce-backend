# e-commerce-backend
This is the backend for an e-commerce site used to retrieve and update data.


## Table of contents

- [Description](#description)
- [Demonstration](#demonstration)
- [Installation](#installation)
- [Usage](#usage)
- [Tech](#tech)
- [Contributions](#contributions)
- [Github](#github)
- [Contact](#contact)
- [License](#license)


## Description
This application is the backend for an e-commerce site used to retrieve and update data. Once connected to the database using Sequelize, and seeded with the schema and seed commands, the database is created and seeded with the test data. From here, ths user can start the application and then use Insomnia to get, put, post, and delete data from the database. 


  

## Demonstration
[Click here for installation demo](https://drive.google.com/file/d/19N0vrjOPn3GmCStli363GAq31KJvfYWD/view)

[Click here for Insomnia Demo](https://drive.google.com/file/d/1lr_xHEFNDcVKVOI8p5VDShs48VNlSzFG/view)




## Installation
This application requires the installment of 'dotenv', 'express, 'mysql2', and 'sequelize'. Please run:
  ```
      npm i
  ```
 Create or update an .env file with 
   ```
    DB_NAME='ecommerce_db'
    DB_USER=root
    DB_PW=
```
## Usage
After the required dependencies are installed, run the schema.db file in the db folder to initiate the database. Then, open terminal and run the following in the command line:

  ```
    npm run seed
    npm start

  ```
In Insomnia, you can then create your get, post, put, and delete commands to test the application and update information in the database.   


## Tech

- VS Code
- Node.js
- MySQL
- Sequelize
- Insomnia

## Contributions

This project was made with help from:

* UNCC BootCamp class
* My tutor, Josh Furlin

## Github
Below is the link to the github repository for this project

<https://github.com/jessgreene9/e-commerce-backend>

## Contact

    
For any questions about this project, please visit my GitHub page: [GitHub Profile](https://github.com/jessgreene9)
      
Or email me at: [Jess Greene](mailto:jess.greene9@gmail.com)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)