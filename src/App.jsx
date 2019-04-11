import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeSettings from 'Enum/routeSettingsEnum';

import DynamicImportUtil from 'Utils/dynamicImportUtil';

import './App.css';

const appRoutes = Object.values(routeSettings);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            cards: [],
        };
    }

    componentDidMount() {
        fetch('src/data/users.json')
            .then(response => response.json())
            .then((response) => {
                const { users, cards } = response;
                this.setState({
                    users,
                    cards,
                });
            });
    }

    render() {
        const { cards, users } = this.state;
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
                                            render={() => <DynamicImportUtil path={RouteComponent} users={users} cards={cards} />}
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
