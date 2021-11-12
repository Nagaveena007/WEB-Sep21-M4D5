import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
class GetMovies extends Component {
  state = {
    movies: [],
    movies2: [],
  };
  componentDidMount = () => {
    console.log("componentDidMount");
    this.fetchMovies();
    // this.fetch2ndrowMovies();
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=d87edd3&s=harry%20potter",
        {
          method: "GET",
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          movies: data.Search,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*   fetch2ndrowMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=d87edd3&t=lord+of+the+rings",
        {
          method: "GET",
        }
      );
      console.log(response);
      if (response.ok) {
        let data1 = await response.json();
        console.log(data1);
        this.setState({
          movies: data1.Search,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
 */
  render() {
    return (
      <section className="shows section-center">
        <h3 className="shows-title">Popular Now</h3>
        <div className="shows-imgs" id="romantic">
          {this.state.movies.map((m) => (
            <img
              className="img-fluid section-img mb-3"
              key={m.imdbID}
              src={m.Poster}
            />
          ))}
        </div>
      </section>
    );
  }
}
export default GetMovies;
