import React, { Component } from "react";

const Item = obj => {  
  return (
    <tr key={obj.id}>
    <td>{obj.country}</td>
    <td>{obj.capital}</td>
    <td>{obj.region}</td>
    <td>{obj.subregion}</td>
    <td>{obj.latitude}</td>
    <td>{obj.longitude}</td>
  </tr>
  )
}

class DataList extends Component {
  render() {
    const data = this.props.data;
    const items = data.map(ele => Item(ele));    
    
    return (
      <table>
        <thead>
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Subregion</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        </thead>
        <tbody>
        {items}
        </tbody>        
      </table>
    );
  }
}

export default DataList;
