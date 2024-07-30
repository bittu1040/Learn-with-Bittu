# image name : learnwithbitu
# run inside project folder: PS C:\Users\DELL\Desktop\Bittu\Learn-with-Bittu> docker build -t learnwithbitu -f angular16.dockerfile .
# run any where in terminal : C:\Users\DELL>docker run -p 4200:4200 -it learnwithbitu /bin/sh

FROM node:18.14.1-alpine

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm ping
RUN npm install -g @angular/cli@16.0.6

EXPOSE 4200
CMD [ "pwd" ]