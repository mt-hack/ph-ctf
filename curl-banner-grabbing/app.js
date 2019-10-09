let express = require('express');
let morgan = require('morgan');
let useragent = require('express-useragent');
let app = express();
let port = 3000;

app.disable('x-powered-by');
app.disable('etag');
app.use(useragent.express());

// configure logging
let fs = require('fs');
let path = require('path');
app.use(morgan('combined'));
app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
        flags: 'a'
    })
}));
app.use(morgan('[FLAG] :remote-addr has successfully retrieved the flag for :url.', {
    skip: function (req, res) {
        return res.statusCode != 200;
    }
}));

// configure helmet
require('./configs/configureHeaders')(app);

// init routes
require('./routes/ctf')(app);
require('./routes/cspRoutes')(app);

app.listen(port, () => console.log(`App listening on ${port}.`));