import html2canvas from 'html2canvas'

export const handleSave = () => {
  const input = document.querySelector('.qr-code')
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.download = 'qr-code.png'
    link.href = imgData
    link.click()
  })
}
