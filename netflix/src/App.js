import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GetMovies from "./Components/Home";
import MyNavbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <GetMovies />
      <MyNavbar />
    </div>
  );
}

export default App;
