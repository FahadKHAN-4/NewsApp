import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps = {
    country: "us",
    category: "business"
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      totalResults: 0,
      page : 0,
      loading : false
    }
  }

  async componentDidMount(){
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({articles: parsedata.articles,
        totalResults: parsedata.totalResults
    })
    this.setState({loading:false})
  }

  handleNextClick = async () => {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({articles: parsedata.articles,
        totalResults: parsedata.totalResults,
        page : this.state.page + 1
    })
    this.setState({loading:false})
  }

  handlePrevClick = async () => {
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({articles: parsedata.articles,
        totalResults: parsedata.totalResults,
        page : this.state.page -1
    })
    this.setState({loading:false})

  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-2'>Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-lg-3 my-3' key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0,88):""}
                     imgUrl={element.urlToImage ? element.urlToImage:""} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
            })}
        </div> 
        <div className='d-flex justify-content-between my-3'>
            <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
