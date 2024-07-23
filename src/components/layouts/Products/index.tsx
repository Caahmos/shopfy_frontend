import React from 'react'
import { ProductsList } from '../../../utils/ProductsList';
import { FaStar } from "react-icons/fa";

const Products: React.FC = () => {
  return (
    <div className='py-12 dark:bg-gray-900 dark:text-white'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {
                        ProductsList.map((data) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} 
                            className='space-y-3'>
                                <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex gap-3 items-center'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products;