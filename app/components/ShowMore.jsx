"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const ShowMore = ({isNext,pagenumber}) => {
    const router = useRouter()
    const handleNavigation = ()=>{
        const newLimit=(pagenumber+1)*10;
        const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", `${newLimit}`);
    const newpathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newpathName,{scroll: false});
    }
  return (
    <div className='w-ful flex-center gap-5 mt-10'>
    {
        !isNext && (
            <button
            type="button"
            onClick={handleNavigation}
            className="text-white bg-primary-blue mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-6 py-3 text-center inline-flex items-center me-2"
          >
            Show More
          </button>
        )
    }
    </div>
  )
}

export default ShowMore
