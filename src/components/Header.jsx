
import Students from '../assets/buildcon004.png';
import Hakaton from '../assets/Hakaton_Rep.png';
import Hakaton1 from '../assets/buildcon002.png';
import { HiUserGroup } from "react-icons/hi2";
import { SiBlockchaindotcom } from "react-icons/si";
import topRightImage from '../assets/candyshapes.png';



const Header = () => {
  return (
    <section className="relative flex flex-col lg:flex-row md:h-screen  items-center px-4 lg:px-20 bg-primary">
      <div className="absolute top-0 right-0 p-0 z-0">
              <img 
                src={topRightImage} 
                alt="Top Right" 
                className="w-32 h-32 object-cover" 
              />
            </div>
      
            {/* Bottom Left Image */}
            <div className="absolute hidden md:bottom-0 left-0 z-0">
              <img 
                src={topRightImage} 
                alt="Bottom Left" 
                className="w-32 h-48 object-cover transform rotate-180" 
              />
      </div>
      <div className="my-3 md:my-10 lg:my-16 text-center mx-2 md:w-3/2 z-10">
        <h1 className="text-[17px] md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">Your Forte in Web3 Begins Here!</h1>
        <h3 className="text-[12px] md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">Start Strong, Stay Confident And Explore Crypto with Ease</h3>

        <p className="text-[12px] md:text-sm">Crypto isn&#39;t just the future-it&#39;s yours to explore today. Start Simple, stay smart and unlock 
          new possibilities with Web3! 🍨 GM WAGMI
        </p>
      </div>

      <div className="py-8  md:py-16"> {/* Reduced padding on mobile */}
      <div className="flex justify-center items-center z-10 relative">
        {/* Mobile View (only first image) */}
        

        {/* Desktop View (full gallery) */}
        <div className="hidden md:grid grid-cols-2 gap-0 w-2/3 h-[400px]"> {/* Fixed height */}
          <div className='relative' style={{marginRight:'-100px'}}>
            <img
              src={Hakaton1}
              alt="Image 1"
              className="w-full h-full object-cover rounded-tl-2xl"
            />
          </div> 
          
          <div className='bg-gray-400 z-20 relative flex flex-col ml-[110px] gap-2 w-fit px-4 rounded-lg items-center justify-center'
            style={{marginBottom: "-10px"}}
          >
            <article className='bg-slate-900 flex flex-col items-center p-2 rounded-lg'>
              <p className='bg-white w-fit p-2 rounded-lg'>
                <HiUserGroup className='text-2xl text-slate-900' />
              </p>
              <h3 className='text-white text-[10px] pt-2'>Community</h3>
            </article>
            <article style={{backgroundColor: "#DE3A6A"}} className='flex flex-col items-center p-2 rounded-lg'>
              <p className='bg-white w-fit p-2 rounded-lg'>
                <SiBlockchaindotcom className='text-2xl text-slate-900' />
              </p>
              <h3 className='text-white text-[10px] pt-2'>Blockchain</h3>
            </article>
          </div>
          
          <div className='relative z-0'>
            <img
              src={Students}
              alt="Image 3"
              className="w-full h-[300px] object-cover rounded-bl-2xl"
            />
          </div>
          
          <div className='relative z-0' style={{marginLeft: '-40px'}}>
            <img
              src={Hakaton}
              alt="Hakaton Reps"
              className="w-full h-full object-cover rounded-br-2xl"
              style={{ backgroundColor: '#4284FF' }}
            />
          </div>
        </div>
      </div>
    </div>

     

    </section>
  )
}

export default Header
