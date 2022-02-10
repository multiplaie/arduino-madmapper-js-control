let easymidi = require("easymidi")
let express = require('express')
let output = new easymidi.Output("loopMIDI Port")
const app = express()
let is_on = false;
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/click', (req, res)=>{
    console.log('received')
    
    output.send("cc", {
        controller: 37,
        value: (is_on) ? 0:127,
        channel: 0
    })

    is_on = !is_on;
    res.sendStatus(201);
})

app.listen(3000)






