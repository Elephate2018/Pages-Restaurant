import React from 'react'
import { Switch, Route }  from 'react-router-dom';
import Menu from './Presentations/Menu';
import Review from './Presentations/Review';

const Content = () => (
    <div className="container-fluid">
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/Reviews" component={Review} />
        </Switch>
    </div>
)

export default Content