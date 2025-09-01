import {  useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import api from "../api";
import { useState } from "react"
import { toast } from "react-toastify";
import { loginUser } from "../store/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const RegisterForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';
  const [error, setError] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{
        const response = await api.post('register/',{
            username: data.username,
            password: data.password,
            phone_number:data.phone_number,
        })

         await dispatch(loginUser({ username: data.username, password: data.password })).unwrap()
         navigate(from, { replace: true });

         toast.success(response.data.message);

    }
    catch(error){
       const errorMessage =
        error?.response?.data?.username?.[0] ||
        error?.response?.data?.password?.[0] ||
        error?.response?.data?.phone_number?.[0]||
        "registration failed, please try again later"

        setError(errorMessage)
        toast.error(errorMessage)
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-400">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-lg p-8 w-[380px]"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h2>

        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            {...register("username", { required: "username is required" })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-blue-400"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

       
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Primary Phone Number"
            {...register("phone_number", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Enter a valid phone number",
              },
            })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-blue-400"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
          )}
        </div>

       
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

 
          
           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
     
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 mt-3 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Create account
        </button>

        <div className="mt-4 text-center">
          <Link to="/signin" className="text-blue-600 hover:underline text-sm">
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
