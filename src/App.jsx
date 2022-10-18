import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../src/assets/css/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


export default function App () {
  const cards = data.map(x => {
    return (
      <Card 
        key={x.id}
        src={x.coverImg}
        rating={x.stats["rating"]}
        ratingCount={x.stats["reviewCount"]}
        location={x.location}
        title={x.title}
        price={x.price}
        description={x.description}
        openSpots={x.openSpots}
      />
    )
  })
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards--list'>
      {cards}
      </section>
    </div>
  )
}