const path = require('path');
const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');

import Router from 'koa-router'
import Media from './media'

const app = module.exports = new Koa();


let router = new Router();


app.use(views(path.join(__dirname, 'views')));
app.use(serve(path.join(__dirname, 'public')));


router
    .get('/next', Media.next)
    .get('/prev', Media.prev)
    .get('/volume_down',Media.volume_down)
    .get('/volume_up',Media.volume_up)
    .get('/volume_mute',Media.volume_mute)
    .get('/stop',Media.stop)
    .get('/play_pause',Media.play_pause)

app
    .use(router.routes())
    .use(router.allowedMethods())

app.use(async function (ctx) {
    await ctx.render('index')
})

app.listen(3000);