'use client'

import { useState, useEffect } from 'react'
import InputField from './InputField'
import { Mail, Lock, User, Phone, Facebook, Chrome, Loader2, CheckCircle } from 'lucide-react'

const VerifyEmail = ({ email }) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-lg shadow-green-500/25">
        <Mail className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
        Check Your Email
      </h1>
      <p className="text-gray-600 mb-8">
        A verification link has been sent to
      </p>
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl mb-8">
        <p className="text-blue-800 font-medium text-lg">{email}</p>
      </div>
      <div className="space-y-4 text-sm text-gray-600">
        <p>Please check your email and click the verification link to activate your account.</p>
        <p>Didn't receive the email? Check your spam folder or 
          <button className="text-purple-600 hover:text-purple-500 font-medium ml-1 transition-colors">
            resend verification email
          </button>
        </p>
      </div>
    </div>
  )
}

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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Pre-fill email if returning from verify page
  useEffect(() => {
    const savedEmail = sessionStorage.getItem('registeredEmail')
    if (savedEmail) {
      setForm((prev) => ({ ...prev, email: savedEmail }))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (error) setError('')
  }

  const validateForm = () => {
    if (!form.firstName.trim()) return 'First name is required'
    if (!form.lastName.trim()) return 'Last name is required'
    if (!form.username.trim()) return 'Username is required'
    if (!form.email.trim()) return 'Email is required'
    if (!form.password) return 'Password is required'
    if (form.password !== form.confirmPassword) return 'Passwords do not match'
    if (form.password.length < 6) return 'Password must be at least 6 characters'
    if (form.username.length < 3) return 'Username must be at least 3 characters'
    if (form.username.includes('@')) return 'Username cannot be an email address'
    if (!/^[a-zA-Z0-9_]+$/.test(form.username)) return 'Username can only contain letters, numbers, and underscores'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) return 'Please enter a valid email address'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          username: form.username.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          password: form.password,
        }),
      })

      const data = await response.json()
      console.log('Verify link:', data.verificationLink)
      sessionStorage.setItem('verificationLink', data.verificationLink)
      sessionStorage.setItem('registeredEmail', form.email.trim())

      if (!response.ok) throw new Error(data.message || 'Registration failed')

      setSuccess('Account created successfully! Please verify your email.')

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {success ? (
              <VerifyEmail email={form.email} />
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/25">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                    Create Account
                  </h1>
                  <p className="text-gray-600">Join us and start your journey today</p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div className="flex gap-3 mb-8">
                  <button className="flex-1 flex items-center justify-center gap-3 h-12 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/80 transition-colors duration-300" disabled={isLoading}>
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                      <Facebook className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-3 h-12 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/80 transition-colors duration-300" disabled={isLoading}>
                    <Chrome className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Google</span>
                  </button>
                </div>

                <div className="flex items-center mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="px-4 text-sm text-gray-500">or continue with email</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField id="firstName" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} icon={User} required disabled={isLoading} />
                    <InputField id="lastName" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} icon={User} required disabled={isLoading} />
                  </div>
                  <InputField id="username" name="username" placeholder="johndoe123" value={form.username} onChange={handleChange} icon={User} required disabled={isLoading} />
                  <InputField id="email" name="email" type="email" autoComplete="email" placeholder="john@example.com" value={form.email} onChange={handleChange} icon={Mail} required disabled={isLoading} />
                  <InputField id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} icon={Phone} disabled={isLoading} />
                  <InputField id="password" name="password" type="password" autoComplete="new-password" placeholder="Create a strong password" value={form.password} onChange={handleChange} icon={Lock} showToggle showValue={showPassword} onToggle={() => setShowPassword(!showPassword)} required disabled={isLoading} />
                  <InputField id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={form.confirmPassword} onChange={handleChange} icon={Lock} showToggle showValue={showConfirmPassword} onToggle={() => setShowConfirmPassword(!showConfirmPassword)} required disabled={isLoading} />

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" name="remindMe" checked={form.remindMe} onChange={handleChange} className="sr-only" disabled={isLoading} />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${form.remindMe ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent' : 'border-gray-300 bg-white'}`}>
                        {form.remindMe && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="ml-3 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-purple-600 hover:text-purple-500 transition-colors" disabled={isLoading}>Forgot password?</button>
                  </div>

                  <button type="submit" disabled={isLoading} className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <button type="button" className="text-purple-600 hover:text-purple-500 font-medium transition-colors" disabled={isLoading}>
                      Sign in
                    </button>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

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