import React from "react";
// Stateless functional component

const Like = props => {
  //console.log(this.props.liked);
  let heartClass = "fa fa-heart";
  if (!props.liked) {
    heartClass += "-o";
  }
  return (
    <React.Fragment>
      <i
        onClick={props.onLike}
        style={{ cursor: "pointer" }}
        className={heartClass}
        aria-hidden="true"
      />
    </React.Fragment>
  );
};

export default Like;
