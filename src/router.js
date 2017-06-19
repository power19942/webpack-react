import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
// import ArtistDetail from './components/artists/ArtistDetail';
// import ArtistCreate from './components/artists/ArtistCreate';
// import ArtistEdit from './components/artists/ArtistEdit';

const componentRoutes = {
     component:Home,
    path:'/',
    indexRoute:{component:ArtistMain},
    childRoutes:[
        {
            path:'artists/new',
            getComponent(location,cb){
                System.import('./components/artists/ArtistCreate')
                    .then(m=>cb(null,m.default()));
            }
        },
        {
            path:'artists/:id',
            getComponent(location,cb){
                System.import('./components/artists/ArtistDetail')
                    .then(m=>cb(null,m.default()));
            }
        },
        {
            path:'artists/:id/edit',
            getComponent(location,cb){
                System.import('./components/artists/ArtistEdit')
                    .then(m=>cb(null,m.default()));
            }
        }
    ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
