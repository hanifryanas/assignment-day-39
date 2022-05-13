require('dotenv').config();
const app = require('express')();
const day = require('./routes/day.js');
const port = process.env.PORT || 3010;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/day/', day)

app.listen(port, () => {
    console.log(`This app listening on port ${port}!`);
});