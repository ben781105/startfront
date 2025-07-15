import Lottie from "lottie-react"
function Herosection(){
    return(
        <section className=" border-2  relative min-h-screen flex flex-col  justify-center  gap-6 items-center overflow-x-hidden ">
          <div className='flex flex-col  w-full px-4 ' >
            <p className='md:text-5xl 2xl:text-6xl text-3xl sm:text-4xl text-center'>
              Seamlessly send bulk SMS messages in Uganda.
            </p>
            <p className="md:text-2xl 2xl:text-3xl text-center  text-xl  mt-5">Reach your audience instantly and enhance your communication today!</p>
            <button
             className=" w-[50%] sm:w-[30%] 2xl:w-[20%] 2xl:text-2xl 2xl:h-20 self-center  md:self-center  bg-blue-500 mt-10 px-4 py-3 md:p-3 text-lg md:w-40 cursor-pointer rounded-full text-white"
            >
                GET STARTED
            </button>
          </div>
        </section>
    )

}
export default Herosection