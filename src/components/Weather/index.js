import React from 'react';
import axios from 'axios';
import Loader from '../Loader';
import WeekList from './WeekList';
import './index.css';

const API_KEY = '21837ae41b11b95f43b92bc48f5b4c2c';
const API_HTTP = 'http://api.openweathermap.org/data/2.5/forecast';
const PARAMNAME_CITY = 'q';
const PARAMNAME_UNITS = 'units';
const PARAMNAME_API_KEY = 'APPID';
const DEFAULT_CITY = 'Karaganda';
const DEFAULT_UNITS = 'metric'

class Weather extends React.Component{
    _isMounted = false; 
    constructor(props){
        super(props);
        this.state = {
            list: null,
            cityKey: DEFAULT_CITY,
            currentCity: null,
            error: null,
        };
        this.getResultsWeather = this.getResultsWeather.bind(this);
        this.setResultsWeather = this.setResultsWeather.bind(this);
        this.setCityKey = this.setCityKey.bind(this);
        this.searchResult = this.searchResult.bind(this);
    }

    getResultsWeather() {
        const {cityKey} = this.state;
        axios(`${API_HTTP}?${PARAMNAME_CITY}=${cityKey}&${PARAMNAME_UNITS}=${DEFAULT_UNITS}&${PARAMNAME_API_KEY}=${API_KEY}`)
            .then((result) => this._isMounted && this.setResultsWeather(result))
            .catch(error => {
                this._isMounted && this.setState({error})
            });
    }

    setResultsWeather(result) {
        this.setState({currentCity: result.data.city.name});
        result = result.data.list;
        let list = [[]];
        for(let i = 1, day = 0; i < result.length; i++)
        {
            if(!new Date(result[i].dt_txt).getHours())
            {
                list.push([]);
                day++;
            }
            list[day].push(result[i]);
        }
        this.setState({list});
    }

    setCityKey(ev){
        this.setState({cityKey: ev.target.value});
    }

    searchResult(){
        this.getResultsWeather();
    }

    componentDidMount(){
        this._isMounted = true;
        this.getResultsWeather();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render(){
        const {list, cityKey, currentCity, error} = this.state;
        return (
            <div>
                <div>
                    <input value={cityKey} onChange={this.setCityKey} className="city-input"/>
                    <button onClick={this.searchResult} className="btn btn-danger">Search</button>
                    
                </div>
                <div>
                    
                    {!error ? (list ? <WeekList weeks={list}/> : <Loader/>) : <p>Такого города не существует или что-то пошло не по плану</p>}
                </div>
            </div>
        );
    }

}

export default Weather;