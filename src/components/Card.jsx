import React from 'react'

const Card = (p) => {
  let badgeText;
  if(p.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if(p.location === "Online"){
    badgeText = "ONLINE"
  }
  
  const filePath = "src/assets/";
  return (
    <div className='card'>
      {badgeText && <div className='badge'>{badgeText}</div>}
        
        <img src={filePath + p.src} className='card--image' alt="" />
        <div className='card--stats'>
            <img src="src/assets/Star 1.png" className="card--star" alt="" />
            <span >{p.rating}</span>
            <span className='grey'>({p.ratingCount}) ▪️ </span>
            <span className='grey'> {p.location}</span>
        </div>
        <p className='card--title'>{p.title}</p>
        <p><span className='bold card--price'>From ${p.price}</span> / person</p>
    </div>
  )
}

export default Card