import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import reducers from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/new" component={NewPost}/>
                    <Route path="/" component={Posts}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
