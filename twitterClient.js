const Twitter = require('twitter')

// Move these to env..
const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
})

const search = (keywords) => {
    // Make this not just use the first one
    let filter = null
    if(Math.random() > 0.5){
        filter = "i hate"
    } else {
        filter = "sucks"
    }
    let query = encodeURIComponent(`"${filter} ${keywords.join(" ")}"`)
    return new Promise((resolve, reject) => {
        client.get('search/tweets', {q: query}, function(error, tweets) {
            resolve(tweets.statuses)
        })
    })
}

module.exports = {
    search: search
}
