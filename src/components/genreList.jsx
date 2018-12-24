import React, { Component } from "react";

class GenreList extends Component {
  render() {
    const { genres, onGenreClick, selectedGenre } = this.props;
    return (
      <ul className="list-group">
        <li className="list-group-item active" style={{ cursor: "pointer" }}>
          All Genres
        </li>
        {genres.map(genre => {
          return (
            <li
              onClick={() => onGenreClick(genre)}
              key={genre._id}
              style={{ cursor: "pointer" }}
              className={
                selectedGenre === genre
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GenreList;
