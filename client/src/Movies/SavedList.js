import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
     {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} className="saved-movie" key={movie.id}>{movie.title}</NavLink>
    ))}
    <Link to={`/`} className="home-button">Home</Link>
  </div>
);

export default SavedList;
