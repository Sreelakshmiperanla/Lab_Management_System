# Welcome to Subscribers CRUD Api

## project setup

- After extracting zip folder of the project open it in VS Code(or similar code editor).
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable 
    - `PORT = 5000`
- Inside the `src/config` folder, in the `config.json` file, replace the json with below json containing your credentials. 
```
    {
      "development": {
      "username": "<YOUR USERNAME>",
      "password": "<YOUR DB PASSWORD>",
      "database": "Subscribers_DB_DEV",
      "host": "127.0.0.1",
      "dialect": "mysql"
      }
    }
```
- In terminal go to src folder and first execute `npx sequelize db:create` then, execute `npx sequelize db:migrate`.
- Then, on the same path as of your root directory of the downloaded project, execute `npm start` to run the application.

## Running process
- execute `npm start` to start the server.
- In the browser, head to the url ` 'http://lab-management-system-three.vercel.app';` to use the Subscribers CRUD