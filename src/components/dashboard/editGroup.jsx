import {motion as Motion} from 'framer-motion'
import {useForm} from 'react-hook-form'
import { useDispatch,useSelector} from 'react-redux';
import { editGroup } from '../../store/features/group/groupSlice';


function Editgroup({onClose,groupId,currentName}){
    const {loading} = useSelector((state) => state.group);
    
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid},
    watch,

  } = useForm({
    mode: "onChange",
    defaultValues:{groupName:currentName}
  });

  const dispatch = useDispatch(); 

   const onSubmit = (data) => {
      dispatch(editGroup({id:groupId,name:data.groupName}));
      reset();
    };
    
     const groupValue = watch("groupName");
    return(
        <Motion.div
        onClick={(e)=>e.stopPropagation()}
        initial={{opacity:0,scale:0.8,y:-50}}
        animate={{opacity:1,scale:1,y:0}}
        exit={{opacity:0,scale:0.8,y:-50}}
        transition={{duration:0.3}}
        className="dark:bg-[#100d25] rounded-lg shadow-lg p-6 w-full h-60 max-w-md"
        >
         <h1 className="text-xl font-semibold dark:text-[#ffffff]">Edit Group</h1>
         
          <form 
          className='flex flex-col gap-4 mt-4 dark:text-[#ffffff]'
          onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
          <input
            type="text"
            {...register("groupName", {
              required: "group name is required",
            })}
            className="w-full border border-gray-200 px-4 py-3 rounded-md items outline-none"
          />

          <label
            className={`absolute left-4 text-gray-500 transition-all duration-200 ${
              groupValue
                ? "text-xs -top-2 bg-white dark:bg-[#100d25] px-1"
                : "top-3 text-base"
            }`}
          >
            Group name
          </label>
          {errors.groupName && (
            <p className="text-red-500 text-xs absolute top-13">
              {errors.groupName.message}
            </p>
          )}
        </div>
        <div className='w-full flex  mt-7 items-end justify-end gap-3'>
            <button
          type="button"
          onClick={onClose}
          className=" bg-gray-500 py-2 px-4 text-white rounded-md hover:text-gray-700"
        >
            close
        </button>
        <button 
          type='submit'

          className={`${isValid?'dark:bg-[#915eff] cursor-pointer':'bg-gray-300 cursor-not-allowed text-gray-500'} w-[40%] text-white self-end py-2 mt-4 rounded-md font-semibold`}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
          </form>

          
        </Motion.div>
    )

}
export default Editgroup