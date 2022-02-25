import React, { Component } from 'react';
import './../Tour/Tour.scss';
import { tourData } from './../../tourData';
import Tour from './../Tour';
export default class TourList extends Component {

  state = {
    tours:tourData
  }

  removeTour = (id) => {
   // console.log(id);
    const sortedData = this.state.tours.filter(item => item.id !== id);
     this.setState({
            tours : sortedData
     });
   }
  render() {
    console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className='tour_list'>
         {
          tours.map(tour => (
            <Tour key={tour.id} tour={tour}  removeTour={ this.removeTour } />
          ))
        } 
      </section>
    )
  }
}
