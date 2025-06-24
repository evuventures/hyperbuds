'use client'

import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, Phone, Facebook, Chrome } from 'lucide-react'

const SignUpForm = () => {
   const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      remindMe: false,
   })

   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   const [focusedField, setFocusedField] = useState('')

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setForm((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log({
         ...form,
         mode: 'signup'
      })
   }

   const InputField = ({ 
      id, 
      name, 
      type = 'text', 
      placeholder, 
      value, 
      onChange, 
      icon: Icon, 
      required = false,
      showToggle = false,
      showValue = false,
      onToggle = null 
   }) => (
      <div className="relative group">
         <div className={`
            absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 
            transition-opacity duration-300 blur-sm
            ${focusedField === name ? 'opacity-100' : ''}
         `} />
         <div className="relative">
            <input
               id={id}
               name={name}
               type={showToggle ? (showValue ? 'text' : 'password') : type}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               onFocus={() => setFocusedField(name)}
               onBlur={() => setFocusedField('')}
               className={`
                  w-full h-14 pl-12 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 
                  rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300
                  focus:bg-white/20 focus:border-purple-400/50 focus:outline-none focus:ring-2 
                  focus:ring-purple-400/20 hover:border-white/30
                  ${focusedField === name ? 'shadow-lg shadow-purple-500/10' : ''}
               `}
               required={required}
            />
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors duration-300" />
            {showToggle && (
               <button
                  type="button"
                  onClick={onToggle}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
               >
                  {showValue ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
               </button>
            )}
         </div>
      </div>
   )

   return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
         {/* Background decorations */}
         <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
         </div>

         <div className="relative z-10 flex w-full max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
               <div className="w-full max-w-md">
                  {/* Header */}
                  <div className="text-center mb-8">
                     <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
                        <User className="w-8 h-8 text-white" />
                     </div>
                     <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                        Create Account
                     </h1>
                     <p className="text-gray-600">Join us and start your journey today</p>
                  </div>

                  {/* Social Login */}
                  <div className="flex gap-3 mb-8">
                     <button className="flex-1 flex items-center justify-center gap-3 h-12 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/80 transition-colors duration-300 group">
                        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                           <Facebook className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Facebook</span>
                     </button>
                     <button className="flex-1 flex items-center justify-center gap-3 h-12 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/80 transition-colors duration-300 group">
                        <Chrome className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium text-gray-700">Google</span>
                     </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center mb-8">
                     <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
                     <span className="px-4 text-sm text-gray-500 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                        or continue with email
                     </span>
                     <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300" />
                  </div>

                  {/* Form */}
                  <div className="space-y-6">
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                           <InputField
                              id="firstName"
                              name="firstName"
                              placeholder="John"
                              value={form.firstName}
                              onChange={handleChange}
                              icon={User}
                              required
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                           <InputField
                              id="lastName"
                              name="lastName"
                              placeholder="Doe"
                              value={form.lastName}
                              onChange={handleChange}
                              icon={User}
                              required
                           />
                        </div>
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                        <InputField
                           id="username"
                           name="username"
                           placeholder="johndoe"
                           value={form.username}
                           onChange={handleChange}
                           icon={User}
                           required
                        />
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <InputField
                           id="email"
                           name="email"
                           type="email"
                           placeholder="john@example.com"
                           value={form.email}
                           onChange={handleChange}
                           icon={Mail}
                           required
                        />
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <InputField
                           id="phone"
                           name="phone"
                           type="tel"
                           placeholder="+1 (555) 000-0000"
                           value={form.phone}
                           onChange={handleChange}
                           icon={Phone}
                           required
                        />
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <InputField
                           id="password"
                           name="password"
                           placeholder="Create a strong password"
                           value={form.password}
                           onChange={handleChange}
                           icon={Lock}
                           showToggle
                           showValue={showPassword}
                           onToggle={() => setShowPassword(!showPassword)}
                           required
                        />
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <InputField
                           id="confirmPassword"
                           name="confirmPassword"
                           placeholder="Confirm your password"
                           value={form.confirmPassword}
                           onChange={handleChange}
                           icon={Lock}
                           showToggle
                           showValue={showConfirmPassword}
                           onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                           required
                        />
                     </div>

                     <div className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer group">
                           <input
                              type="checkbox"
                              name="remindMe"
                              checked={form.remindMe}
                              onChange={handleChange}
                              className="sr-only"
                           />
                           <div className={`
                              w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
                              ${form.remindMe 
                                 ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent' 
                                 : 'border-gray-300 bg-white group-hover:border-purple-400'
                              }
                           `}>
                              {form.remindMe && (
                                 <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                 </svg>
                              )}
                           </div>
                           <span className="ml-3 text-sm text-gray-600">Remember me</span>
                        </label>
                        <button type="button" className="text-sm text-purple-600 hover:text-purple-500 transition-colors">
                           Forgot password?
                        </button>
                     </div>

                     <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98]"
                     >
                        Create Account
                     </button>

                     <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button type="button" className="text-purple-600 hover:text-purple-500 font-medium transition-colors">
                           Sign in
                        </button>
                     </p>
                  </div>
               </div>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block w-1/2 relative">
               <div className="absolute inset-4 bg-gradient-to-br from-purple-600/90 to-blue-600/90 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                  <div className="relative h-full flex items-center justify-center p-12">
                     <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
                           <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                           </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Welcome to our community</h2>
                        <p className="text-lg text-white/80 mb-8">
                           Join thousands of users who trust us with their digital journey. 
                           Experience seamless integration and powerful features.
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                           <div>
                              <div className="text-2xl font-bold">50K+</div>
                              <div className="text-sm text-white/70">Active Users</div>
                           </div>
                           <div>
                              <div className="text-2xl font-bold">99.9%</div>
                              <div className="text-sm text-white/70">Uptime</div>
                           </div>
                           <div>
                              <div className="text-2xl font-bold">24/7</div>
                              <div className="text-sm text-white/70">Support</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignUpForm