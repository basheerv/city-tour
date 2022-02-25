import React, { Component } from 'react'
export default class Tour extends Component {
   

    state = {
        info_para: false
    };

    toggleClick = () => {
        // console.log("dfdfsdfd");
        this.setState({
         info_para: !this.state.info_para
       });
    }
    render() {
        // console.log(this.props)
        const { id,city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className='tour'>
                <div className="img_responsive">
                    <img src={img} alt="Tour Img" />
                    <span className='close_btn' onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour_info">
                    <h3>{ city }</h3>
                    <h4>{ name }</h4>
                    <h5>{"info"} 
                        <span onClick={this.toggleClick}>
                            <i className='fas fa-caret-square-down'></i>
                        </span>
                    </h5>
                    { this.state.info_para ? <p>{info}</p> : null}
                    
                </div>
            </article>
        )
    }
}