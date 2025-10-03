import { toast } from "sonner"
import i18n from "../i18n"

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

export async function handleSave(format = "svg", opts = {}) {
  const container = document.querySelector(".qr-code")
  if (!container) return
  const svg = container.querySelector("svg")
  if (!svg) return

  let url
  try {
    const serializeSvg = () => {
      const serializer = new XMLSerializer()
      let source = serializer.serializeToString(svg)
      if (!source.match(/^<\?xml/)) {
        source = `<?xml version="1.0" encoding="UTF-8"?>\n${source}`
      }
      return source
    }

    if (format === "svg") {
      const source = serializeSvg()
      const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" })
      downloadBlob(blob, "qr-code.svg")
      return
    }

    const source = serializeSvg()
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" })
    url = URL.createObjectURL(svgBlob)
    const img = new Image()
    img.crossOrigin = "anonymous"
    const targetSize = opts.size && Number.isFinite(Number(opts.size)) ? Number(opts.size) : null
    await new Promise((resolve, reject) => {
      img.onload = () => resolve(null)
      img.onerror = () => reject(new Error("Image load failed"))
      img.src = url
    })

    const naturalW = img.naturalWidth || targetSize || 0
    const naturalH = img.naturalHeight || targetSize || 0
    const desired = targetSize || Math.max(naturalW, naturalH) || 512

    const scale = window.devicePixelRatio || 1
    const canvas = document.createElement("canvas")
    canvas.width = Math.round(desired * scale)
    canvas.height = Math.round(desired * scale)
    const ctx = canvas.getContext("2d")
    ctx?.scale(scale, scale)
    ctx.drawImage(img, 0, 0, desired, desired)

    const blob = await new Promise((res) => canvas.toBlob((b) => res(b), "image/png"))
    if (blob) downloadBlob(blob, "qr-code.png")
    return
  } catch {
    toast.error(i18n.t("download_error"))
  } finally {
    if (typeof url !== "undefined" && url) URL.revokeObjectURL(url)
  }
}
