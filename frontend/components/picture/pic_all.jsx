import React from 'react';
import values from 'lodash/values';


class PicAll extends React.Component {
  componentWillMount(){
    this.props.fetchPictures();
  }

  render(){
    const pics = values(this.props.pictures);
    const Pics = pics.map(pic => (
      <li>
        <img className="pics" src={pic.image_url}></img>
      </li>
    ));
    if(!pics){
      return (<div>no</div>);
    }
    return (
      <div>
        <h2 className="inside-title">What's new</h2>
        <ul className= "pics-index">
          {Pics}
        </ul>
      </div>
    );
  }
}

export default PicAll;
