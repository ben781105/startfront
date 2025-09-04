import { fetchGroups } from "../../store/features/group/groupSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import GroupModal from "./groupModal"
import {motion as Motion, AnimatePresence} from 'framer-motion'
import Editgroup from "./editGroup"
import DeleteGroup from "./DeleteGroup"
import AddContact from "./addContact"

function SmsGroups() {
  const dispatch = useDispatch()
  const { groups, error, page, previous, next } = useSelector((state) => state.group)
  const groupList = Array.isArray(groups) ? groups : []

  const [createModal ,setCreateModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [addContactModal, setAddContactModal] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [search, setSearch] = useState("")

  useEffect(() => {
    dispatch(fetchGroups({ search, page: 1 }))
  }, [dispatch, search]) 

  return (
    <div className="mt-4 mb-8">
      <div className="w-full flex flex-col sm:flex-row gap-3 justify-between">
        <button 
        onClick={() => setCreateModal(true)}
        className="bg-blue-500 w-[50%] sm:w-[30%] md:w-[20%] text-white h-10 py-2 px-6 rounded-md">
        Create Group
      </button>

      <input
        type="text"
        placeholder="Search ....."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded-md focus:outline-none px-2  h-10 "
      />
      </div>

      <div className="mt-4 overflow-x-auto">
        {error && <p>{error.message}</p>}
        <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 cursor-pointer">Group Name</th>
          <th className="border border-gray-300 px-4 py-2 cursor-pointer">Contacts</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {groupList.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-4">Your groups will appear here.</td>
          </tr>
        ) : (
          groups.map((group) => (
            <tr key={group.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{group.name}</td>
              <td className="border  border-gray-300 px-4 py-2">
                <a href="#" className="text-blue-600 hover:underline">{group.contact_count}</a>
              </td>
              <td className="border flex items-center border-gray-300 px-4 py-2 space-x-2">
                <button 
                onClick={() =>{ 
                  setEditModal(true)
                  setSelectedGroup(group)
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white w-fit h-fit px-4 py-2 rounded">Edit</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                onClick={() => {
                  setDeleteModal(true)
                  setSelectedGroup(group)
                }}
                >
                  Delete
                </button>
                <button
                onClick={() => {
                  setAddContactModal(true)
                  setSelectedGroup(group)
                }}
                 className="bg-green-500 hover:bg-green-600 text-white w-fit h-fit px-8 py-2 rounded"
                >Contact</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
      </div>

      <div className="flex justify-between gap-2 mt-4">
  <button
    disabled={!previous}
    onClick={() => dispatch(fetchGroups({ search, page: page - 1 }))}
    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
  >
    Previous
  </button>
  <button
    disabled={!next}
    onClick={() => dispatch(fetchGroups({ search, page: page + 1 }))}
    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
  >
    Next
  </button>
</div>


         <AnimatePresence>
        {createModal && (
          <Motion.div
            className="fixed inset-0 z-50  px-4 py-4  flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCreateModal(false)}
          >
            <GroupModal onClose={() => setCreateModal(false)} />
          </Motion.div>
        )}
      </AnimatePresence>

        <AnimatePresence>
        {editModal && (
          <Motion.div
            className="fixed inset-0 z-50 p-4  flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEditModal(false)}
          >
            <Editgroup onClose={() => setEditModal(false)} currentName={selectedGroup.name} groupId={selectedGroup.id} />
          </Motion.div>
        )}
      </AnimatePresence>

     <AnimatePresence>
        {deleteModal && (
          <Motion.div
            className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeleteModal(false)}
          >
           <DeleteGroup onClose={() => setDeleteModal(false)} groupId={selectedGroup.id}/>
          </Motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {addContactModal && (
          <Motion.div
            className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAddContactModal(false)}
          >
           <AddContact onClose={() => setAddContactModal(false)} groupId={selectedGroup.id}/>
          </Motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

export default SmsGroups
