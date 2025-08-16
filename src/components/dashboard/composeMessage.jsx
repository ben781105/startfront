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
    <div className="border border-gray-300 rounded-md p-4 shadow-lg mt-6">
      <h2 className="text-xl font-semibold">Local phone Numbers (comma separated)</h2>
      <p className="text-blue-400 mt-4">
        Note: correct format is 0703875367,0784637833
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-1">
        <div className="flex flex-col space-y-4">
          <textarea
            {...register("phoneNumbers", { 
              required: "Phone numbers are required", 
              pattern: {
                value: /^(\d{10})(,\d{10})*$/,
                message: "Oops Invalid phone number format"
              }
            })}
            className="w-full h-30 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter local phone numbers"
          />
          {errors.phoneNumbers && (
            <p className="text-red-500 text-sm">{errors.phoneNumbers.message}</p>
          )}

          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Enter message"
            className="w-full h-30 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-500 px-4 py-2 rounded-md mt-10 w-40"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ComposeMessage;
