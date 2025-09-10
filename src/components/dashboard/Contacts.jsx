
import { useSelector,useDispatch } from 'react-redux'
import {useEffect , useState}from 'react'
import { fetchContacts } from '../../store/features/contacts/contactSlice'

function Contacts() {
    
    const dispatch = useDispatch()
    const { results,next,previous,page,page_size} = useSelector((state) => state.contact)
    const [search, setSearch] = useState("")
    
    

    useEffect(() => {
        dispatch(fetchContacts({ search, page: 1 }))
        }, [dispatch,search])

  return (
    <div className='flex gap-5 flex-col mt-6 mb-8'>

        <input
        type="text"
        placeholder="Search ....."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border self-end border-gray-300 dark:text-[#ffffff] rounded-md focus:outline-none px-2  h-10 "
      />

      <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 ">
        <thead className="dark:bg-[#848298]">
          <tr className='dark:text-[#ffffff]'>
            <th className="px-4 py-2 border">No.</th>
            <th className="px-4 py-2 border">Phone Number</th>
            <th className="px-4 py-2 border">Date of Creation</th>
          </tr>
        </thead>
        <tbody>
          {results.map((contact, index) => (
            <tr key={contact.id} className=" dark:text-[#ffffff]">
              <td className="px-4 py-2 border border-gray-500">   {(page - 1) * page_size + (index + 1)}</td>
              <td className="px-4 py-2 border border-gray-500">{contact.phone_number}</td>
              <td className="px-4 py-2 border border-gray-500">{contact.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-between mt-4">
  <button
    onClick={() => dispatch(fetchContacts({ url: previous }))}
    disabled={!previous}
    className={`px-4 py-2 rounded-md ${previous ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
  >
    Previous
  </button>

  <button
    onClick={() => dispatch(fetchContacts({ url: next }))}
    disabled={!next}
    className={`px-4 py-2 rounded-md ${next ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
  >
    Next
  </button>
</div>
    </div>
  )
}

export default Contacts
