import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Page404} from '../page/Page404';
import Main from '../page/Main';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route component={Page404}/>
            </Switch>
        </Router>
    );
}

export default App;
