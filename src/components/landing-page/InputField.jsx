
'use client'
import { Eye, EyeOff, } from 'lucide-react'
  
  export default function InputField({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange = () => {},
  icon: Icon,
  required = false,
  showToggle = false,
  showValue = false,
  onToggle = null,
  disabled = false
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={showToggle ? (showValue ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`
          w-full h-14 pl-12 ${showToggle ? 'pr-12' : 'pr-4'} bg-gray/5 backdrop-blur-sm border border-purple-300/50
          rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300
          focus:bg-white/20 focus:border-purple-400/50 focus:outline-none focus:ring-2
          focus:ring-purple-400/20 hover:border-white/30
        `}
      />
      {Icon && (
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      )}
      {showToggle && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onToggle && onToggle()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          disabled={disabled}
        >
          {showValue ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
    </div>
  )
}