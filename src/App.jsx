import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HeadLineCards } from './components/HeadlineCards'
import { Food } from './components/Food'
import { Category } from './components/Category'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadLineCards/>
      <Food/>
      <Category/>
    </div>
  )
}
