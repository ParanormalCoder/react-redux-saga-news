import React from 'react';
import {Container} from 'react-bootstrap';
import {Route, Switch} from "react-router-dom";

import './Main.scss';

import Navigation from "../Navigation/Navigation";
import NewsArticles from "../NewsArticles/NewsArticles";
import Sources from "../Sources/Sources";

function renderRoute() {
    return (
        <Switch>
            <Route exact path="/">
                <NewsArticles type='head-news'/>
            </Route>
            <Route path="/articles">
                <NewsArticles/>
            </Route>
            <Route path="/sources">
                <Sources/>
            </Route>
        </Switch>
    )
}

function Main() {
    return (
        <Container className="Main">
            <Navigation/>
            {renderRoute()}
        </Container>
    );
}

export default Main;
