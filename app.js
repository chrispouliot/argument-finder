const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const friendFinder = require('./friendFinder')

const app = express()


app.use(bodyParser.json())
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './static/index.html'))
})

app.post('/search', (req, res) => {
    let keywords = req.body

    if(keywords.length == 0) {
        res.status(400)
        res.send("No keywords specified")
    }

    let findFriendsPromise = friendFinder.find(keywords)

    findFriendsPromise.then((tweets) => {
        res.json({success: "You did a thing", tweets: tweets})
    })
})

app.listen(3000, () => {
    console.log("Listening on 3000!")
})
