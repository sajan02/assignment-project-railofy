import React, { useState, useEffect} from 'react';
import { DescriptiveCard } from '../../component';
import { getItem } from '../../service/omdb.service';
import Link from 'next/link';

const DATA = {
    "Title": "CKY 4 Latest & Greatest",
    "Year": "2003",
    "Rated": "N/A",
    "Released": "25 Mar 2003",
    "Runtime": "54 min",
    "Genre": "Action, Comedy",
    "Director": "Bam Margera",
    "Writer": "N/A",
    "Actors": "Bam Margera, Brandon DiCamillo, Ryan Dunn, Chris Raab",
    "Plot": "Bam Margera continues to goon with his squad",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIwMDQ5NzY2Ml5BMl5BanBnXkFtZTcwNjU2OTgxMQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.3/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.3",
    "imdbVotes": "1,728",
    "imdbID": "tt0363495",
    "Type": "movie",
    "DVD": "01 Jan 2002",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
export default function Index(props) {
    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [state, setLoadingState] = useState('Loading...')

    useEffect(() => {
        let id = window.location.pathname.split('/').filter(d => d)[1];
        id && getItem(`i=${id}`).then(data => {
            setdata(data);
        }).catch(e => setLoadingState('Not able to access the Resources'))
        .finally(() => setLoading(true));
    }, [])
    return (
        <div className="movie-card">
            <div className="btn-container"><Link href={'/'} as={"/"} className="button">{"Home"}</Link></div>
            {
            loading ?
                <DescriptiveCard {...data}/>
                : <div className='loading-container'>{state}</div>
            }
        </div>
    )
}
