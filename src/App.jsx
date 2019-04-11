import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeSettings from 'Enum/routeSettingsEnum';

import DynamicImportUtil from 'Utils/dynamicImportUtil';

import './App.css';

const appRoutes = Object.values(routeSettings);

class App extends Component {
    render() {
        return (
            <div styleName="grid-container">
                <div styleName="body">
                    <Router>
                        <Route
                            render={({ location }) => (
                                <Switch key={location.key} location={location}>
                                    {appRoutes.map(({ path, RouteComponent }) => (
                                        <Route
                                            exact
                                            key={path}
                                            path={path}
                                            render={() => <DynamicImportUtil path={RouteComponent} />}
                                        />
                                    ))}
                                </Switch>
                            )}
                        />
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
