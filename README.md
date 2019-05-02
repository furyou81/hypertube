# Hypertube
ReactJS / NodeJS / Elasticsearch / MongoDB / i18n

**For educational purposes only, don't put this website online.**

## Install

Install `ffmpeg` on your machine in order to encode files

Put your keys in `data/config/keys.js`

```javascript
    module.exports = {
        googleClientID : '',
        googleClientSecret : '',
        facebookClientID : '',
        facebookClientSecret :'',
        githubClientID : '',
        githubClientSecret: '',
        fortytwoClientID : '',
        fortytwoClientSecret : '',
        twitterClientID : '',
        twitterClientSecret : '',
        linkedinClientID: '',
        linkedinClientSecret:'',
        jwtSecret: 'myfavoritemovie',
        sessionSecret: 'myfavoritesession',
        CLOUDINARY_API_KEY: '',
        CLOUDINARY_API_SECRET: '',
        CLOUD_NAME: '',
        OMDB_API_KEY: '',
        TMDB_API_KEY: ''
    }
```

Put your **docker-machine ip** in `server/services/elasticsearch.js` and `server/data/configdb/keys.js`

From root folder run the command : `docker-compose up`

From server folder run the command : `npm install`

From server folder run the command : `node server.js`

finally go to `localhost:8080`

## Screenshots

![Alt text](/screens/1.png?raw=true "Login")
![Alt text](/screens/2.png?raw=true "Login")
![Alt text](/screens/3.png?raw=true "Login")
![Alt text](/screens/4.png?raw=true "Login")
![Alt text](/screens/5.png?raw=true "Login")
![Alt text](/screens/6.png?raw=true "Login")