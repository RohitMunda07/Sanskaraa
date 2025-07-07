import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import "./style.css"

export default function SignIn() {

    const navigate = useNavigate();

    const { register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",

    })

    const onSubmit = async (data) => {
        console.log("User Credentials: ", data);
        await new Promise((resolve, reject) => setTimeout(resolve, 5000))
        reset(); // This clears all fields
        // navigate("/home");
    };
    return (
        <section className="bg-[#fdf6e3] w-full h-[100vh] py-6 px-5">
            <section className="bg-[#622610] h-full rounded-xl shadow-2xl px-6 relative flex flex-col">
                {/* close img */}
                <div className="">
                    <img src="/assets/close-circle.svg" alt="close-circle" className="w-8 h-8 absolute right-3 top-3 text-black cursor-pointer" />
                </div>

                {/* Logo and Brand */}
                <div className="mt-32 flex flex-col md:w-full md:flex-row md:justify-around items-center mb-6">
                    <img src="./logo-sanskaraa.png" alt="SanskaarLogo" className="w-16 h-16 md:w-28 md:h-28" />
                    <h1 className="mt-3 text-4xl md:text-7xl font-[Kalnia] text-white">Sanskaraa</h1>
                </div>

                <h2 className="mt-4 md:mb-24 text-3xl md:text-5xl text-white font-semibold font-[Kalnia] login text-center lg:max-w-2xs">Sign In</h2>

                <form className="space-y-4 relative bg-transparent z-1 md:flex md:flex-col md:justify-center md:items- md:w-full md:px-3 md:h-96 md:space-y-10" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className={errors.email ? "error-box" : ""}
                        {...register("fullName", {
                            pattern: {
                                message: "Field is required",
                            },
                        })}
                    />
                   
                    <input
                        type="text"
                        placeholder="Email"
                        className={errors.email ? "error-box" : ""}
                        {...register("email", {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                                message: "Invalid Email Address",
                            },
                        })}
                    />
                    {errors.email && <p className='error-msg'>{errors.email.message}</p>}

                    <input
                        type="Password"
                        placeholder="password"
                        className={errors.password ? "error-box" : ""}
                        {...register("password", {
                            required: "Field is required",
                        })}
                    />
                    {errors.password && <p className="error-msg">{errors.password.message}</p>}

                    <p className="text-right text-sm text-white cursor-pointer">Forgot password?</p>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition font-[Kalnia] cursor-pointer"
                    >
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>

                    <div className="flex items-center justify-center">
                        <img src="/assets/prist.png" alt="prist" className="absolute -z-1 -top-10 lg:right-0 lg:top-22 min-h-56 md:h-96 lg:w-[72rem] lg:h-[28rem]" />
                    </div>
                    <p className="mt-4 text-center text-sm text-white z-10 signUp"
                        onClick={()=>navigate('/login')}
                    >
                        Already have an account? <span className="underline cursor-pointer text-yellow-300">Log In</span>
                    </p>
                </form>
            </section>
        </section>
    )
}
