import React from 'react'
import ReactDOM from 'react-dom'

import tweetGetter from '../util/tweetGetter'
import { Button, FormControl } from 'react-bootstrap'

const InputController = React.createClass({
    receiveTweetHandler(data) {
        console.log(data)
        this.props.toggleLoading()
        this.props.setFriendList(data.tweets)
    },

    submit() {
        this.props.toggleLoading()
        let input = ReactDOM.findDOMNode(this.refs.keyInput).value
        let keywords = input.split(" ")
        tweetGetter(keywords, this.receiveTweetHandler)
    },

    render() {
        return (
            <div>
                <FormControl ref="keyInput" type="text" placeholder="PUT A WORD HERE TO SEE PEOPLE WHO PROBABLY DONT LIKE IT" />
                <Button bsSize="large" onClick={this.submit} className="spin-button" disabled={this.props.loading}>Submit</Button>
            </div>
        )
    }
})

export default InputController