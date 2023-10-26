import React from 'react'
import { Hero } from '../components/home/Hero'

export const Home = () => {
  return (
    <section>
        <div className="container">
         <h1>Home</h1>
          <div className="home">
            <Hero />
          </div>
        </div>
    </section>
  )
}
