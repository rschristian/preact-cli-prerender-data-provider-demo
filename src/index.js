import { h } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';

import Header from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Profile from './routes/profile';
import NotFound from './routes/notFound';

import './style';

const App = (props) => {
    console.log(props.CLI_DATA.preRenderData.url);

    return (
        <Provider value={props}>
            <div id="app">
                <Header />
                <main>
                    <Router>
                        <Home path="/" />
                        <Profile path="/profile/" user="me" />
                        <Profile path="/profile/:user" />
                        <NotFound default />
                    </Router>
                </main>
            </div>
        </Provider>
    );
}

export default App;
