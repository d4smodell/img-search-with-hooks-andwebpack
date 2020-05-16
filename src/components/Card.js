import React from "react";

export const Card = ({ largeImageURL, pageURL, tags }) => {
    return (
      <div className="card mb-4">
        <img alt="ava" className="card-img-top" src={largeImageURL} />
        <div className="card-body">
          <h5 className="card-title">{tags}</h5>
          <div className="col">
            <a href={pageURL} target="blank" className="btn btn-dark">
              Open Photo
            </a>
          </div>
        </div>
      </div>
    );
  };
  