import './App.css';
import Row from './Row';
import requests from './API/request'
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <>
          {/* <h1>NetFlix Clone</h1> */}
          <Nav></Nav>
          <Banner></Banner>
          <Row title="NETFLIX ORIGINAL" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
          <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
          
    </>
  );
}

export default App;
