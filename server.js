const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const koaBody = require('koa-body');
const request = require('request');
const app = new Koa();
const main = serve(path.join(__dirname + '/build'));

app.use(main);
app.use(koaBody());

app.use(route.get('/first_line', (ctx) => {
  ctx.body = request.get('http://couplet.nlp.case.serverless.fun/first_line');
}));

app.use(route.post('/next_line', (ctx) => {
  ctx.body = request('http://couplet.nlp.case.serverless.fun/next_line', {
    method: 'post',
    body: ctx.request.body,
    json: true
  });
}));

app.listen(8000, ()=>{
  console.log('server start, listen 8000')
});