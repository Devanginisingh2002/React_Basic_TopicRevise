import React from 'react'
import Card from './Card'

const CardTab = () => {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };
  return (
    <div style={styles}>
        <Card title="Logitech MX Master" idx={0}/>
        <Card title="Apple Pencil (2nd Gen)" idx = {1}/>
        <Card title="Zebronics Zeb-transform" idx = {2}/>
        <Card title="Petronics Toad 23" idx={3}/>
    </div>
  )
}

export default CardTab;