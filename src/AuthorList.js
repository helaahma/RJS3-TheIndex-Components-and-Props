import React from "react";
import AuthorCard from "./AuthorCard";
function AuthorList(props) {
  const authcard = props.authors.map(author => (
    <AuthorCard author={author} key={author.last_name} />
  ));
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authcard}</div>
    </div>
  );
}
export default AuthorList;
