
import { toast } from "react-toastify"

const toastMiddleware = store => next => action => {
  store.getState()
  if (action.type.endsWith("rejected")) {
    toast.error(action.error?.message || "Oops something went wrong")
  }
  if (action.type.endsWith("fulfilled")) {
    toast.success("successful!")
  }
  return next(action)
}

export default toastMiddleware
