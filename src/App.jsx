import QRCode from 'react-qr-code'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [size, setSize] = useState(128)

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen text-5xl font-mono font-bold">
      <h1 className="mb-8">QR Generator</h1>
      <QRCode value={value} />
      <input
        className="text-xl border-solid border-2 border-sky-300 rounded-md my-8 outline-none p-2 text-center"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default App
