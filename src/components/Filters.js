import React from 'react';
import './Filters.css';

const Filter = ({filterName, id, filterKey, ehChange }) => (
  <div className="filters-filed">    
    <label> {filterName}
    <input placeholder={filterName} onChange={ (e) => ehChange(e, id, filterKey)} />
      </label>
  </div>
  
)

const Filters = ({filterList, ehChange}) => {   
  
  const filters = filterList.map(
    (filter, idx) => ( <Filter filterName={filter.desc} id={idx} key={filter.key} filterKey={filter.key} ehChange={ehChange} /> )
  )
  
  return(    
    <div className="filters">
      {filters}      
    </div>
  )
}

export default Filters;