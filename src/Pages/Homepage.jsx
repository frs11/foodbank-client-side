import Banner from "../Components/Homepage/Banner";
import Brands from "../Components/Homepage/Brands";
import Footer from "../Components/Homepage/Footer";
import Service from "../Components/Homepage/Service";
import Subscribe from "../Components/Homepage/Subscribe";

const Homepage = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Brands></Brands>
      <Service></Service>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
