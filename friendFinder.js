const twitterSearch = require('./twitterClient').search


const find = (keywords) => {
    return twitterSearch(keywords)
        .then(tweets => {
            let formatted_tweets = []
            for(let tweet of tweets) {
                // Don't want retweets to be shown
                if(tweet.text.indexOf("RT @") < 0) {
                    // The frontend only cares about username / text
                    formatted_tweets.push({
                        username: tweet.user.screen_name,
                        text: tweet.text
                    })
                }
            }
            return formatted_tweets
        })
}

module.exports = {
    find: find
}