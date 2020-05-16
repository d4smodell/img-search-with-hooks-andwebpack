import React, { useContext } from "react";
import {SearchContext} from '../context/searchContext'
import {Card} from '../components/Card'

export const Home = () => {
    const {images} = useContext(SearchContext)
  return (
    <div className='row'>
      {images.map((img) => {
        return (
          <div className="col-sm-4 mb-4">
            <Card
              largeImageURL={img.largeImageURL}
              tags={img.tags}
              pageURL={img.pageURL}
            />
          </div>
        );
      })}
    </div>
  );
};
