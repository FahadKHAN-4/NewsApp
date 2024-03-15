import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  static defaultProps = {
    country: "us",
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
      articles : [],
      totalResults: 0,
      page : 1,
      loading : false
    }

    document.title = `TopNews - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async componentDidMount(){
    this.props.setProgress(0);
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=7`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.props.setProgress(70);
    this.setState({articles: parsedata.articles,
        totalResults: parsedata.totalResults
    })
    this.setState({loading:false})
    this.props.setProgress(100);
  }

  fetchMoreData = async () =>{
    this.setState({page: this.state.page + 1})
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=7`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalResults: parsedata.totalResults,
    })
    this.setState({loading:false})

  }

  // handleNextClick = async () => {
  //   this.setState({loading:true})
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page + 1}&pageSize=10`;
  //   let data = await fetch(url);
  //   let parsedata = await data.json();

  //   this.setState({
  //       articles: this.state.articles.concat(parsedata.articles),
  //       totalResults: parsedata.totalResults,
  //       page : this.state.page + 1
  //   })
  //   this.setState({loading:false})
  // }

  // handlePrevClick = async () => {
  //   this.setState({loading:true})
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page - 1}&pageSize=10`;
  //   let data = await fetch(url);
  //   let parsedata = await data.json();

  //   this.setState({articles: parsedata.articles,
  //       totalResults: parsedata.totalResults,
  //       page : this.state.page -1
  //   })
  //   this.setState({loading:false})

  // }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-2'>Top Headlines: {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader= {this.state.loading && <Spinner/>}> 

          <div className='row'>
              {this.state.articles.map((element)=>{
                  return <div className='col-lg-3 my-3' key={element.url}>
                      <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0,88):""}
                      imgUrl={element.urlToImage ? element.urlToImage:""} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
              })}
          </div>
        </InfiniteScroll>

        {/* <div className='d-flex justify-content-between my-3'>
            <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/10)}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}
