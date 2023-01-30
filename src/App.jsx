import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { handleSave } from './utils/handleSave.js'

function App() {
  const [value, setValue] = useState('www.google.com')
  const [size, setSize] = useState(192)

  return (
    <main className="flex flex-col justify-center items-center w-full h-full min-h-screen font-mono font-bold bg-slate-100  scroll-smooth">
      <h1 className="mb-8 text-5xl text-black text-center mt-14">QR Code Generator</h1>
      <div className="qr-code my-8 bg-black border-[16px] border-white  outline-black outline-[16px] outline-double rounded-md">
        <QRCode value={value} size={size} />
      </div>

      <div className="flex flex-row justify-center items-center">
        <input
          className="text-xl border-2 text-slate-500 bg-slate-50 border-teal-500 hover:border-teal-700 rounded-md my-8 outline-none p-2 text-center"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setValue('')}
        />
      </div>

      <span className="text-xl text-teal-900 mt-8">Elige el tamaño</span>
      <input
        className="range range-accent range-xs w-60 min my-2"
        type="range"
        min={48}
        max={512}
        value={size}
        step="16"
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <span className="text-xl text-teal-900">
        {size} x {size}
      </span>
      <button
        className="bg-teal-700 hover:bg-accent text-2xl rounded-md p-2 my-8 px-6 text-white flex flex-row justify-center items-center gap-4"
        onClick={handleSave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <title>Image QR Code</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        Download PNG
      </button>
    </main>
  )
}

export default App
