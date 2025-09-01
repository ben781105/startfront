
import { useSelector,useDispatch } from 'react-redux'
import {useEffect , useState}from 'react'
import { fetchContacts } from '../../store/features/contacts/contactSlice'

function Contacts() {
    
    const dispatch = useDispatch()
    const { results} = useSelector((state) => state.contact)
    const [search, setSearch] = useState("")
    

    useEffect(() => {
        dispatch(fetchContacts({ search, page: 1 }))
        }, [dispatch,search])

  return (
    <div className='flex gap-5 flex-col mt-6'>

        <input
        type="text"
        placeholder="Search ....."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border self-end border-gray-300 rounded-md focus:outline-none px-2  h-10 "
      />

      <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr className='text-gray-800'>
            <th className="px-4 py-2 border border-gray-600">No.</th>
            <th className="px-4 py-2 border">Phone Number</th>
            <th className="px-4 py-2 border">Date of Creation</th>
          </tr>
        </thead>
        <tbody>
          {results.map((contact, index) => (
            <tr key={contact.id} className=" text-gray-800">
              <td className="px-4 py-2 border border-gray-500">{index + 1}</td>
              <td className="px-4 py-2 border border-gray-500">{contact.phone_number}</td>
              <td className="px-4 py-2 border border-gray-500">{contact.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Contacts
