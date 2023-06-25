# My Restaurant List
A simple restaurant website built with Node.js and Express

![login](/public/images/login.png)
![search-and-sort](/public/images/search-and-sort.gif)
![autofill](/public/images/autofill.gif)

## Features
- Register via email, Facebook, or Google account
- Login to see user's own restaurants
- Click the restaurant to check its details
- Search restaurants by name and category
- Sort restaurants by name, rating, category and location
- Create a restaurant with details autofilled by Google API
- Edit the details of a restaurant
- Delete a restaurant, come with a confirmation alert

## Getting Start

1. Please make sure it is installed [Node.js](https://nodejs.org/en/download/) (skip if already install)

2. Open Terminal and Clone the project

```
git clone https://github.com/DannyHucc/my-restaurant-list.git
```

3. Go to the folder where this project is stored

```
cd my-restaurant-list
```

4. Install the required dependencies

```
npm install
```

5. Install nodemon (skip if already install)

```
npm i -g nodemon
```

6. Set environment variables in .env file according to .env.example

```
mkdir .env
```

7. Seed your database 

```
npm run seed
```

8. Execute successfully if seeing following message

```
mongodb connected!
done
restaurantSeeder done!
```

9. Start the server

```
npm run dev
```

10. Execute successfully if seeing following message

```
Express is listening on localhost:3000
mongodb connected!
```

11. Now you can browse the website on

```
http://localhost:3000
```

12. Test account

>- name: user1
>- email: <user1@example.com>
>- password: 12345678

>- name: user2
>- email: <user2@example.com>
>- password: 12345678

13. Leave server

```
ctrl + c
```

## Built With
-  Runtime: node @ 14.16.0
-  Framework: express @ 4.17.1
-  Database: mongoose @ 5.9.7
-  View Engine: express-handlebars @ 4.0.2
-  Check package.json for other dependencies


## Author
DannyHucc 胡晉嘉