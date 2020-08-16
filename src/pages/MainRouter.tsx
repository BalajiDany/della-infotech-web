import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthendicated } from '../api/awsApi';
import LoadingScreen from '../component/LoadingScreen';

const HomePage = React.lazy(() => import('./Home/Home'));
const AboutPage = React.lazy(() => import('./About/About'));
const LoginPage = React.lazy(() => import('./Login/Login'));

const MainRouter = () => {

    // Check for auth
    const [authendicated, setAuthendicated] = useState(false);
    const [enableRouting, setEnableRouting] = useState(false);

    useEffect(() => {
        // Check for auth and setAuthendicated.
        isAuthendicated()
            .then(() => setAuthendicated(false)) // Set it based on the result
            .catch(() => setAuthendicated(false))
            .finally(() => setEnableRouting(true));
    }, []);
    console.log(authendicated, 'authendication');

    // Only After Authendication these routers are performed
    const authndicatedRouter = [
        // All Authendicated Routes

        <Route path='/home' component={HomePage} />,
        <Route path='/' exact render={() => (<Redirect to='/home' />)} />,
        <Route path='/login' exact render={() => (<Redirect to='/home' />)} />,
    ];

    const erroHandlingRouter = [
        <Route render={() => (<h5>Could not find the resource</h5>)} />
    ]

    const router = (
        <Switch>
            {authendicated ? authndicatedRouter : null}

            {/* pages That dont need for authendication */}
            <Route path={['/about', '/about/:name']} component={AboutPage} />
            <Route path='/passwordReset' exact render={() => <h1>Password Reset Page</h1>} />


            <Route path={['/', '/logout']} exact render={() => (<Redirect to='/login' />)} />
            <Route path='/login' component={LoginPage} />
            {!authendicated ? <Route render={() => (<Redirect to='/login' />)} /> : erroHandlingRouter}
        </Switch>
    );

    const loadingScreen = <LoadingScreen />;

    return (
        <BrowserRouter>
            <Suspense fallback={loadingScreen}>
                {enableRouting ? router : loadingScreen}
            </Suspense>
        </BrowserRouter>
    );
};

export default MainRouter;
