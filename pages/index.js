import Head from 'next/head';
import { CustomCard, Select } from '../component';
import { getItems } from '../service/omdb.service';
import { debounce } from '../util';

const TYPES = [
  { label: 'All', value: '' },
  { label: 'Movie', value: 'movie'},
  { label: 'Series', value: 'series'},
  { label: 'Episode', value: 'episode'},
]

export default function Home() {

  const [type, setType] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  const getSearchResult = () => {
    let queryString = `type=${type ? type.value : ''}&s=${search}`;
    getItems(queryString).then(data => {
        setSearchResult(data);
    });
  }

  const debounceSearch = debounce(getSearchResult, 1000);

  React.useEffect(() => {
    debounceSearch();
  }, [search, type])

  return (
    <div className="container">
      <Head>
        <title>Demo Application</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous"></link>
      </Head>
      <main style={{ padding: '10px'}}>
        <h1 className="title">
          Welcome to <a href="https://github.com/sajan02/assignment-project-railofy">Demo App</a>
        </h1>
        <div className="col-12 row app-description">
          <h3>You can search for the movies by selecting the <strong>type</strong> and by providing the <strong>search</strong> in the search bar.</h3>
        </div> 
        <div className='col-12 row'>
          <div className='col-4'>
            <Select options={TYPES} name='type' value={type}
            onChange={setType}
            options={TYPES} placeholder={'Types...'}/>
          </div>
          <div className='col-8'>
          <input
           placeholder='Search...'
           value={search}
           onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control search-input"
            aria-label="Text input with dropdown button"/>
          </div>
        </div>
        <div className='col-12 row'>
          {
            searchResult.map(datum => {
              return <CustomCard {...datum}/>
            })
          }
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
