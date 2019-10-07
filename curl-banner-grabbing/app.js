let express = require('express');
let morgan = require('morgan');
let useragent = require('express-useragent');
let app = express();
let port = 3000;

app.disable('x-powered-by');
app.disable('etag');
app.use(morgan('combined'));
app.use(useragent.express());

// configure helmet
require('./configs/configureHeaders')(app);

// init routes
require('./routes/ctf')(app);
require('./routes/cspRoutes')(app);

app.listen(port, () => console.log(`App listening on ${port}.`));