const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const calcRoutes = require('./routes/calc')

app.use(express.json());
app.use("/calc", calcRoutes);


app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    next(e);
})

app.use((err, req, res, next) => {
    if (!err.status) err.status = 500;
    let status = err.status;
    let msg = err.msg;

    return res.status(err.status).json({
        error: { msg, status }
    })
})

module.exports = app;