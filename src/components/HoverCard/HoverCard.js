import React, { Component } from 'react'
import './HoverCard.css'
import img1 from '../../images/img1.jpg'

export class HoverCard extends Component {
  render() {
    return (
      <div className='HoverCard'>
        <div className="box">
            <div className="card">
                <div className="imgBx">
                    <img src={img1}/>
                </div>
                <div className="details"></div>
            </div>
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img1}/> */}
                </div>
                <div className="details"></div>
            </div>
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img1}/> */}
                </div>
                <div className="details"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default HoverCard
