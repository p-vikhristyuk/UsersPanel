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
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UsersPanel</title>
        <meta
          name="description"
          content="Getting users from fake API, managing all data related to users (info, posts, albums)"
        />
      </Helmet>
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
    </>
  );
}

export default App;
