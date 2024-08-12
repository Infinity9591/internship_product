const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const morgan = require('morgan')
const route = require('./routes');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');


app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(cookieParser());

// app.use(cookieSession());

app.use(express.json());

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time ms :res[content-length] - ":user-agent"'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
