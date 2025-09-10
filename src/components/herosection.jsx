import { useNavigate } from "react-router-dom"
function Herosection(){

  const navigate = useNavigate();
    return(
        <section id="home" className=" bg-[#748b91] bg-dark:text-[#ffffff] dark:bg-[#050816] relative min-h-screen flex flex-col  justify-center  gap-6 items-center overflow-x-hidden ">
          <div className='flex flex-col  w-full px-4 ' >
            <p className=' text-[#171f22] dark:text-[#ffffff] md:text-5xl 2xl:text-6xl text-3xl sm:text-4xl text-center'>
              Seamlessly send bulk <span className=" text-[#636467] dark:text-[#915eff]">SMS messages</span> in Uganda.
            </p>
            <p className="dark:text-[#ffffff]  sm:max-w-md md:max-w-full mx-auto  md:text-2xl 2xl:text-3xl text-center  text-xl  mt-7">Reach your audience instantly and enhance your communication today!</p>
            <button
            onClick={()=> navigate('/dashboard')}
             className="  light: bg- text-white  w-[50%] mt-8 font-semibold   dark:bg-[#100d25] dark: border border-white dark:text-[#E2E2B6] sm:w-[30%] 2xl:w-[20%] 2xl:text-2xl 2xl:h-20 self-center  md:self-center  text-[mt-10 px-4 py-3 md:p-3 text-lg dark: shadow-md shadow-[#151030] md:w-40 cursor-pointer rounded-full text-white"
            >
                GET STARTED
            </button>
          </div>
        </section>
    )

}
export default Herosection