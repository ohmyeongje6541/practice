import React from 'react'

export default function ListItem({item, onClick}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <p>No.{item["id"]} {item["name"]}</p>
      <button onClick={onClick}>클릭</button>
    </div>
  )
}
