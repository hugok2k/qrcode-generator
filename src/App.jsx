import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { handleSave } from './utils/handleSave.js'
import Footer from './components/Footer.jsx'
import { DownloadSVG } from './components/SVG.jsx'
import '@fontsource-variable/jetbrains-mono'

function App() {
  const [value, setValue] = useState('www.google.com')
  const [size, setSize] = useState(192)

  return (
    <div className="flex flex-col justify-evenly items-center bg-slate-100 w-full h-full min-h-screen">
      <main className="flex flex-col justify-center items-center w-full font-bold scroll-smooth">
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
            aria-label="Write a text"
          />
        </div>
        <span className="text-xl text-teal-900 mt-8">Resize QR Code</span>
        <input
          className="range range-accent range-xs w-60 min my-2"
          type="range"
          min={48}
          max={512}
          value={size}
          step="16"
          onChange={(e) => setSize(Number(e.target.value))}
          aria-label="Resize QR Code"
        />
        <span className="text-xl text-teal-900">
          {size} x {size}
        </span>
        <button
          className="flex flex-row justify-center items-center bg-teal-700 hover:bg-accent text-xl rounded-md px-6 py-2 my-10 text-white gap-4 active:scale-95 transition-transform duration-100 ease-in-out"
          onClick={handleSave}
        >
          <DownloadSVG />
          <span className="block">Download PNG</span>
        </button>
      </main>
      <Footer />
    </div>
  )
}

export default App
