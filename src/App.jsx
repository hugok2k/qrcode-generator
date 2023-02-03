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
        className="bg-teal-700 hover:bg-accent text-2xl rounded-md p-2 my-8 px-6 text-white flex flex-row justify-center items-center gap-4 active:scale-95 transition-transform duration-100 ease-in-out"
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
      <footer className="text-lg text-teal-900 mt-10">
        <p className="flex gap-2">
          Made with
          <span role="img" aria-label="love">
            ❤️
          </span>
          by
          <a
            href="https://hugoavila.vercel.app/"
            target="_blank"
            className="text-orange-500 cursor-pointer hover:text-orange-700"
          >
            Hugo Avila
          </a>
        </p>
        <p className="flex justify-center items-center gap-6">
          <a
            href="https://github.com/hugok2k"
            target="_blank"
            className="flex justify-center items-center gap-2 hover:text-orange-500"
          >
            <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20">
              <title>Logo Github</title>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/devhugoavila/"
            target="_blank"
            className="flex justify-center items-center gap-2 hover:text-orange-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <title>Logo Linkedin</title>
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            Linkedin
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
