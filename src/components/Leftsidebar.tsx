import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter} from  'react-icons/bs'
import Link from 'next/link'
const Nav_Items=[
    {
      title:'Twitter',
      icon:BsTwitter
  
    },
    {
      title:'Home',
      icon:BiHomeCircle
  
    },
    {
      title:'Explore',
      icon:HiOutlineHashtag
    },
    {
      title:'Notifications',
      icon:BsBell
    },
    {
      title:'Messages',
      icon:BsEnvelope
    },
    {
      title:'Bookmark',
      icon:BsBookmark
    },
    {
      title:'Profile',
      icon:BiUser
    },
  ]
  
const Leftsidebar = () => {
  return (
   

      <section className="sticky top-0 w-[30%] flex flex-col items-stretch h-screen px-4">
        <div className='flex flex-col h-full items-stretch space-y-2 mt-4'>
        {
          Nav_Items.map((item)=>(
           <Link className=" hover:bg-white/20 transition duration-200 text-2xl text-color-white flex items-center justify-start w-fit space-x-4 rounded-3xl p-2 py-2 px-6" href={'\${item.title.toLowerCase()}'} key={item.title}>
            <div>
              <item.icon/>
            </div>
           
            
              { item.title !== "Twitter" &&
                <div>
               { item.title}
              </div>}
           </Link>
          )
          
          )}
          <button className=' rounded-full bg-primary p-3 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
            Tweet
          </button>
        </div>
      
        <button className=' rounded-full flex items-center space-x-2 bg-transparent p-3 text-center hover:bg-white/10 transition duration-200 w-full justify-between'>
            <div className='flex items-center space-x-2'>
            <div className='rounded-full bg-slate-400 w-12 h-12'></div>
            <div className='text-left text-sm'>
              <div className='font-semibold'>Mr Beast</div>
              <div className=''>@mrbeast</div>
            </div>
            </div>
            <div>
              <BsThreeDots/>
            </div>
        </button>
      
      </section>
    
   
  )
}

export default Leftsidebar
