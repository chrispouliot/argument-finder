import React from 'react'
import { Grid } from 'react-bootstrap'
import jankyscroll from '../JANKERSCROLL'

import InputController from './InputController'
import FriendList from './FriendList'

jankyscroll(150, 50)

const App = React.createClass({
    getInitialState() {
        return {
            friends: [],
            loading: false
        }
    },

    setFriendList(friends) {
        this.setState({
            friends: friends
        })
    },

    toggleLoading() {
        if(!this.state.loading) {
            alert("r u sure?")
        }
        this.setState({
            loading: !this.state.loading
        })
    },

    render() {
        return (
            <div>
                <h1>FIND SOMEONE TO HAVE AN ARGUMENT WITH ON TWITTER</h1>
                <h2>WHAT DO YOU WANT TO HAVE AN ARGUMENT ABOUT?</h2>
                <InputController setFriendList={this.setFriendList} toggleLoading={this.toggleLoading} loading={this.state.loading}/>
                <Grid>
                    <FriendList friends={this.state.friends} loading={this.state.loading}/>
                </Grid>
            </div>
        )
    }
})

export default App