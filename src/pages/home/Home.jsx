import React from 'react'
import { Header } from '../../components/header/Header'
import { Category } from '../../components/category/Category'
import { Card } from "../../components/blog/Card"

export const Home = () => {
  return (
    <>
        {/*  <Slider />*/}
        <Category />
        <Card />
    </>
  )
}
