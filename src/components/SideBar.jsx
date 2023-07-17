import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {


  return (
    <Stack direction="row" sx={{ overflow:"scroll", height: {sx: "auto", md:"95vh"}, flexDirection: { md:"column" } }}>
        {categories.map((category) => (
            <button 
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && "#EA3323",
                    color:"white"
                }}
                key={category.name}
            >
                    <span style={{ color: category.name === selectedCategory ? "white" : "#EA3323", marginRight: "15px" }}>
                    {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                    </span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar