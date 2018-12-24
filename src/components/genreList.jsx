import React, { Component } from "react";

class GenreList extends Component {
  render() {
    const { genres, onGenreClick, selectedGenre } = this.props;
    return (
      <React.Fragment>
        <h2>FilterBy</h2>
        <ul className="list-group">
          {genres.map(genre => {
            return (
              <li
                key={genre._id || genre.name}
                onClick={() => onGenreClick(genre)}
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
      </React.Fragment>
    );
  }
}

export default GenreList;
