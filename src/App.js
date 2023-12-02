import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const Main = lazy(() => import("./pages/Main/Main"));
const User = lazy(() => import("./pages/User/User"));
const Post = lazy(() => import("./pages/Post/Post"));
const Album = lazy(() => import("./pages/Album/Album"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const Suspended = ({ children }) => (
  <Suspense fallback={<Preloader />}>{children}</Suspense>
);

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <main className="page__main">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/users" />
            </Route>
            <Route path="/users" exact>
              <Suspended>
                <Main />
              </Suspended>
            </Route>
            <Route path="/user/:userId" exact>
              <Suspended>
                <User />
              </Suspended>
            </Route>
            <Route path="/user/:userId/post/:postId" exact>
              <Suspended>
                <Post />
              </Suspended>
            </Route>
            <Route path="/user/:userId/album/:albumId" exact>
              <Suspended>
                <Album />
              </Suspended>
            </Route>
            <Route path="*">
              <Suspended>
                <NotFound />
              </Suspended>
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
