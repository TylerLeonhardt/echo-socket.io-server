# Echo Socket.io Server

This simple test server will send a message back to the client with the same event and message it recieved. So if the server received a message with an event of `news` and a message of `Hello World!`, the server will then emit back to the source with an event of `news` and a message of `Hello World!`.

Currently being used to test:
https://github.com/tylerl0706/project-lightning

## Getting Started

1. First things first, clone this repo or download the zip.
2. cd in... `cd echo-socket.io-server/`
3. `npm install`
4. `node server.js`

Now the echo server should be running.

## Options

You can specify the port number when you run the server. Just pass it in as a param. If you want to run on 3000, do:

`node server.js 3000`

It currently defaults to 8000.
