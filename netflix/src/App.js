import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GetMovies from "./Components/Home";
import MyNavbar from "./Components/MyNavbar";
import GetMovies2ndrow from "./Components/Movies";
import GetMovies3ndrow from "./Components/Movies2";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FooterSection from "./Components/FooterSection";
function App() {
  return (
    <div className="App">
      {/*  <MyNavbar /> */}
      <Navbar />
      <Header />
      <GetMovies />
      <GetMovies2ndrow />
      <GetMovies3ndrow />
      <FooterSection />
      {/*       <Footer />
       */}{" "}
    </div>
  );
}

export default App;
