# Simple app on React for Yalantis
Author [Rad Poznyakov](https://www.facebook.com/radpoznyakov)

```
We are creating a frontend app that allows staff to manage web site content. on the web site.
One of the features that needs to be implemented is managing images with tooltips.
 
Admin can upload images and add special pointer to it. When user hovers this pointer, tooltip appears. Tooltip text is customizable by admin.
 
We need to create a tool for admin to manage images with tooltips.
Admin should be able to see list of images, add image, edit image, delete image. Also with adding or editing images he can add or edit tooltips pointer. Also we need to have a preview mode to test image with tooltip to see how it works for a common user.
 
Requirements:
 
You should use one of the modern js frameworks
It is necessary to emulate server interactions. All responses have to be stubbed. But please keep in mind that it should be possible to unstub it fast and to change it for real requests.
Markup should be simple but adaptive for mobile devices.
You should create custom functionality for handling tooltips on images, and not use already existing solutions.
Before implementing your solutions, provide an estimation and the list of technologies that you are going to use.
 
Before you start, please provide a list of technologies you will use and an estimate (how long it will take you to complete the task).
```

### Installation
Before start you need [Node.js](https://nodejs.org/).
Install the dependencies and devDependencies and start the server.

```sh
$ cd test-yalantis
$ npm install
$ npm start
```
Server running on `http://localhost:8081`

### Commands

Open your favorite Terminal and run these commands.

First Tab: starting `express` server and `json-server`
```sh
$ npm start
```

Second Tab: starting `kharma test`
```sh
$ npm test
```