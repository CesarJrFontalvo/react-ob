import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Loginpage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';
import Registerpage from './pages/auth/RegisterPage';
import Profilepage from './pages/profile/ProfilePage';



function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = sessionStorage.getItem('credentials')
  return (
    <Router>
      {/* Route Switch */}
      <Switch>

        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {loggedIn ? (<Redirect from='/' to='/dashboard' />) : (<Redirect from='/' to='/login' />)}
        </Route>

        {/* <Route exact path='/login' component={Loginpage} /> */}
        {/* <Route exact path='/register' component={Registerpage} /> */}

        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {loggedIn ? (<Dashboardpage />) : (<Redirect from='/' to='/login' />)}
        </Route>

        {/* Login Route */}
        <Route exact path='/login'>
          {!loggedIn ? (<Loginpage />) : (<Redirect from='/' to='/dashboard' />)}
        </Route>

        {/* Register Route */}
        <Route exact path='/register'>
          {!loggedIn ? (<Registerpage />) : (<Redirect from='/' to='/dashboard' />)}
        </Route>

        <Route component={Notfoundpage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
