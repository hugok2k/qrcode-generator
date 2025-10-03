import { useState } from "react"
import QRCode from "react-qr-code"
import Footer from "./components/Footer.jsx"
import { DownloadSVG } from "./components/SVG.jsx"
import { handleSave } from "./utils/handleSave.js"
import "@fontsource-variable/jetbrains-mono"
import { Trans, useTranslation } from "react-i18next"
import Header from "./components/Header.jsx"

function App() {
  const [value, setValue] = useState("https://www.google.com")
  const [size, setSize] = useState(192)
  const [isLoading, setIsLoading] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLang = (lng) => i18n.changeLanguage(lng)

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      await handleSave()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-evenly items-center bg-slate-100 w-full h-full min-h-screen">
      <Header changeLang={changeLang} i18n={i18n} />
      <main className="flex flex-col justify-center items-center w-full font-bold scroll-smooth">
        <div className="flex flex-row items-center gap-4 mt-10">
          <h1 className="mb-8 text-4xl md:text-4xl text-gray-900 text-center">{t("title")}</h1>
        </div>
        <div
          className="qr-code my-8 bg-white p-4 rounded-md"
          style={{ boxShadow: "0 0 0 16px white, 0 0 0 18px black" }}
        >
          <QRCode value={value} size={size} />
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center max-w-prose px-4">
          <Trans i18nKey="note" />
        </p>
        <div className="flex flex-row justify-center items-center">
          <input
            className="text-xl border-2 text-slate-500 bg-slate-50 border-teal-500 hover:border-teal-700 rounded-md my-6 outline-hidden p-2 text-center"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClick={() => setValue("")}
            aria-label="Write a text"
          />
        </div>
        <span className="text-xl text-teal-900 mt-4">{t("resize")}</span>
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
          className="flex flex-row justify-center items-center bg-teal-700 hover:bg-teal-500 text-xl rounded-md px-6 py-2 my-10 text-white gap-4 active:scale-95 transition-transform duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-700"
          onClick={handleDownload}
          disabled={isLoading}
          aria-label="Download QR Code as PNG"
          type="button"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <DownloadSVG />
          )}
          <span className="block">{isLoading ? t("generating") : t("download")}</span>
        </button>
      </main>
      <Footer />
    </div>
  )
}

export default App
