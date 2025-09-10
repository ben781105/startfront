import {motion as Motion} from 'framer-motion'
import { useDispatch,useSelector } from 'react-redux';
import { deleteGroup } from '../../store/features/group/groupSlice';
import { fetchGroups } from '../../store/features/group/groupSlice';
function DeleteGroup({onClose,groupId}){

    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.group);

    return (
        <Motion.div
         initial={{opacity:0,scale:0.8,y:-50}}
         animate={{opacity:1,scale:1,y:0}}
         exit={{opacity:0,scale:0.8,y:-50}}
         transition={{duration:0.3}}
         onClick={(e) => e.stopPropagation()}
         className="bg-white dark:bg-[#100d25] rounded-md shadow-lg pl-6 pr-4 py-4 w-full h-60 max-w-md">
             <h1 className='text-2xl font-semibold dark:text-[#ffffff]'>Delete Group</h1>
             <p className='mt-6 text-lg dark:text-[#848298]'>Are you sure you want to delete this group?</p>
             <span className="flex gap-2 mt-15 items-end justify-end">
              <button 
              onClick={onClose}
              className="text-white bg-gray-400 px-4 py-2 rounded-md"
              >
                Cancel
              </button>

              <button
              onClick={() => {
                dispatch(deleteGroup(groupId));
                dispatch(fetchGroups({search: "", page: 1}));
                onClose();
              }}
              className="text-white bg-red-500 px-4 py-2 rounded-md">
                {loading? 'Deleting...':'Delete'}
              </button>
             </span>
           </Motion.div>
    )

}
export default DeleteGroup