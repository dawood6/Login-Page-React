import React from 'react';
import { render } from 'react-dom';
import Login from './Components/Login'
import App from './Components/App'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'; 



function Index() {
    return(
        <div>
            <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/App' exact component={App} />
            </Switch>
            </Router>
        </div>
    )
}

render(<Index />, document.getElementById('root'))