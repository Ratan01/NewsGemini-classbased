import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ background:"ivory"}}>
        <div style={{diplay:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}> 
            <span className="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
          </div>
          <img src={!imageUrl?"https://nypost.com/wp-content/uploads/sites/2/2025/01/96698652.jpg?quality=75&strip=all&w=1024":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-body-secondary">by {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}