import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black  px-12 p-4 text-xl rounded-md hover:bg-opacity-50' > ▶Play</button>
        <button className='mx-2 bg-gray-500 text-white px-12 p-4 text-xl rounded-md hover:bg-opacity-50' >ℹ️More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
