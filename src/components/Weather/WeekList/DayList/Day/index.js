import React from 'react';
import dateFormat from 'dateformat';

const styleDay = {
    block:{
        // width: '200px'
    }
}


class Day extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {day} = this.props;
        const dateT = new Date(day.dt_txt);
        const dayT =  dateFormat(dateT, 'mmmm dd');
        const timeT = dateFormat(dateT, 'HH:MM');
        const iconurl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
        return(
            <div className="card bg-danger m-2" style={styleDay.block}>
                <div className="card-header d-flex">
                    <strong>{dayT}</strong>
                    <strong className="ml-auto">{timeT}</strong>
                </div>
                <div className="card-body bg-light">
                    <p>{day.main.temp}°</p> 
                    <div className="d-flex">
                        {day.weather[0].description}
                        <img src={iconurl}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Day; 