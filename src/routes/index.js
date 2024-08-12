const siteRouter = require('./site');
const departmentRouter = require('./department');
const userRouter = require('./user');
const accountRouter = require('./account')
const positionRouter = require('./position')

function route(app){
    app.use('/site', siteRouter);
    app.use('/department', departmentRouter);
    app.use('/user', userRouter);
    app.use('/account', accountRouter);
    app.use('/position', positionRouter);
}

module.exports = route;
