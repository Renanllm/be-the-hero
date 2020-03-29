require('dotenv').config({
    path: 'config/.env'
});

const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require('./routes/routes');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use(errors());

app.listen(port, () => console.log(`Listen server in port ${port}`));