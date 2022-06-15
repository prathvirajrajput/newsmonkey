import React from "react";

const NewsItem = (props) => {
  
  let { title, description, imgUrl,newsUrl,date} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgUrl?`https://images.indianexpress.com/2022/05/Indian-express-logo-5.jpg`:imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read More </a>
          </div>
        </div>
      </div>
      
    );
  }
   export default NewsItem;

