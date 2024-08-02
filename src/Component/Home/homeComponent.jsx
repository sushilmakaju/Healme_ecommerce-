import React from 'react'
import Cardcomponent from '../Card/card'

const HomeComponent = () => {

  const beautyProduct = [
    {
      imgUrl: "https://imgs.search.brave.com/NgX0eSIS3qpsQ7P62CZui4zP9mnPu3-uagK3etf9Zd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMi8wNC81Ny9n/cmFkdWF0aW9uLTEz/NDUxNDNfNjQwLnBu/Zw",
      name: "Test",
      position: "Senior"
    },
    {
      imgUrl: "https://imgs.search.brave.com/NgX0eSIS3qpsQ7P62CZui4zP9mnPu3-uagK3etf9Zd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMi8wNC81Ny9n/cmFkdWF0aW9uLTEz/NDUxNDNfNjQwLnBu/Zw",
      name: "Testing",
      position: "Senior"
    },
    {
      imgUrl: "https://imgs.search.brave.com/NgX0eSIS3qpsQ7P62CZui4zP9mnPu3-uagK3etf9Zd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMi8wNC81Ny9n/cmFkdWF0aW9uLTEz/NDUxNDNfNjQwLnBu/Zw",
      name: "Testing2",
      position: "Senior"
    },
    {
      imgUrl: "https://imgs.search.brave.com/NgX0eSIS3qpsQ7P62CZui4zP9mnPu3-uagK3etf9Zd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMi8wNC81Ny9n/cmFkdWF0aW9uLTEz/NDUxNDNfNjQwLnBu/Zw",
      name: "Testing3",
      position: "Senior"
    },
  ]
  return (
    <div>
      <Cardcomponent productData={beautyProduct}/>
    </div> 
  )
}

export default HomeComponent
