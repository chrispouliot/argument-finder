import React from 'react'

const friendsListStyle = {
    listStyle: "none"
}

const paragraphStyle = {
    color: "#ffffff"
}

const FriendList = React.createClass({
    renderTweetList(tweets) {
        return tweets.map((tweet, index) => {
            return (
                <li key={index} style={paragraphStyle}>
                    <a href={"https://twitter.com/" + tweet.username}>{tweet.username}</a>
                    <p>{tweet.text}</p>
                    <br />
                </li>
            )
        })
    },

    render() {
        if(this.props.loading) {
            return (
                <p>LOADING...</p>
            )
        }
        if(this.props.friends.length == 0) {
            return (
                <p>NOBODY RIGHT NOW MAYBE TRY TO LOOK UP A THING OR ANOTHER THING OR WHATEVER</p>
            )
        }
        return (
            <div>
                <ul style={friendsListStyle}>
                    {this.renderTweetList(this.props.friends)}
                </ul>
            </div>
        )
    }
})

export default FriendList