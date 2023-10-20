import { FaShippingFast } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiTimerLine } from "react-icons/ri";

const Service = () => {
  return (
    <div className="w-8/12 lg:w-3/5 md:w-10/12 mx-auto dark:bg-slate-500 dark:text-slate-100 bg-slate-50 flex flex-col md:flex-row justify-center md:justify-around shadow-lg my-12 py-3">
      <div className="flex items-center">
        <FaShippingFast className="text-6xl rounded-full m-2 border-2 dark:border-green-400 border-green-800 p-1"></FaShippingFast>
        <div>
          <h1 className="text-lg font-medium font-serif">Free Shipping</h1>
          <p className="text-xs">Free Shipping anytime</p>
        </div>
      </div>
      <div className="flex items-center">
        <GiTakeMyMoney className="text-6xl rounded-full m-2 border-2 dark:border-green-400 border-green-800 p-1"></GiTakeMyMoney>
        <div>
          <h1 className="text-lg font-medium font-serif">Cash Back</h1>
          <p className="text-xs">within 24 hours</p>
        </div>
      </div>
      <div className="flex items-center">
        <RiTimerLine className="text-6xl rounded-full m-2 border-2 dark:border-green-400 border-green-800 p-1"></RiTimerLine>
        <div>
          <h1 className="text-lg font-medium font-serif">Support 24/7</h1>
          <p className="text-xs">Support available 24/7 </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
