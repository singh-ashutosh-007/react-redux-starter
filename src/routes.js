import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

const RoutingConfig = () => (
  <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/courses" component={CoursesPage}/>
    <Route path="/course/:id" component={ManageCoursePage}/>
    <Route path="/about" component={AboutPage}/>
  </div>
);

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path="about" component={AboutPage} />
//   </Route>
// );
// const RoutingConfig = (
//
//   <Router>
//     <div>
//       <Route exact path="/" component={HomePage}/>
//       <Route path="/about" component={AboutPage}/>
//     </div>
//   </Router>
// );

// const routes = {
//     path: '/',
//     component: App,
//     childRoutes: [
//         { path: '/about', component: AboutPage }
//         // ,
//         // {
//         //   path: '/posts',
//         //   component: Posts,
//         //   childRoutes: [ { path: '/post/:nr', component: Post } ]
//         // },
//         // { path: '*', component: NoMatch}
//     ]
// };
// export default RoutingConfig;


export default RoutingConfig;
