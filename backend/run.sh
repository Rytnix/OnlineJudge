#!/bin/sh

sudo systemctl start docker
sudo systemctl start redis 
nodemon index.js