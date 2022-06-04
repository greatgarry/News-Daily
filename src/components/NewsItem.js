import React from 'react'
const NewsItem = (props)=> {
  
    let { title, description, image, newsUrl, author, date, source } = props
    return (
      <div className="card round mx-auto" style={{ width: "18rem", background: "#f0f7f6" }}>
        <div style={{
          display: 'flex',
          position: 'absolute',
          right: '0',
          justifyContent: 'flex-end'
        }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img src={image} className="card-img-top" alt="..." height="180vh" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
}

export default NewsItem
