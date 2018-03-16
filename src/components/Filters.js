import React from 'react';

const Filter = ({filterName, id, filterKey, ehChange }) => (
  <input placeholder={filterName} onChange={ (e) => ehChange(e, id, filterKey)} />
)

const Filters = ({filterList, ehChange}) => {   
  
  const filters = filterList.map(
    (filter, idx) => ( <Filter filterName={filter.desc} id={idx} key={filter.key} filterKey={filter.key} ehChange={ehChange} /> )
  )
  
  return(    
    <div>
      {filters}      
    </div>
  )
}

export default Filters;