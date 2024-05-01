import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";


export default function PopularProducts() {
  return <section id="products" className="max-container max-sm:mt-12 ">
    <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-bold font-palanquin ">Our <span className="text-coral-red">Popular</span> Products</h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with ourb sought-after selections. Discover a world of confort, design, and value</p>

    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {products.map(product => (
        <PopularProductCard key={product} imgURL={product.imgURL} name= {product.name} price={product.price} />
      ))}
    </div>

  </section>;
}
