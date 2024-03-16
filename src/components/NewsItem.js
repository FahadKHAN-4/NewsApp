import React from 'react'
import './NewsItem.css'

const NewsItem = (props) => {
  
    let {title, imgUrl, description, newsUrl, author, date} = props;
    let d = new Date(date)

    return (
      <div>
        <div className="card news-item" style={{height: "31rem"}}>
            <img src={imgUrl ? imgUrl : "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2056666977.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="..." style={{height: "17rem", width: "auto" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}..</p>
                <p className="card-text custom"><small className="text-muted">By {author?author:"Unknown"} on {d.toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read more.</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem;