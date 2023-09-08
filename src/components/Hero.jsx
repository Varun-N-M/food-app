import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1380px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
                <h1 className='px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'> <span className='text-orange-500'>Foods </span>Delivered</h1>
            </div>
            <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-full max-h-[500px] object-cover'/>
        </div>
    </div>
  )
}
