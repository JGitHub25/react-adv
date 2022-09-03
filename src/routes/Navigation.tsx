import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { routes } from "./routes";
import logo from "../logo.svg";
import { Suspense } from "react";

const renderRoutes = () => {
  return routes.map(({ path, Component }, index) => (
    <Route key={index} path={path}>
      {<Component />}
    </Route>
  ));
};

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path} activeClassName="nav-active" exact>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {renderRoutes()}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
