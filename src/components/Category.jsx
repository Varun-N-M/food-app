import React from 'react'
import { categories } from '../Data/data'

export const Category = () => {
  return (
    <div className='max-w-[1380px] px-4 py-10 m-auto'>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
        {/* categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item,index)=> (
                <div key={item.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name} className='w-20'/>
                </div>
            ))}
        </div>
    </div>
  )
}