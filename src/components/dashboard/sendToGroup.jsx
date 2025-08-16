import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { sendMessageToGroup } from "../../store/features/message/messageSlice";
function SendToGroup() {

 const [selectedGroups, setSelectedGroups] = useState([]);
 const {groups} = useSelector((state)=> state.group)
 const groupList = Array.isArray(groups) ? groups : []
 const dispatch = useDispatch()

  const { register, reset,handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      groups: [],
      message: ""
    }
  });
  
  const handleGroupChange = (e)=>{
    const groupId = parseInt(e.target.value, 10);
    
    e.target.checked ? setSelectedGroups([...selectedGroups,groupId]):
    setSelectedGroups(selectedGroups.filter((id)=> id !== groupId))
  }


  const onSubmit = (data) => {
    console.log('id:',selectedGroups)
    console.log('message:',data.message)
    dispatch(sendMessageToGroup({groupIds:selectedGroups,message:data.message}));
    reset()
    setSelectedGroups([])
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-lg mt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-xl text-gray-600">Select Groups</h3>
        <div className="flex flex-col gap-1 mt-2 border-1 border-gray-300 p-3">
          {groupList.length ===0 ?(
            <p className="text-gray-600 text-sm">You currently have no groups added</p>)
            : (
          groupList.map((group) => (
            <span key={group.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={group.id}
                id={`group-${group.id}`}
                {...register("groups", { required: "Select at least one group" })}
                onChange={handleGroupChange}
              />
              <label htmlFor={`group-${group.id}`}>{group.name}</label>
            </span>
          )))}
        </div>
        {errors.groups && (
          <p className="text-red-500 text-sm mt-1">{errors.groups.message}</p>
        )}

        <div className="flex flex-col mt-4 gap-2">
          <label className="text-gray-600">Message</label>
          <textarea
            placeholder="Enter message"
            {...register("message", { required: "Message is required" })}
            className="w-full h-30 p-3 rounded-md border-1 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
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

export default SendToGroup;
