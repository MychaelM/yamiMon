import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
// eslint-disable-next-line
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { LoginPage } from './components/pages/Login';
import { LandingPage } from './components/pages/Landing';
import { ProfilePage } from './components/pages/Profile';
import { config } from './utils/oktaConfig';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/landing" component={LandingPage} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" exact component={() => <LandingPage />} />
        <Route path="/example-list" component={ExampleListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
