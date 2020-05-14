import React from 'react';
import Link from 'next/link';

export default function index(props) {
    let { Title, Year, imdbID, Type, Poster} = props;
    return (
  <div className="custom-card card col-md-6 col-sm-12 col-12">
    <div className="wrapper" style={{
        background : `url(${Poster}) center / cover no-repeat`,
    }}>
      <div className="header">
        <div className="date">
        <span className="day">{Year}</span>
        </div>
      </div>
      <div className="data">
        <div className="content">
        <span className="author">{Type}</span>
        <h1 className="title">{Title}</h1>
          <p className="text"></p>
          <Link href={`/about/${imdbID}`} as={`/about/${imdbID}`}><a className="button">Read more</a></Link>
        </div>
      </div>
    </div>
  </div>
    )
}
