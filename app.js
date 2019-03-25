const path = require('path');
const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
const route = require('koa-route')

import Keyboard from './Keyboard'

const app = module.exports = new Koa();

app.use(views(path.join(__dirname, 'views')));

app.use(serve(path.join(__dirname, 'public')));


app.use(route.get('/next', ctx => {
    Keyboard.press(176)
}))
app.use(route.get('/prev', ctx => {
    Keyboard.press(177)
}))


app.use(async function (ctx) {
    await ctx.render('index')
})

app.listen(3000);