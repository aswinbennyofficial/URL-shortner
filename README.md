# URL-shortner
This project is a URL shortner backend using NodeJs, Express and MongoDb. Short links can be generated from making a put request on `<base url>/api/url/shorten`

### Prerequisites
- Install the latest nodeJS

### Usage
- Clone the repo 
```bash
git clone git@github.com:aswinbennyofficial/URL-shortner.git
```
- fix dependency issues
```bash
npm install
```
- include your Mongodb connection string in the variable `MONGO_URI` in `.env` file
- use `npm start` to run the app

### Project structure
- `config` folder
    - `db` : configuration to connect to Mongodb 
- `models` folder
    - `urlSchema.js` : contains the schema and model of the project
- `routes` folder
    - `index.js` : routes for the root path `/` is defined. Responsible for decoding shortlinks to long
    - `url.js` : routes for the path `/api/url/shorten` is defined. Responsible for creating short links
- `app.js` : main file


 
