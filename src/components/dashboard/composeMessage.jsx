import { useForm } from "react-hook-form";
import { sendMessage } from "../../store/features/message/messageSlice";
import { useDispatch } from "react-redux";

function ComposeMessage() {
  const { register, reset,handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      phoneNumbers: "",
      message: ""
    }
  });


  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(sendMessage(data))
    reset()
  };

  return (
    <div className="border border-[#915eff] rounded-md p-4 shadow-lg mt-6">
      <h2 className="text-lg dark:text-[#ffffff] font-semibold">Local phone Numbers (comma separated)</h2>
      <p className="text-[#915eff] mt-4">
        Note: correct format is 0703875367,0784637833
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-1 dark:text-[#ffffff]">
        <div className="flex flex-col space-y-4">
          <textarea
            {...register("phoneNumbers", { 
              required: "Phone numbers are required", 
              pattern: {
                value: /^(\d{10})(,\d{10})*$/,
                message: "Oops Invalid phone number format"
              }
            })}
            className="w-full h-30 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:border-[#915eff] transition-all duration-300 ease-in-out"
            placeholder="Enter local phone numbers"
          />
          {errors.phoneNumbers && (
            <p className="text-red-500 text-sm">{errors.phoneNumbers.message}</p>
          )}

          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Enter message"
            className="w-full h-30 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:border-[#915eff] transition-all duration-300 ease-in-out"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className='mt-8 w-[50%] md:w-[20%] shadow-md  shadow-[#ffffff] dark:shadow-[#050816] px-2 py-2 2xl:px-10 2xl:py-5 2xl:text-2xl bg-[#915eff] dark:bg-[#151030] font-semibold text-white dark:hover:bg-[#848298] transition-colors duration-400 ease-in-out rounded-md'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ComposeMessage;
