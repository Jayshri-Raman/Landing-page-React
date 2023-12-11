import React from 'react';
import PickMeals from "../assests/pick-meals-image.png";
import ChooseMeals from "../assests/choose-image.png";
import DeliveryMeals from "../assests/delivery-image.png";


const Work = () => {

  const workInfoData=[
    {
        image:PickMeals,
        title:"Pick Meals",
        text:"Lorem ipsum dolor sit amet consectetur. Non tincidunt",


    },
    {
        image:ChooseMeals,
        title:"ChooseMeals",
        text:"Lorem ipsum dolor sit amet consectetur. Non tincidunt",


    },
    {
        image:DeliveryMeals,
        title:"Delivery Meals",
        text:"Lorem ipsum dolor sit amet consectetur. Non tincidunt",


    },

  ];

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-subheading'>How it Works</h1>

            <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt

            </p>
        </div>

        <div className='work-section-bottom'>
            {
                workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-image-container'>
                            <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                )
                )
            }
        </div>
      
    </div>
  )
}

export default Work
