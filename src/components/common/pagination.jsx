import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const {
      itemSize,
      pageSize,
      onPageClick,
      currentPage
    } = this.props.pageInfo;
    const totalPages = Math.ceil(itemSize / pageSize);
    const pages = _.range(1, totalPages + 1);
    if (totalPages === 1) return null;
    return (
      <nav>
        <ul className="pagination">
          {pages.map(id => {
            return (
              <li
                key={id}
                className={
                  currentPage === id ? "page-item active" : "page-item"
                }
              >
                <a onClick={() => onPageClick(id)} className="page-link">
                  {id}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
