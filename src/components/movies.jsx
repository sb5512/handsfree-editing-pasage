import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import GenreList from "./genreList";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 2,
    currentPage: 1,
    genres: getGenres(),
    selectedGenre: null
  };

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

  handlePageClick = pageId => {
    this.setState({ currentPage: pageId });
  };

  onHandleGenreClick = genre => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      genres,
      selectedGenre
    } = this.state;
    const filteredMovies = selectedGenre
      ? allMovies.filter(m => {
          return m.genre._id === selectedGenre._id;
        })
      : allMovies;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <GenreList
            genres={genres}
            onGenreClick={this.onHandleGenreClick}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
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
            {movies.map(movie => (
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
          <Pagination
            pageInfo={{
              itemSize: filteredMovies.length,
              pageSize: this.state.pageSize,
              onPageClick: this.handlePageClick,
              currentPage: this.state.currentPage
            }}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
