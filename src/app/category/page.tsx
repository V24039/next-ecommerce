import React from 'react'
import ProtectedRoute from '../_components/protectedRoute'

const Category = () => {
  return (
    <ProtectedRoute>
      Inside the route
    </ProtectedRoute>
  )
}

export default Category