# About
a single page react app that generates a dnf.conf with reasonable defaults. This project was inspired by [vimconfig.com](https://vimconfig.com/).

# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dockerfile 

## Build
`sudo docker build -f Dockerfile -t hewlett:sane-dnf-configuration-generator .`

## Run
`sudo docker container run -d -p 8080:3000 --name sane-dnf-configuration-generator hewlett:sane-dnf-configuration-generator`


