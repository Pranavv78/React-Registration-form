# React-Registration-form
# 🔐 React Authentication Form (Login & Signup)

https://github.com/user-attachments/assets/52759b29-0e12-460b-937f-851a727d7bc9


A modern and responsive React Authentication UI built using React Hooks, Tailwind CSS, and React Router.
This project includes Login and Sign-Up functionality in a single component, with smooth UI interactions and form validations.



🚀 Features

✅ Login & Sign Up in one component

👁️ Show / Hide password toggle

🔔 Toast notifications using react-hot-toast

🎨 Fully responsive UI with Tailwind CSS

🔄 Toggle between Login and Signup forms

📱 Mobile & Desktop friendly layout

🧩 Clean and reusable React component structure

🛠️ Tech Stack

React (Vite)

React Hooks (useState)

React Router DOM

Tailwind CSS

React Icons

React Hot Toast

⚙️ Functions Used in This Component

This authentication component uses multiple functions to manage form state, UI behavior, and user interactions.

🔹 Auth()

Main Functional Component

Acts as the root authentication component

Handles Login & Sign Up UI

Manages all state using React Hooks

Returns the complete authentication layout

🔹 useState()

State Management (React Hook)

Used to manage UI behavior and form data:

showPassword → Toggle password visibility

showConfirmPassword → Toggle confirm password visibility

isLogin → Switch between Login & Sign Up mode

formData → Store user input values

Example:

const [isLogin, setIsLogin] = useState(true)

🔹 resetForm()

Resets Form Fields

Clears all input fields after successful login or signup

Improves UX by resetting form state

const resetForm = () => {
  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
}

🔹 handleSubmit(e)

Handles Form Submission

Prevents page reload using e.preventDefault()

Handles Login and Sign Up logic conditionally

Displays toast notifications on success or error

Resets form after submission

Responsibilities:

Validate user input

Show success/error messages

Switch back to Login after Sign Up

🔹 Password Visibility Toggle Functions

UI Interaction Logic

Toggles password visibility using icons

Enhances user experience

setShowPassword(!showPassword)
setShowConfirmPassword(!showConfirmPassword)


Icons used:

FaEye → Show password

FaEyeSlash → Hide password

🔹 toast.success() / toast.error()

User Notifications

Shows real-time feedback messages

Used for login success, signup success, and validation errors

Example:

toast.success('Login successful ✅')

🔹 Conditional Rendering Logic

Dynamic UI Rendering

Shows different fields based on isLogin state

Example:

First Name / Last Name → only in Sign Up

Remember Me → only in Login

{!isLogin && (...)}

✅ Summary

This component uses:

React Hooks for state management

Custom utility functions for form control

Conditional rendering for dynamic UI

Toast notifications for feedback

Clean separation of logic and UI
👨‍💻 Author

Pranav Chavan
🎓 MCA (2nd Year) – Suryadatta Institute (SIMMC)
💻 Frontend / Web Developer

📧 Email: pranavchavan861@gmail.com

