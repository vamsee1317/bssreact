import React from 'react'
import ProductCard from '../productCard/ProductCard'

export default function FeatureProductsSection({productInfo}) {
  return (
    <section className='py-8 px-6'>
        <h2 className='text-2xl font-semibold mb-6'>Featured Products</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                productInfo.map((product, index)=>(
                    <ProductCard info={product} key={index}/>
                ))
            }
        </div>
    </section>
  )
}
