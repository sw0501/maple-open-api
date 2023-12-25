const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const cors = require('cors');

const port = 3000;

app.use(bodyParser.json());
//app.use(cors(corsOptions));

app.listen(port,)

/*
let corsOptions = {
    origin: ['null', '*', 'http://localhost:3000','http://localhost:5500'],
    credentials: true
}
*/

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    return res.status(200).json({
        success: true
    })
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
})