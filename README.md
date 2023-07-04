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

6. Set environment variables in .env file according to .env.exp

```
mkdir .env
```

7. Set `PORT`(number) to start the server

```
PORT=<your port>
```

8. MONGODB_URI: Go to [MongoDB](https://account.mongodb.com/account/login) to create an account and set [MongoDB Atlas](https://account.mongodb.com/account/login) to get `MONGODB_URI` and modify the following parameters `username`、`password`、`database`

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.ngwexuq.mongodb.net/<database>?retryWrites=true&w=majority
```

9. Install [studio 3T](https://studio3t.com/download/) to view and modify document data, build comprehensive queries, import and export data, among many other tasks

10. Set your `SESSION_SECRET`(string)

```
SESSION_SECRET=<your secret>
```

11. Facebook Login: You need to create an application on [Facebook for Developers](https://developers.facebook.com), and substitute the application ID and application secret into `FACEBOOK_ID` and `FACEBOOK_SECRET` respectively

```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
```

12. Facebook Login: set `Domain name` to use callback

```
FACEBOOK_CALLBACK=http://<Domain name>/auth/facebook/callback
```

13. Google Login: You need to create an application on [Google for Developers](https://console.developers.google.com), and substitute the application ID and application secret into `GOOGLE_ID` and `GOOGLE_SECRET` and `GOOGLE_API_KEY` respectively and set domain name to use callback

```
GOOGLE_ID=SKIP
GOOGLE_SECRET=SKIP
GOOGLE_API_KEY=SKIP
```

14. Google Login: set `Domain name` to use callback

```
GOOGLE_CALLBACK=http://<Domain name>/auth/google/callback
```

15. Seed your database 

```
npm run seed
```

16. Execute successfully if seeing following message

```
mongodb connected!
done
restaurantSeeder done!
```

17. Start the server

```
npm run dev
```

18. Execute successfully if seeing following message

```
Express is listening on localhost:3000
mongodb connected!
```

19. Now you can browse the website on

```
http://localhost:3000
```

20. Test account

>- name: user1
>- email: <user1@example.com>
>- password: 12345678

>- name: user2
>- email: <user2@example.com>
>- password: 12345678

21. Leave server

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