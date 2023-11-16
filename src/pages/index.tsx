import Leftsidebar from '~/components/Leftsidebar'
import MainComp from '~/components/MainComp'
import Rightsidebar from '~/components/Rightsidebar'
import React from 'react'




const index = () => {
  return (
    <div className="w-full h-full flex justify-center text-white items-center relative bg-black">
    <div className="max-w-[80vw] w-full h-full flex relative border-1">
    <Leftsidebar/>
    <MainComp/>
   <Rightsidebar/>
    </div>
    </div>
  )
}

export default index
