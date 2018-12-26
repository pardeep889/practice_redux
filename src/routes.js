import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import List from './components/list.js';
import Photo from './components/photo';
import Album from './components/album';
import Mix from './components/mix';
import Practice from './components/practice';
import PracticeOne from './components/practice1';
import Last from './components/last';
const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/list" exact component={List}/>
                <Route path="/photo" exact component = {Photo}/>
                <Route path="/album" exact component = {Album}/>
                <Route path="/mix" exact component = {Mix}/>
                <Route path="/practice" exact component={Practice}/>
                <Route path="/last" exact component={Last}/>
                <Route path= "/practice1" exact component={PracticeOne}/>
                <Route path="/artist/:id" exact component={Artist}/>
            </Switch>
        )
}

export default Routes;