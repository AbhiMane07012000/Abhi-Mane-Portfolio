import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const Loading = ({ children}) => {
  const [loading, setLoading] = useState(true);

   

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       
    
    <Transition
      show={loading}
      enter="transform transition-transform duration-1000 ease-out"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
    >
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-dark z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-black"></div>
      </div>
    </Transition>
    <Transition
      show={!loading}
    >
      {children}
    </Transition>
    
</>
  );
};

export default Loading;
