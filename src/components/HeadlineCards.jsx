import React from 'react'

export const HeadLineCards = () => {
  return (
    <div className='max-w-[1380px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out,Bogo's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-3 rounded-2xl'>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-3 rounded-2xl'>Explore</button>
            </div>
            <img src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Yummy Desserts</p>
                <p className='px-2'>Tasty treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-3 rounded-2xl'>Try Now</button>
            </div>
            <img src="https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
        </div>
    </div>
  )
}
