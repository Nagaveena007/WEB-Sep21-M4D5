import { Component } from "react";
import { Carousel } from "react-bootstrap";
class Header extends Component {
  state = {
    gallery1: [],
  };
  OMDB_URL = "https://www.omdbapi.com/?apikey=d87edd3";

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = () => {
    fetch(this.OMDB_URL + "&s=harry%20potter")
      .then((response) => response.json())
      .then((responseObject) => {
        if (responseObject.Response === "True") {
          this.setState({ gallery1: responseObject.Search });
        } else {
          this.setState({ error: true });
        }
      });
  };
  render() {
    return (
      <Carousel>
        {this.state.gallery1.map((m) => (
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={m.Poster} alt="First slide" />
            <Carousel.Caption>
              <h3>{m.Title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
export default Header;
{
  /* <header className="header">
<div className="banner">
  <div className="banner-info">
    <h1 className="banner-title">{this.state.gallery1[1].Title}</h1>
    <div className="banner-icons">
      <button className="banner-btn">Play</button>
      <button className="banner-btn">My List</button>
    </div>
    <div className="banner-description">
      Harry Potter is an orphaned boy brought up by his unkind Muggle
      (non-magical) aunt and uncle. At the age of eleven, half-giant
      Rubeus Hagrid informs him that he is actually a wizard and that
      his parents were murdered by an evil wizard named Lord Voldemort.
    </div>
  </div>
  <div className="banner-fade"></div>
</div>
</header> */
}
