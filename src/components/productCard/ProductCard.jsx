import React from 'react'

export default function ProductCard({info}) {
    const {name, price, inStock, imageUrl} = info;

    return (
        <div className='border rounded-2xl shadow-lg p-5 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out group'>
            <div className='overflow-hidden rounded-xl'>
                <img 
                    src={imageUrl} 
                    alt={name}  
                    className='h-48 w-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
            </div>

            <div className='mt-4'>
                <h3 className='text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300'>{name}</h3>
                <p className='text-gray-600 text-sm mt-1'>₹{price}</p>

                <p className={`mt-2 font-medium text-sm ${inStock ? 'text-green-600' : 'text-red-500'}`}>
                    {inStock ? "✅ In Stock" : "❌ Out of Stock"}
                </p>

                <button 
                    disabled={!inStock}
                    className={`w-full mt-4 py-2 rounded-xl text-white font-semibold transition duration-300 ${
                        inStock 
                            ? 'bg-green-500 hover:bg-green-600 active:bg-green-700'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    {inStock ? 'Add To Cart' : 'Unavailable'}
                </button>
            </div>
        </div>
    )
}
