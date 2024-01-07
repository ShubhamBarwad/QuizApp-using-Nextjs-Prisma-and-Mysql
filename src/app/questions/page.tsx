import React from 'react'
import RenderQuestion from '../components/RenderQuestion'

function page() {
  return (
    <div className='container mx-auto'>
        <p className='capitalize my-5 text-3xl font-semibold text-center'>Questions</p>
        <div className='max-w-3xl mx-auto'>
            <RenderQuestion/>
        </div>
    </div>
  )
}

export default page