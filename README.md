# e-Commerce Back-End

## Description
This project was created for an e-Commerce company to be able to track their inventory using a SQL database. The user is able to track their goods by using lists of products, categories, and tags which from which they can add, update, or remove any items or values. (See the [Usage section](#usage) of this README for more.)

This project allowed me to practice setting up a node server and query a SQL database using Sequelize. 

Future iterations of this product would include a functional front-end to allow the user a simpler interface for their database. 

## Installation
The user will need to install node packages locally to run this application. 

The user will also need to have mySQL login in order to access this application. 

## Usage
This application allows the user to use a back-end interface to display the results of their queries. In our case, we used Insomnia (as seen below). 

For example, when making a GET request at the products url, the user can then see all products (along with the associated category and any associated tags).

![the Insomnia window showing the results of accessing the URL to get all products](/assets/allProductsResults.jpg)

This is just one of the many queries that users can complete. 

Users are also able to:
- **View all** products, tags, or categories.
- **View any individual** product, tag, or category.
- **Add** a new product, tag, or category.
- **Update** any product, tag, or category.
- **Delete** any product, tag, or category.

_______________________________________

You can see a video walkthrough of this application's functionality  [here](https://drive.google.com/file/d/15BjPWi6yQLn1VpGvwkMRuBD5iaOO9S6V/view) 

## Credits
The starter code for this project was provided by the UT Austin Full-stack Bootcamp. The node packages sequelize, .env, and express were all utilized in this project. 

## License
A [MIT license](https://github.com/aomaits/eCommerceBackEnd/blob/main/LICENSE) was used for this project.
