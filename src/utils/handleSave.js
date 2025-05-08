import html2canvas from 'html2canvas-pro'

export async function handleSave() {
  const input = document.querySelector('.qr-code')
  const canvas = await html2canvas(input, {
    backgroundColor: null,
    logging: false,
    useCORS: true,
    scale: 2
  })
  
  const imgData = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.download = 'qr-code.png'
  link.href = imgData
  link.click()
}
