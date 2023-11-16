import { BiSearch } from 'react-icons/bi'

const Rightsidebar = () => {
  return (
    <section className='sticky top-0 mt-1  w-[45%]  flex flex-col items-stretch h-screen px-6'>
    <div className=''>
     <div className='relative w-full h-full group'>
     <label htmlFor='searchBox' className='absolute top-0 left-0 h-full flex items-center justify-center p-4'>
     <BiSearch className='w-5 h-5 text-gray-400 group-focus:text-primary'/>
     </label>
     <input id='searchBox' type="text" placeholder='Search Twitter' className='outline-none focus:border-primary focus:border bg-neutral-900/90  w-[278px] h-full rounded-xl py-4 px-10' />
     </div>
    </div>
    <div className='flex flex-col rounded-xl bg-neutral-900  my-2'>
      <h3 className='font-bold text-xl my-2 px-2'>What's happening?</h3>
      <div>
        {
          Array.from({length:4}).map((_,i)=>(
            <div key={i} className='hover:bg-white/10 p-4 last:rounded-b-xl trasnsition duration-200'>
              <div className='font-bold text-lg'>#trending ${i+1}</div>
              <div className='text-xs text-neutral-400'>35.9k</div>
            </div>
        )
        )
        }
      
      
      </div>
      
     



    </div>
    <div className='flex flex-col rounded-xl bg-neutral-900  my-2'>
      <h3 className='font-bold text-xl my-2 px-2'>Who To Follow?</h3>
      <div>
        {
          Array.from({length:2}).map((_,i)=>(
            <div key={i} className='hover:bg-white/10 p-4 space-x-4 last:rounded-b-xl flex items-center trasnsition duration-200'>
              
              <div className='w-10 h-10 rounded-full bg-neutral-600 flex-none'></div>
              <div className='flex flex-col'>
                <div className='font-bold text-white text-[12]'>Other user</div>
                <div className='text-gray-500 text-sm'>@otheruser</div>
              </div>
            
              
                <button className='rounded-full px-6 py-2 bg-white text-neutral-950'>
                  Follow
                </button>
             
            </div>
        )
        )
        }
      
      
      </div>
      
     



    </div>

  </section>
  )
}

export default Rightsidebar
