#!/usr/bin/env node
require('dotenv').config();

const path          = require('path');
const http          = require('http');
const express       = require('express');
const router        = express.Router()

// create route types
const app           = express();
const initServer    = require('./src/server/init.js');
const routesUrls    = require('./src/server/routes/urls.js');
const routesApply   = require('./src/server/routes/apply.js');

console.log('server initiating...')

initServer( http, app, (server)=>{

    console.log('server initiated...')

    routesApply( app, express, ()=>{

        console.log('routes applied...')

        // serve route index
        routesUrls( app );

    })


});