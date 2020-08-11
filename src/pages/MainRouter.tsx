import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoadingScreen from '../component/LoadingScreen';

const HomePage = React.lazy(() => import('./Home/Home'));
const AboutPage = React.lazy(() => import('./About/About'));
const LoginPage = React.lazy(() => import('./Login/Login'));

const MainRouter = () => {

    // ReactRouter
    // Ref: https://reactrouter.com/web/api
    const router = (
        <Switch>
            {
                // Exact is not mentioned to hook nested Routing
                // path can also accept list of string path={['/', '/home']}
            }
            <Route path={['/about', '/about/:name']} component={AboutPage} />
            <Route path='/logout' exact render={ () => (<Redirect to='/login' />)} />
            <Route path='/login' component={ LoginPage } />
            <Route path='/' component={ HomePage } />
        </Switch>
    );

    return (
        <BrowserRouter>
            <Suspense fallback={ <LoadingScreen /> }>
                { router }
            </Suspense>
        </BrowserRouter>
    );
};

export default MainRouter;
