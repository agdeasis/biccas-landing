import React from 'react'
import ReactStars from "react-rating-stars-component";

const Support = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className='support bg-[#F9F8FE]'>
            <div className="mx-auto d-block max-w-[1180px]">
                <div className="grid md:grid-cols-2 py-8">
                    <div className="left-text p-4 text-center md:text-left">
                        <h2 className='text-2xl md:text-3xl font-medium mb-6 md:max-w-[400px]'>
                            How we support our partner all over the world
                        </h2>
                        <p className='text-[#A6A6A6]'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
                       
                        <div className="star-ratings mt-[50px] flex justify-center md:justify-start">
                            <div className='p-4 md:pl-0'>
                                <ReactStars
                                    count={5}
                                    value={5}
                                    edit={false}
                                    onChange={ratingChanged}
                                    size={20}
                                    activeColor="#FFC728"
                                />
                                <h4 className='text-[18px] mt-4'> <span className='font-medium'>4.9</span> / 5 rating</h4>
                                <h4 className='text-[#A6A6A6] font-bold mt-4 text-[18px]'>Databricks</h4>
                            </div>

                            <div className='p-4'>
                                <ReactStars
                                    count={5}
                                    value={5}
                                    edit={false}
                                    onChange={ratingChanged}
                                    size={20}
                                    activeColor="#FFC728"
                                />
                                <h4 className='text-[18px] mt-4'> <span className='font-medium'>4.9</span> / 5 rating</h4>
                                <h4 className='text-[#A6A6A6] font-bold mt-4 text-[18px]'>Chainalysis</h4>
                            </div>

                        </div>
                    </div>
                    <div className="rigth-text p-4">
                        b
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support