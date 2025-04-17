import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Books from '../Book/Books'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const data = useLoaderData()
  return (
    <>
    <Banner />
    <Books data = {data} />
    </>
  )
}

export default Home