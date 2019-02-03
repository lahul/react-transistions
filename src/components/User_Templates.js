import React, { Component } from 'react'
import PropTypes from 'prop-types';

const UserTemplates = (props) => {
    return (
      <div>
        Templates
      </div>
    )
}

UserTemplates.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    lastname : PropTypes.string,
    age : PropTypes.number,
    hobbies:PropTypes.array,
    spanish:PropTypes.bool,
    message:PropTypes.func,
    car : PropTypes.object,
    mother:function(props,propName, componentName){
        if(props[propName] !== 'Jane'){
            return new Error(`The name ${props[propName]} is invalid`);
    }
}
}
export default UserTemplates;