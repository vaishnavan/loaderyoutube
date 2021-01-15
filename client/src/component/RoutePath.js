import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import VideoDisplay from './VideoDisplay';
import VideoForm from './VideoForm';

class RoutePath extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={VideoDisplay} />
                        <Route path="/videoForm" component={VideoForm} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RoutePath
