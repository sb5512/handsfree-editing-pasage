import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = { movies: getMovies() };

  onDelete = movie_id => {
    const movies = [...this.state.movies].filter(
      movie => movie._id !== movie_id
    );
    this.setState({ movies });
  };

  onHandleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Number In Stock</th>
              <th />
              <th />
            </tr>
          </thead>
          {this.state.movies.map(movie => (
            <tbody key={movie._id}>
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLike={() => this.onHandleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.onDelete(movie._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
