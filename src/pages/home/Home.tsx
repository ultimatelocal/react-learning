import React from 'react'
import CategoryList from '../../components/category/category-list/CategoryList'
import { mockCategories } from '../../__dummy-data__/categories'

const Home = () => {
  return (
    <CategoryList categories={mockCategories}/>
  )
}

export default Home;