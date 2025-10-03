export default function Header({ changeLang, i18n }) {
  return (
    <header className="flex flex-row justify-end items-center w-full p-4">
      <div className="mr-4 flex gap-2">
        <button
          type="button"
          className={`text-sm hover:underline cursor-pointer ${i18n.language === "es" ? "text-white bg-[#00786f]" : "text-black"} px-1 py-2 font-semibold`}
          onClick={() => changeLang("es")}
        >
          ES
        </button>
        <div className="h-auto w-[2px] bg-[#00786f]"></div>
        <button
          type="button"
          className={`text-sm hover:underline cursor-pointer ${i18n.language === "en" ? "text-white bg-[#00786f]" : "text-black"} px-1 py-2 font-semibold`}
          onClick={() => changeLang("en")}
        >
          EN
        </button>
      </div>
    </header>
  )
}
