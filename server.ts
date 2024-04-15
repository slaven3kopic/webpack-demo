const express = require('express');
const app = express();

app.use(express.static('dist'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})
app.listen(9000, () => console.log("http://localhost:9000"))
