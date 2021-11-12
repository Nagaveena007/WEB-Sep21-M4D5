import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GetMovies from "./Components/Home";
import MyNavbar from "./Components/MyNavbar";
import GetMovies2ndrow from "./Components/Movies";
import GetMovies3ndrow from "./Components/Movies2";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/*       <Navbar />
       */}{" "}
      <Header />
      <GetMovies />
      <GetMovies2ndrow />
      <GetMovies3ndrow />
    </div>
  );
}

export default App;
