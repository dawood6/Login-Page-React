import React from 'react';
import Login from './Components/Login'
import App from './Components/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import HigherOrderComponent from './Components/HOC';


class Index extends React.Component {
    state = {
        isLoggedIn: false
    }

    loginUser = () => this.setState({ isLoggedIn: true })
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact render={() => <Login loginUser={this.loginUser} />} />
                        <HigherOrderComponent isLoggedIn={this.state.isLoggedIn} path='/app' exact component={App} />
                    </Switch>
                </Router>
            </div>
        )
    }
}



render(<Index />, document.getElementById('root'))