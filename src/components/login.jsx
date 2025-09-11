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
    <section className="min-h-screen flex flex-col gap-12 pb-8 px-4 items-center justify-center bg-[#050816] w-full overflow-x-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#100d25] rounded-lg shadow-lg p-6 max-w-md sm:max-w-lg text-[#ffffff] flex flex-col"
      >
        <h2 className="text-2xl text-[#ffffff] font-semibold text-center mb-6">
          Log in to your account
        </h2>

        <div className="mb-4">
          <label className="block text-base text-[#848298] font-medium mb-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-[#915eff]"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-2">
          <label className="block text-[#848298] text-base font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none  focus:border-[#915eff]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
          {error && <p className="text-red-500 text-sm mb-2">{error.detail || "Login failed"}</p>}
        <div className="flex justify-between items-center mb-4 text-sm">
          <a href="#" className="text-[#915eff] hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-sm dark:text-[#848298]">Remember me</span>
          </label>
        </div>

        <div className="flex justify-between gap-5">
          <button
            type="submit"
            className="bg-[#915eff] hover:bg-[#848298] text-white font-semibold py-2 px-4 rounded w-1/2"
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

            {loading && (
           <div className="mt-12 self-center flex items-center">
             <div className="loader"></div>
           </div>
      )}
      </form>
     
    </section>
  );
};

export default LoginForm;
