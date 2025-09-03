import { useSelector,useDispatch } from "react-redux"
import { useState ,useEffect} from "react"
import { fetchSMSHistory } from "../../store/features/message/messageSlice"

function SmsHistory(){
    const {history, previous, next} = useSelector((state)=> state.message)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

 useEffect(() => {
      dispatch(fetchSMSHistory({ search }));

}, [search,dispatch]);

   /* const handlePageChange = (page) => {
    dispatch(fetchSMSHistory({ page, search }));
  };*/
    return(
    <div className="flex flex-col mt-6 mb-8">
     <input 
     onChange={(e) => setSearch(e.target.value)}
     type="text" 
     value={search}
     placeholder="Search....."
     className="p-2 rounded-md border-1 w-60  self-end border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
     />

    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-200 text-gray-800">
        <thead className="">
          <tr className="text-semibold ">
            <th className="px-4 py-2 border border-gray-300 ">Message</th>
            <th className="px-4 py-2 border border-gray-300">Contacts Count</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
            <th className="px-4 py-2 border border-gray-300">Response</th>
          </tr>
        </thead>
        <tbody>
          {history.map((sms, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{sms.message}</td>
              <td className="px-4 py-2 border border-gray-300">{sms.number_of_recipients}</td>
              <td className="px-4 py-2 border border-gray-300">{sms.status}</td>
              <td className="px-4 py-2 border border-gray-300">{sms.status === "Message pending sending" ? "queued" : "Message not ,try again"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-between gap-2 mt-4">
  <button
    disabled={!previous}
    onClick={() => dispatch(fetchSMSHistory({ search}))}
    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
  >
    Previous
  </button>
  <button
    disabled={!next}
    onClick={() => dispatch(fetchSMSHistory({ search}))}
    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
  >
    Next
  </button>
</div>



     
    </div>
    )
}
export default SmsHistory