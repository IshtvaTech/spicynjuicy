import { FaMobileAlt, FaTimesCircle, FaLockOpen } from "react-icons/fa";

const SubscriptionFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-[200px] p-8 mt-10 mb-20">
      {/* Text Management */}
      <div className="flex flex-col items-center max-w-xs">
        <FaMobileAlt className="text-red-600 text-9xl mb-4" />
        <h3 className="text-2xl ">TEXT MANAGEMENT</h3>
        <p className="text-gray-700">Switch up your subscription with just a text.</p>
      </div>
      
      {/* Change Subscription */}
      <div className="flex flex-col items-center max-w-xs">
        <FaTimesCircle className="text-red-600 text-9xl mb-4" />
        <h3 className="text-2xl ">CHANGE YOUR SUBSCRIPTION WHENEVER</h3>
        <p className="text-gray-700">Your Pantry, Your Rules</p>
      </div>
      
      {/* Unlock Early Access */}
      <div className="flex flex-col items-center max-w-xs">
        <FaLockOpen className="text-red-600 text-9xl mb-4" />
        <h3 className="text-2xl ">UNLOCK EARLY ACCESS</h3>
        <p className="text-gray-700">Unlock exclusive access to deals, new flavors, and more!</p>
      </div>
    </div>
  );
};

export default SubscriptionFeatures;
