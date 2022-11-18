import React, { useState } from 'react'
import BlogCard from '../components/BlogCard'
import { useContactListener } from '../helpers/firebase'


const Dashboard = () => {
  const [blogList, setCBlogList] = useState([])

  useContactListener(setCBlogList)

  return (
    <div sx={{display:"flex", flexWrap:"wrap" }}>
      {blogList.map((item) => {
        return (<BlogCard key={item.id} {...item} />)
      })}
    </div>
  )
}

export default Dashboard