
import React, { Suspense, useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Banner from './Components/banner/Banner';
import Count from './Components/count/Count';
import Premium from './Components/premium/Premium';
import Products from './Components/cards/Products';
import Footer from './Components/footer/Footer';
import WorkFlow from './Components/workflow/WorkFlow';
import Steps from './Components/steps/Steps';
import PricingCard from './Components/pricingCard/PricingCard';
import { ToastContainer } from 'react-toastify';
import Cart from './Components/Cart/Cart';



const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}


const App = () => {
  const [activeButton, setActiveButton] = useState("products")


  const cardPromise = fetchData()

  const [cartData, setCartData] = useState([])

  console.log(cartData)



  console.log(cardPromise)
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Banner></Banner>
      <Count></Count>
      <Premium cartData={cartData} activeButton={activeButton} setActiveButton={setActiveButton}></Premium>
      {activeButton === "products" &&
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <Products cardPromise={cardPromise} cartData={cartData} setCartData={setCartData}></Products>
        </Suspense>
      }
      {
        activeButton === "cart" &&
        <Cart cartData={cartData} setCartData={setCartData}></Cart>
      }



      <Steps></Steps>
      <PricingCard></PricingCard>
      <WorkFlow></WorkFlow>
      <Footer></Footer>

    </div>
  );
};

export default App;