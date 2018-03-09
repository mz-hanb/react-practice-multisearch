import React from 'react';

const Filter = ({filterName}) => (
  <input placeholder={filterName} />
)

const Filters = ({filterList}) => {   
  
  const filters = filterList.map(
    (filter) => ( <Filter filterName={filter} /> )
  )
  
  return(    
    <div>
      {filters}      
    </div>
  )
}

export default Filters;