import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useRouteMatch, useParams, useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';

const About = () => {
    const routerMatch = useRouteMatch();
    const { name } = useParams();
    const location = useLocation();

    const query = queryString.parse(location.search);
    console.log(query);

    const [age, setAge] = useState(9);

    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Link to='/'>Home</Link>
            <h5>{ age }</h5>
            <button onClick={() => setAge(age + 1)}> Set Age</button>
            <Switch>
                <Route path={`${routerMatch.url}/partners`} render={() => (<h1>About Partners ALLLLLLL</h1>)} />
                <Route path={`${routerMatch.url}/`} render={() => {
                    return <h1>{`About ${name || 'All'}`}</h1>
                }} />
            </Switch>
        </div>
    )
};

export default About;
