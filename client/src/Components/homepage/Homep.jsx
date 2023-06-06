import React, { useState } from 'react'

import '../homepage/homestyle.css'
function Homep() {


  const imgs = [
    { id: 0, value: "../img/one.jpg" },
    { id: 1, value: "../img/two.jpeg" },
    { id: 2, value: "../img/n-one.jpg" },
    { id: 3, value: "../img/four.jpeg" },
    { id: 4, value: "../img/five.jpg" },
  ];
  const [sliderData, setSliderData] = useState(imgs[0])
  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  }
  return (
    <>
      <div className='background'>




        <div className='main-area'>
          <div className='content-area'>
            <p className='p-one'>Choose the <span>best</span> </p>
            <p className='p-one'>one for you</p>
            <p className='p-two'>
              The wait is over. A beautiful blend of design and
            </p>
            <p className='p-two'>technology in every step of your running.</p>

            <button type='submit' className='btn-one'>Add to cart</button>
            <button type='submit' className='btn-two'>Buy Now</button>
          </div>
          <div className='projection'>
            <img src={sliderData.value} alt=""></img>
          </div>
        </div>
     

      <div className='crosel'>
        {
          imgs.map((data, i) =>
            <img key={data.id} src={data.value} alt="" onClick={() => handleClick(i)}></img>
          )
        }
      </div>
      </div>
      <div className='lastsection'>

      </div>
    </>

  )
}

export default Homep