import React from 'react'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl font-bold'>
        Technologies
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img src='https://cdn.svgporn.com/logos/javascript.svg' alt='JavaScript' className='w-16 h-16' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img src='https://cdn.svgporn.com/logos/typescript-icon.svg' alt='TypeScript' className='w-16 h-16' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img src='https://cdn.svgporn.com/logos/react.svg' alt='React' className='w-16 h-16' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img src='https://cdn.svgporn.com/logos/nextjs-icon.svg' alt='Next.js' className='w-16 h-16' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <img src='https://cdn.svgporn.com/logos/nodejs-icon.svg' alt='Node.js' className='w-16 h-16' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          {/* sql */}
          <img src='https://cdn.svgporn.com/logos/mysql.svg' alt='MySQL' className='w-16 h-16' />
        </div>
      </div>
    </div>
  )
}

export default Technologies