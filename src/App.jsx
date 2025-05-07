import {PromoBanner} from "./components/PromoBanner"


export const App = ()=>{

  const user = "Vamsi Krishna";

  const featuredProdcut = {
      name : 'Noise Wireless HeadPhones',
      price : 1899,
      inStock : true,
      rating : 4.5
  }


  return (
    <div>
      <PromoBanner />

      <main className="p-6">

        <h1 className="text-3xl font-bold text-grray-800 mb-4">
          Welcome to BSS React, {user}
        </h1>

      <div className="flex flex-row gap-2 flex-wrap justify-center">
        <section className="bg-gray-300 shadow p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
              <p><strong>Name : </strong> {featuredProdcut.name}</p>
              <p><strong>Price : </strong> {featuredProdcut.price}</p>

              <p>
                <strong>Status :</strong> {'  '}
                <span className={featuredProdcut.inStock ? 'text-green-50-600' : "text-red-500"}>
                  {featuredProdcut.inStock ? "Available" : "OutOfStock"}
                </span>
              </p>
          </section>

          <section className="bg-gray-300 shadow p-4 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
            <p><strong>Name : </strong> {featuredProdcut.name}</p>
            <p><strong>Price : </strong> {featuredProdcut.price}</p>

            <p>
              <strong>Status :</strong> {'  '}
              <span className={featuredProdcut.inStock ? 'text-green-50-600' : "text-red-500"}>
                {featuredProdcut.inStock ? "Available" : "OutOfStock"}
              </span>
            </p>
        </section>


        <section className="bg-gray-300 shadow p-4 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
            <p><strong>Name : </strong> {featuredProdcut.name}</p>
            <p><strong>Price : </strong> {featuredProdcut.price}</p>

            <p>
              <strong>Status :</strong> {'  '}
              <span className={featuredProdcut.inStock ? 'text-green-50-600' : "text-red-500"}>
                {featuredProdcut.inStock ? "Available" : "OutOfStock"}
              </span>
            </p>
        </section>



        <section className="bg-gray-300 shadow p-4 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
            <p><strong>Name : </strong> {featuredProdcut.name}</p>
            <p><strong>Price : </strong> {featuredProdcut.price}</p>

            <p>
              <strong>Status :</strong> {'  '}
              <span className={featuredProdcut.inStock ? 'text-green-50-600' : "text-red-500"}>
                {featuredProdcut.inStock ? "Available" : "OutOfStock"}
              </span>
            </p>
        </section>



        <section className="bg-gray-300 shadow p-4 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Featured Product</h2>
            <p><strong>Name : </strong> {featuredProdcut.name}</p>
            <p><strong>Price : </strong> {featuredProdcut.price}</p>

            <p>
              <strong>Status :</strong> {'  '}
              <span className={featuredProdcut.inStock ? 'text-green-50-600' : "text-red-500"}>
                {featuredProdcut.inStock ? "Available" : "OutOfStock"}
              </span>
            </p>
        </section>
      </div>

     


      </main>
    </div>
  )
}


