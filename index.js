// Import the library
const server = require('server')



// Answers to any request
// server(ctx => 'Hello world')
server({ port: 3000 }, ctx => 'Hello 世界');

// const { get, post } = server.router;
// const { render, json } = server.reply;
// 
// // const { get, post } = require('server/router');
// // const { render, json } = require('server/reply');
// 
// 
// server([
//   get('/', ctx => render('index.hbs')),
//   post('/', ctx => json(ctx.data)),
//   get(ctx => status(404))
// ]);

