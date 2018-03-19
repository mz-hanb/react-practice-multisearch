import React, { Component } from 'react';
import "./App.css";
import { Filters, DataList } from './components';

class App extends Component {
  constructor(params){
    super(params);
    this._changeFilter = this._changeFilter.bind(this);
  }

  state = {
    origin: [],
    data: [
      {
        id: 1,
        country: "United Arab Emirates",
        capital: "Abu Dhabi",
        region: "Asia",
        subregion: "Western Asia",
        latitude: "24.00",
        longitude: "54"
      },
      {
        id: 2,
        country: "United Arab Emirates",
        capital: "Abu Dhabi",
        region: "Asia",
        subregion: "Western Asia",
        latitude: "24.00",
        longitude: "54"
      }
    ], 
    filters: ['', '', '', '']
  };

  componentDidMount() {    
    this._getList();    
  }

  _getList = async() => {        
    const data = await this._callApi();
    this.setState({
      origin: data,
      data 
    })    
  }

  _callApi = () => {
    return fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then( res => res.json() )
    .then( json => json.map( item => {
      return { id: item.flag, country: item.name.common, capital: item.capital[0], region: item.region, subregion: item.subregion, latitude: item.latlng[0], longitude: item.latlng[1] }
    }))
    .catch( err => console.log(err) );
  }

  _changeFilter(e, id, key){
    const stFilter = e.target.value;        
    const nextFilters = this.state.filters;
    nextFilters[id] = stFilter;
    
    // 빈문자열 삽입시 빠져나감
    if(  stFilter.length >= 1 && stFilter.trim().length === 0 ) return;      
    const tgData = this.state.origin.concat();        

    // 검색어를 입력한 경우
    let filteredData = [];    
    filteredData = tgData.filter( this._getFiltered, {key: 'country', stFilter: nextFilters[0] } )
    .filter( this._getFiltered, {key: 'capital', stFilter: nextFilters[1] } )    
    .filter( this._getFiltered, {key: 'region', stFilter: nextFilters[2] } )    
    .filter( this._getFiltered, {key: 'subregion', stFilter: nextFilters[3] } );        
        
    this.setState({
      data: filteredData
    });    
  }

  _getFiltered(obj){    
    const tgKey = this.key; 
    const stFilter = this.stFilter;
    const tgVal = obj[tgKey];
    if( tgVal === '' || tgVal === undefined ) return false;    
    return tgVal.toLowerCase().indexOf( stFilter.toLowerCase() ) != -1;  
  }


  render() {
    const data = this.state.data;
    const filterList = [
      { key: 'country', desc: "Filter by Country" },
      { key: 'capital', desc: "Filter by Capital" },
      { key: 'region', desc: "Filter by Region" },
      { key: 'subregion', desc: "Filter by Subregion" }
    ];
    
    const { _changeFilter }  = this;

    return (
      <div className="App">        
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Filters filterList={filterList} ehChange={_changeFilter} />
        <DataList data={data} />
      </div>
    );
  }
}

export default App;
