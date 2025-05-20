import FeatureProductsSection from "./components/featureProduct/FeatureProductsSection";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import {PromoBanner} from "./components/PromoBanner"
import { products } from "./data";


export const App = ()=>{

  return (
    <div>
      <Header title="BSS React"/>
      <PromoBanner />
      <FeatureProductsSection productInfo={products} />
      <Footer year={new Date().getFullYear()}/>


    </div>
  )
}


