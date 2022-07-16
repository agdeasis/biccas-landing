import React from 'react'

const Benefits = () => {
  return (
    <div className='mt-[100px] flex p-4 relative'>
        <div className='grid md:grid-cols-2 gap-4 space-y-7'>
            <div>
                <h1 className='text-2xl md:text-4xl font-semibold md:max-w-[340px]'>What Benifit Will You Get</h1>
                <ul className='mt-12'>
                    <li className='flex items-center mb-7'>
                        <img src="./images/features/Subtract.png" alt="" />
                        <span className='ml-4'>Free Consulting With Experet Saving Money</span>
                    </li>
                    <li className='flex items-center mb-7'>
                        <img src="./images/features/Subtract.png" alt="" />
                        <span className='ml-4'>Online Banking</span>
                    </li>
                    <li className='flex items-center mb-7'>
                        <img src="./images/features/Subtract.png" alt="" />
                        <span className='ml-4'>Investment Report Every Month</span>
                    </li>
                    <li className='flex items-center mb-7'>
                        <img src="./images/features/Subtract.png" alt="" />
                        <span className='ml-4'>Saving Money For The Future</span>
                    </li>
                    <li className='flex items-center mb-7'>
                        <img src="./images/features/Subtract.png" alt="" />
                        <span className='ml-4'>Online Transaction</span>
                    </li>
                </ul>
            </div>
            <div>
                <img className='mx-auto md:ml-[50px] md:ml-auto block max-w-full h-auto' src="./images/features/Vector.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Benefits