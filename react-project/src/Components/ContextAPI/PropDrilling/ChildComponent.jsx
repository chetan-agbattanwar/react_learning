import React from 'react'
// import PropTypes from 'prop-types';

function ChildComponent(props) {
    // console.log(props); {name: 'Chetan', age: 30}
  return (
    <div>
        <h1>Hello, {props.name || 'ketan'}</h1>
        <p>You are {props.age || 25} years old.</p>
    </div>
  )
}

//  not working

// // Default Props
// ChildComponent.defaultProps = {
//     name: 'Guest',
//     age: 25,
//   };

// //   propTypes
//   ChildComponent.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//   };
export default ChildComponent