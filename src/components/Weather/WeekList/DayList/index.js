import React from 'react'
import Day from './Day';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dateFormat from 'dateformat';


let w = window.innerWidth;
const style = {
    text:{
        fontSize: '40px',
    }
}
const settings = {
    dots: false,
    infinite: false,
    focusOnSelect: false,
    arrows:false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint:700,
            settings: {
                slidesToShow: 2
            }
        }
    ]
  };

class DayList extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        const {week} = this.props;
        
        return(
            <div>
                <div className="bg-secondary w-auto text-center text-light">
                    <p style={style.text}>{dateFormat(week[0].dt_txt, 'dddd')}</p>
                </div>
                <Slider {...settings}>
                    {week.map((day, index)=>{
                        return <Day day={day} key={index}/>
                    })}
                </Slider>
            </div>
            
        )
    }
}
export default DayList;