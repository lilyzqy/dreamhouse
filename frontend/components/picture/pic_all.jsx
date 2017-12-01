import React from 'react';
import values from 'lodash/values';

import PicAllItems from './pic_all_items';

class PicAll extends React.Component {
  componentWillMount(){
    this.props.fetchPictures();
  }

  render(){
    const pics = values(this.props.pictures);
    const Pics = pics.map(pic => (
      <PicAllItems key= {pic.id} pic={pic}
        createFavorite={this.props.createFavorite}
        deleteFavorite={this.props.deleteFavorite} />
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
