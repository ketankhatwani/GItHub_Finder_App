import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import Notfoud from "./Pages/Notfoud";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/user/:login" element={<User />} />
              <Route exact path="/*" element={<Notfoud />} />
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
