import { useTranslation } from "react-i18next"

export default function DownloadButton({ isLoading, onClick, disabled, ariaLabel, type = "button", icon, children }) {
  const { t } = useTranslation()

  return (
    <button
      className="flex flex-row justify-center items-center bg-teal-700 hover:bg-teal-500 rounded-md px-4 py-1 text-white gap-4 active:scale-95 transition duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-700"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (typeof onClick === "function") onClick(e)
      }}
      disabled={disabled}
      aria-label={ariaLabel}
      type={type}
      aria-busy={isLoading}
    >
      <span className="flex items-center justify-center w-5 h-5">
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          icon
        )}
      </span>

      <span className="block">{children}</span>

      {/* screen-reader only status for accessibility */}
      {isLoading ? <span className="sr-only">{t("generating")}</span> : null}
    </button>
  )
}
