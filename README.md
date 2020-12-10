# UnBox Desafio-Fullstack

## How to install?

### Requirements
- Language => PHP >= 7.4.6
- Composer
- symfony cli
- yarn or npm
# Install

## Download or clone the repository
    git clone https://github.com/RafiouSitou90/unbox-desafio-fullstack.git
## Start the backend server (API)
    cd backend/
    composer install
In the .env file, add your **The Movie DB** Api key:

    APP_THE_MOVIE_DB_API_KEY=your_api_key

    symfony serve
    or
    php -S 127.0.0.1:8000 -t

Open [http://localhost:8000/api/movies/discover](http://localhost:8000/api/movies/discover) to view the movies discover list in json format.

Open [http://localhost:8000/api/series/discover](http://localhost:8000/api/series/discover) to view the series discover list in json format.
## Start the frontend server
    cd frontend/
    yarn install or npm install
    yarn start or npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


