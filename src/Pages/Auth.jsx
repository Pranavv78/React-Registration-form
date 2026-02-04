import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    // SIGN UP
    if (!isLogin) {
      if (!formData.firstName) {
        toast.error('Please enter your first name ❌')
        return
      }

      toast.success(
        `Congratulations ${formData.firstName} 🎉🎊 
Your account created successfully 🚀✨`
      )
      resetForm();
      setIsLogin(true)
      return
    }

    // LOGIN
    toast.success('Login successful ✅')
    resetForm();
  }
  return (
    <>
      <Toaster position="top-right" />

      <div className="flex items-center bg-white h-screen overflow-hidden">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 p-12 flex flex-col h-full">
              <div>
                <div className="flex flex-col">
                  <h3 className="text-3xl text-gray-700 mb-2 font-bold">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h3>
                  <p className="text-gray-600">
                    {isLogin
                      ? 'Log in to your forever account'
                      : 'Join your forever account'}
                  </p>
                </div>

                {/* SOCIAL LOGIN */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <button
                    className="
    cursor-pointer
    flex items-center gap-2 py-2
    border border-gray-300 rounded
    justify-center
    transition-all duration-300 ease-out
    hover:shadow-lg
    hover:-translate-y-0.5
    hover:bg-gray-50
    active:scale-95
    group
  "
                  >
                    <img
                      className="w-4 transition-transform duration-300 group-hover:scale-110"
                      src="./google.png"
                      alt="google"
                    />
                    Google
                  </button>
                  <button
                    className="
    cursor-pointer
    flex items-center gap-2 py-2
    border border-gray-300 rounded
    justify-center
    transition-all duration-300 ease-out
    hover:shadow-lg
    hover:-translate-y-0.5
    hover:bg-gray-50
    active:scale-95
    group
  "
                  >
                    <img
                      className="w-5 transition-transform duration-300 group-hover:scale-110"
                      src="./github.png" 
                      alt="github"
                    />
                    GitHub
                  </button>

                </div>

                {/* DIVIDER */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-full border-t border-gray-300"></div>
                  <span className="text-gray-700">Or</span>
                  <div className="w-full border-t border-gray-300"></div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  {/* FIRST & LAST NAME (SIGN UP ONLY) */}

                  {!isLogin && (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* EMAIL */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-3 right-3 text-gray-600"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  {/* CONFIRM PASSWORD (SIGN UP ONLY) */}
                  {!isLogin && (
                    <div className="mb-4 mt-6">
                      <label className="block text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute top-3 right-3 text-gray-600"
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* REMEMBER ME (LOGIN ONLY) */}
                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-gray-700 font-semibold">
                          Remember Me
                        </span>
                      </div>
                      <a
                        href="#"
                        className="text-amber-600 text-sm font-semibold hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  )}

                  {/* BUTTON */}
                  <div className="mt-6 mb-2">
                    <button className="w-full bg-amber-600 text-white font-bold rounded py-2 cursor-pointer">
                      {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                  </div>

                  {/* TOGGLE */}
                  <p className="text-sm text-center text-gray-600">
                    {isLogin
                      ? "Don't have an account?"
                      : 'Already have an account?'}
                    <span
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-amber-600 hover:underline ml-2 cursor-pointer"
                    >
                      {isLogin ? 'Sign Up' : 'Log In'}
                    </span>
                  </p>
                </form>
              </div>
              {/* FOOTER */}
              <div className="mt-auto pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Pranav Chavan ·
                <a
                  href="mailto:pranavchavan861@gmail.com"
                  className="ml-1 text-amber-600 hover:underline"
                >
                  pranavchavan861@gmail.com
                </a>
              </div>
            </div>

            {/* RIGHT SIDE BANNER */}
            <div
              className="flex items-center justify-center relative w-full lg:w-1/2 bg-center bg-cover text-white"
              style={{ backgroundImage: "url('/bgimage4.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative text-center">
                <h3 className="text-3xl font-bold">
                  Login Your Account And Explore
                </h3>
                <p className="max-w-sm mx-auto">
                  Save orders, cart items and enjoy offers
                </p>
                <button className="
  mt-6 px-6 py-2
  border-2 border-white
  rounded font-bold
  relative overflow-hidden
  transition-all duration-300
  group cursor-pointer
">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Create An Account
                  </span>
                  <span className="
    absolute inset-0 bg-white
    -translate-x-full
    transition-transform duration-300
    group-hover:translate-x-0
  "></span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
