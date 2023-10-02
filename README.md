# URL-shortner
This project is a URL shortner backend using NodeJs, Express and MongoDb. Short links can be generated from making a put request on `<base url>/api/url/shorten`
<br/>
### Prerequisites
- Install the latest nodeJS


### Usage
- Clone the repo 
```bash
git clone https://github.com/aswinbennyofficial/aswinbennyofficial/URL-shortner.git
```



- fix dependency issues
```bash
npm install
```



- include your Mongodb connection string in the variable `MONGO_URI` in `.env` file 
```env
MONGO_URI='mongodb+srv://username:password@cluster0.qarofso.mongodb.net/url-collection?retryWrites=true&w=majority'
```



  
- include your base address in the variable `BASE_URL` in `.env` file
```
BASE_URL='http://localhost:5000'
```



- use `npm start` to run the app

<br/>



### Project structure
- `config` folder
    - `db` : configuration to connect to Mongodb

    <br/>
- `models` folder
    - `urlSchema.js` : contains the schema and model of the project
 
    <br/>
- `routes` folder
    - `index.js` : routes for the root path `/` is defined. Responsible for decoding shortlinks to long
    - `url.js` : routes for the path `/api/url/shorten` is defined. Responsible for creating short links
 
      <br/>
- `app.js` : main file


 
