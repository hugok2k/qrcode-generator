import { useTranslation } from "react-i18next"
import { GitHubSVG, LinkedInSVG } from "./SVG"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="flex flex-col justify-center items-center text-sm text-teal-900 pb-4">
      <p className="flex gap-2">
        {t("made_with")}
        <span role="img" aria-label="love" className="text-red-700">
          ❤️
        </span>
        {t("by")}
        <a
          href="https://hugoavila.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 cursor-pointer hover:text-orange-700 transition duration-200"
        >
          Hugo Avila
        </a>
      </p>
      <div className="flex flex-row justify-center items-center gap-6">
        <a
          href="https://github.com/hugok2k"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 hover:text-orange-500 transition duration-200"
        >
          <GitHubSVG />
          {t("github")}
        </a>
        <a
          href="https://www.linkedin.com/in/devhugoavila/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 hover:text-orange-500 transition duration-200"
        >
          <LinkedInSVG />
          {t("linkedin")}
        </a>
      </div>
      {/** biome-ignore lint/a11y/useAltText: Esto solo se usa para estadísticas  */}
      {/** biome-ignore lint/performance/noImgElement: Esto solo se usa para estadísticas */}
      <img
        decoding="async"
        loading="eager"
        fetchPriority="low"
        src="https://librecounter.org/counter.svg"
        referrerPolicy="unsafe-url"
        className="w-px h-px"
      />
    </footer>
  )
}
