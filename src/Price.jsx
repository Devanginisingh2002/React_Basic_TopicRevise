import React from 'react'

const Price = ({OldPrice, NewPrice}) => {
    let oldStyles = {
        textDecorationLine: "line-through",
    };

    let newStyles = {
        fontWeight: "bold",
    };

    let styles = {
        background: "#e0c367",
        height: "30px"
    }
  
    return (
    <div style={styles}>
        <span style={oldStyles}>{OldPrice}</span>
        &nbsp;
        &nbsp;
        <span style={newStyles}>{NewPrice}</span>
    </div>
  )
}

export default Price;
