import React, { Component } from "react";
import "./App.css";
import { Filters, List } from "./components";

class App extends Component {
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
      return { id: item.flag, country: item.name.common, capital: item.capital, region: item.region, subregion: item.subregion, latitude: item.latlng[0], longitude: item.latlng[1] }
    }))
    .catch( err => console.log(err) );
  }

  _changeFilter(e, id, key){
    console.log( id );
    // const val = e.target.value;
    const {filters} = this.state;
    // const nextFilters = [...filters];
    // nextFilters[id] = val;

    this.setState({
      filters
    })

    console.log( filters );
    
  
  }

  render() {
    const data = this.state.data;
    const filterList = [
      { key: 'contry', desc: "Filter by Country" },
      { key: 'capital', desc: "Filter by Capital" },
      { key: 'region', desc: "Filter by Region" },
      { key: 'subregion', desc: "Filter by Subregion" }
    ];
    
    const  { _changeFilter }  = this;

    return (
      <div className="App">        
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Filters filterList={filterList} ehChange={_changeFilter} />
        <List data={data} />
      </div>
    );
  }
}

export default App;
