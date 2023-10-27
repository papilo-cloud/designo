import React from 'react'
import { Hero } from '../components/home/Hero'   
import './home.css'                                                                                                                                                                                                                                                                                                                                                                                                                                        

export const Home = () => {
  return (
    <section>
        <div className="container">
          <div className="home">
            <Hero />
          </div>
        </div>
    </section>
  )
}
