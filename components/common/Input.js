import { useEffect } from "react"

export default function Input({ type, width, placeholder, onChange }) {
    const widthConfig = {
        sm : 'w-24',
        md : 'w-40'
    }

    return (
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={`
                ${widthConfig[width]}
                bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 
                px-2 py-1 dark:bg-gray-700 m-2"
            `}
        />
    )
}