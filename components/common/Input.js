import { useEffect } from "react"

export default function Input({ type, width, placeholder, value, onChange }) {
    const widthConfig = {
        sm : 'w-24',
        md : 'w-40',
        full : 'w-full'
    }

    return (
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={`
                ${widthConfig[width]}
                bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded focus:ring-blue-500 focus:border-blue-500 
                px-2 py-1 m-2"
            `}
        />
    )
}