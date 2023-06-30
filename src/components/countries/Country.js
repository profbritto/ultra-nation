import React from 'react';

const Country = (props) => {
    
    let {name,population,region,subregion,flag}=props.cntry;
    const handleAdd=props.handleAdd;
    const flagStyle={height:'50px'}
    return (
        <div style={
            {
            border: '1px solid red',
            

            }
        }>
            <h4>Name:{name}</h4>
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p>
            <p><small>Sub Region:{subregion}</small></p>
            <img src={flag} style={flagStyle } alt="" />
            <button onClick={()=>handleAdd(props.cntry)}>Add Country</button> 
        </div>
    );
    //just handleAdd() dile automatic call hobe .bt etake arrow function banai dile temon hobe na. 
};

export default Country;<h4>This is a country</h4>