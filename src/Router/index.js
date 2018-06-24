import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'

import Index from '../components/'

export default class Rou extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" exact render={() => {
                                return <Redirect to="/index" />
                            }} />
                            <Route path="/index" component={Index}/>
                        </Switch>
                    </div>

                </Router>
            </div>
        )
    }
}
