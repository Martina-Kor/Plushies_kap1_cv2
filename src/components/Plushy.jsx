import React from 'react';

export const Plushy = (props) => {
  return (
    <div className="plushy">
      <img className="plushy__image" src={props.plushy.image} />
      <h2 className="plushy__name">{props.plushy.name}</h2>
      <p className="plushy__text">{props.plushy.text}</p>
    </div>
  );
};
