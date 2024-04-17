"use client"
import Link from "next/link"
import { useState } from "react"

const formatNumber = (number: string) => {
  const formatted = number.replace(/[^0-9]/g, "")
  // take last 11 digits
  if (formatted.length > 11) {
    return formatted.slice(-11)
  }
  return formatted
}

const Home = () => {
  const [number, setNumber] = useState("")

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-3">
      <input
        type="text"
        id="number"
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-gray-400"
        placeholder="Pest the number here"
        required
        onChange={e => {
          const number = formatNumber(e.target.value)
          setNumber(number)
        }}
      />
      {number ? (
        <Link
          href={`https://wa.me/88${number}`}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
          Open In WhatsApp
        </Link>
      ) : (
        <button
          type="button"
          className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          disabled>
          Open In WhatsApp
        </button>
      )}
    </div>
  )
}
export default Home
