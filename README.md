# Trackeryaki Parcel Tracking App

Trackeryaki is a parcel tracking app made using React.js. Users can register as an Admin or a Delivery Guy and will be redirected to their respective home pages. Admins can view all parcels and their status, create parcels, and delete parcels from the database while delivery guys can pick up parcels, mark them as delivered, and will only be able to view available parcels and parcels assigned to them. This was a collaborative project between KY Cheong, Vidula Krishnan, and myself.

## Getting Started

### Prerequisites

Ensure you have Node.js and a package manager such as npm or yarn installed on your machine. You will also need a mongoDB account and cluster. You can create a mongoDB account here if you don't already have one.


### Clone the repository
```
$ git clone https://github.com/razmanarif/trackeryaki-react.git
$ cd trackeryaki-react
```

### Installing dependencies
```
$ npm install
```
or
```
$ yarn install
```

### Create a .env file
```
$ touch .env
```


### Input the following in your .env
```
REACT_APP_BASE_URL=https://trackeryaki.onrender.com/
```


## Running the application
```
$ npm start
```

## Demo
A demo version of the application can be found [here](https://trackeryaki-react.vercel.app/)
