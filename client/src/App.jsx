import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hm" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <main className="container">
        <div className="bg-body-tertiary p-5 rounded mt-3">
          <h1>This is HOME PAGE</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how the registration
            form works.
          </p>
          <Link to="/register">
            <a
              className="btn btn-lg btn-primary"
              href="/docs/5.3/components/navbar/"
              role="button"
            >
              Sign Up »
            </a>
          </Link>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
