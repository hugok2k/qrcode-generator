import { useState } from "react"
import QRCode from "react-qr-code"
import DownloadButton from "./components/DownloadButton.jsx"
import Footer from "./components/Footer.jsx"
import { DownloadSVG } from "./components/SVG.jsx"
import { handleSave } from "./utils/handleSave.js"
import "@fontsource-variable/jetbrains-mono"
import { Trans, useTranslation } from "react-i18next"
import { Toaster } from "sonner"
import Header from "./components/Header.jsx"

function App() {
  const [value, setValue] = useState("https://www.google.com")
  const [size, setSize] = useState(192)
  const [preset, setPreset] = useState("192")
  const [customSize, setCustomSize] = useState(192)
  const [isLoadingSVG, setIsLoadingSVG] = useState(false)
  const [isLoadingPNG, setIsLoadingPNG] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLang = (lng) => i18n.changeLanguage(lng)

  const togglePreset = (v) => {
    setPreset(v)
    if (v === "custom") {
      setSize(customSize)
      return
    }

    const n = Number(v)
    setSize(n)
    setCustomSize(n)
  }

  return (
    <div className="flex flex-col justify-between items-center bg-slate-100 w-full h-full min-h-screen">
      <Header changeLang={changeLang} i18n={i18n} />
      <Toaster />
      <main className="flex flex-col justify-center items-center w-full font-bold">
        <div className="flex flex-row items-center gap-4 mt-10">
          <h1 className="mb-8 text-4xl md:text-4xl text-gray-900 text-center">{t("title")}</h1>
        </div>
        <div
          className="qr-code my-8 bg-white p-4 rounded-md"
          style={{ boxShadow: "0 0 0 16px white, 0 0 0 18px black" }}
        >
          <QRCode value={value} size={size} style={{ width: `${size}px`, height: `${size}px` }} />
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
        <div className="flex flex-col items-center my-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-3 text-black">
              <label className="flex items-center gap-2 text-sm">
                <input
                  id="preset-128"
                  type="radio"
                  name="preset-radio"
                  className="radio radio-success"
                  checked={preset === "128"}
                  onChange={() => togglePreset("128")}
                  aria-label="128 x 128 preset"
                />
                128 x 128
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  id="preset-192"
                  type="radio"
                  name="preset-radio"
                  className="radio radio-success"
                  checked={preset === "192"}
                  onChange={() => togglePreset("192")}
                  aria-label="192 x 192 preset"
                />
                192 x 192
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  id="preset-256"
                  type="radio"
                  name="preset-radio"
                  className="radio radio-success"
                  checked={preset === "256"}
                  onChange={() => togglePreset("256")}
                  aria-label="256 x 256 preset"
                />
                256 x 256
              </label>
            </div>
            <div className="flex flex-row items-center gap-3 text-black">
              <label className="flex items-center gap-2 text-sm">
                <input
                  id="preset-384"
                  type="radio"
                  name="preset-radio"
                  className="radio radio-success"
                  checked={preset === "384"}
                  onChange={() => togglePreset("384")}
                  aria-label="384 x 384 preset"
                />
                384 x 384
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  id="preset-512"
                  type="radio"
                  name="preset-radio"
                  className="radio radio-success"
                  checked={preset === "512"}
                  onChange={() => togglePreset("512")}
                  aria-label="512 x 512 preset"
                />
                512 x 512
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  id="preset-custom"
                  type="radio"
                  name="preset-radio"
                  className="radio radio-success"
                  checked={preset === "custom"}
                  onChange={() => togglePreset("custom")}
                  aria-label="Custom preset"
                />
                {t("custom") ?? "Personalizado"}
              </label>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3 mt-3">
            <label htmlFor="custom-size-input" className="text-sm text-teal-900">
              {preset === "custom" ? (t("custom_size") ?? "Tamaño") : null}
            </label>
            {preset === "custom" ? (
              <input
                id="custom-size-input"
                className="text-lg border-2 text-slate-500 bg-slate-50 border-teal-500 rounded-md p-1 w-28 text-center"
                type="text"
                value={customSize}
                onChange={(e) => {
                  const v = e.target.value
                  setCustomSize(v)
                  if (v === "") return
                  const num = Number(v)
                  if (Number.isFinite(num)) {
                    const normalized = Math.max(16, Math.round(num))
                    setSize(normalized)
                    setPreset("custom")
                  }
                }}
                onBlur={() => {
                  setCustomSize(String(size))
                }}
                aria-label="Custom QR size"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-row gap-4 my-6">
          <DownloadButton
            isLoading={isLoadingSVG}
            onClick={async () => {
              setIsLoadingSVG(true)
              try {
                await handleSave("svg")
              } finally {
                setIsLoadingSVG(false)
              }
            }}
            disabled={isLoadingSVG}
            ariaLabel="Download QR Code as SVG"
            type="button"
            icon={<DownloadSVG />}
          >
            SVG
          </DownloadButton>

          <DownloadButton
            isLoading={isLoadingPNG}
            onClick={async () => {
              setIsLoadingPNG(true)
              try {
                await handleSave("png", { size })
              } finally {
                setIsLoadingPNG(false)
              }
            }}
            disabled={isLoadingPNG}
            ariaLabel="Download QR Code as PNG"
            type="button"
            icon={<DownloadSVG />}
          >
            PNG
          </DownloadButton>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
