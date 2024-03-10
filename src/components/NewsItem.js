import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {
  render() {
    let {title, imgUrl, description, newsUrl} = this.props;
    return (
      <div>
        <div className="card news-item" style={{height: "27rem"}}>
            <img src={imgUrl ? imgUrl : "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2056666977.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read more.</a>
            </div>
        </div>
      </div>
    )
  }
}

