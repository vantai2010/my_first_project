const express = require('express');
const PORT = 5000;
const app = express();

app.get('', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {console.log('listening on port ' + PORT)});