import React from 'react';
import DayList from './DayList';

class WeekList extends React.Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        const {weeks} = this.props;
        return(
            <div>
                {weeks.map((week, index)=>{
                    return <DayList week={week} key={index}/>
                })}
            </div>
        )
        
    }
}
export default WeekList;