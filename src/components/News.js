import React , {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News (props) {

  let {country, category, setProgress} = props;

  const[articles, setArticles] = useState([]);
  const[totalResults, setTotalResults] = useState(0);
  const[page, setPage] = useState(1);
  const[loading, setLoading] = useState(false);
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `TopNews - ${capitalizeFirstLetter(category)}`;

  const updateNews = async ()=>{
    setProgress(0);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=7`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setProgress(70);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    setProgress(100);
  }

  useEffect(()=>{
    updateNews();
  },[]);

  const fetchMoreData = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page + 1}&pageSize=7`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();

    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
    setLoading(false);

  }

    return (
      <div className='container'>
        <h1 className='text-center' style={{marginTop: '80px'}}>Top Headlines: {capitalizeFirstLetter(category)}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles?.length || 0} 
          next={fetchMoreData}
          hasMore={(articles?.length || 0) !== totalResults}
          loader= {loading && <Spinner/>}> 

          <div className='row'>
              {articles && articles.map((element)=>{
                  return <div className='col-lg-3 my-3' key={element.url}>
                      <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0,88):""}
                      imgUrl={element.urlToImage ? element.urlToImage:""} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
              })}
          </div>
        </InfiniteScroll>
      </div>
    )

}

News.defaultProps = {
  country: "us",
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}
