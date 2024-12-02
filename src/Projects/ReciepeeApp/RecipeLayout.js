import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import List from './component/List'
import DetailsPage from './component/DetailsPage'
import Header from './component/Header'
import './RecipeStyle.css'

const RecipeLayout = () => {
  return (
    <section>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/:id'  element={<DetailsPage />} />
        </Routes>
      </div>
        <Outlet />  
    </section>
  )
}

export default RecipeLayout