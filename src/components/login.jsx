import { useForm } from "react-hook-form";
import { useNavigate ,useLocation} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { loginUser } from "../store/features/user/userSlice";
import { useEffect } from "react";
const LoginForm = () => {

    const {error,isAuthenticated,loading} = useSelector((state) => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard"; 
     
    useEffect(()=>{
        if(isAuthenticated){
            navigate('/dashboard')
            navigate(from, { replace: true });
        }
    },[isAuthenticated,navigate,from])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
    
  };

  return (
    <section className="min-h-screen flex flex-col gap-12 pb-8 px-4 items-center justify-center bg-gradient-to-br from-blue-800 to-blue-400">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-lg p-8 w-90"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log in to your account
        </h2>

        <div className="mb-4">
          <label className="block text-base font-medium mb-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-blue-400"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-2">
          <label className="block text-base font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
          {error && <p className="text-red-500 text-sm mb-2">{error.detail || "Login failed"}</p>}
        <div className="flex justify-between items-center mb-4 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-sm">Remember me</span>
          </label>
        </div>

        <div className="flex justify-between gap-7">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-[50%]"
          >
           Sign in
          </button>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Create account
          </button>
        </div>
      </form>
      {loading && (
        <div className="loader"></div>
      )}
    </section>
  );
};

export default LoginForm;
