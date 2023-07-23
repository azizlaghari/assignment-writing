// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Components/store';
import SignupPage from './Components/SignupPage';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/signup" component={SignupPage} />
                    {/* Add other routes here */}
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
