import {motion as Motion} from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useDispatch ,useSelector} from 'react-redux'
import { addContactsToGroup, fetchGroups } from '../../store/features/group/groupSlice'
function AddContact({onClose,groupId}){

    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.group);
    
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone_numbers: "",
    },
  });

   const validateNumbers = (value) => {
    const numbers = value.split(",").map((n) => n.trim()).filter(Boolean);
    if (numbers.length === 0) return "Please enter at least one phone number";

    const invalid = numbers.find((n) => !/^0\d{9}$/.test(n));
    if (invalid) return `Invalid number format: ${invalid}`;
    return true;
  };

 const onSubmit = (data) => {
    const phoneNumbersArray = data.phone_numbers
      .split(',')
      .map((n) => n.trim())
      .filter(Boolean);

    dispatch(addContactsToGroup({ groupId, phoneNumbers: phoneNumbersArray }));
    dispatch(fetchGroups({search:"",page:1}));
    reset();
  };


  return(
    <Motion.div
     initial={{opacity:0,scale:0.8,y:-50}}
     animate={{opacity:1,scale:1,y:0}}
     exit={{opacity:0,scale:0.8,y:-50}}
     transition={{duration:0.3}}
     onClick={(e) => e.stopPropagation()}
     className="bg-white dark:bg-[#100d25] rounded-md shadow-lg p-4  w-full h-fit max-w-lg">
      <h1 className='text-2xl font-semibold dark:text-[#ffffff] '>Add Contact to Group</h1>
      <span className='mt-6 text-base dark:bg-[#151030] pl-8 pr-3 py-3 dark:text-[#ffffff] flex items-center rounded-md'>
        Enter local Ugandan numbers (e.g. 0759647223)
      </span>
      <form
      onSubmit={handleSubmit(onSubmit)}
       className='mt-6 flex flex-col dark:text-[#ffffff]'>
        <div className='flex flex-col gap-2'>
            <label className='text-bas dark:text-[#ffffff] '>Phone numbers</label>
            <textarea 
             {...register("phone_numbers", {
              required: "Phone numbers are required",
              validate: validateNumbers,
            })}
            className=" w-full h-35 p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-[#915eff] transition-all duration-500 ease-in-out"
            placeholder="Enter local numbers (e.g. 0759647223, 0775647361)"
            />
            {errors.phone_numbers &&
            <p className='text-red-500 text-sm'>{errors.phone_numbers.message}</p>}
        </div>

        <div className='flex gap-2 items-end justify-end mt-10'>
            <button
            onClick={onClose}
            className='text-white bg-gray-400 px-4 py-2 rounded-md'
            >
              Close
            </button>

            <button
            type='submit'
            className={`text-white ${isValid? 'bg-[#915eff]':'bg-gray-400 cursor-not-allowed'} px-4 py-2 rounded-md`}
            >
             {loading? 'Adding...':'Add Contact'}
            </button>
        </div>
      </form>
    </Motion.div>
  )
    
}
export default AddContact