import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { MoreDetails } from "./components/StarredRepo/MoreDetails/MoreDetails";
import { StarredRepo } from "./components/StarredRepo/StarredRepo";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="starredrepo" element={<StarredRepo />} />
        <Route path="starredrepo/:moredetails" element={<MoreDetails />} />
      </Routes>
    </div>
  );
}

export default App;
