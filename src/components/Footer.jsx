import { GitHubSVG, LinkedInSVG } from './SVG'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-lg text-teal-900 min-h-36">
      <p className="flex gap-2">
        Made with
        <span role="img" aria-label="love" className="text-red-700">
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
      <div className="flex flex-row justify-center items-center gap-6">
        <a
          href="https://github.com/hugok2k"
          target="_blank"
          className="flex justify-center items-center gap-2 hover:text-orange-500"
        >
          <GitHubSVG />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/devhugoavila/"
          target="_blank"
          className="flex justify-center items-center gap-2 hover:text-orange-500"
        >
          <LinkedInSVG />
          Linkedin
        </a>
        <img
          decoding="async"
          loading="eager"
          fetchPriority="low"
          src="https://librecounter.org/counter.svg"
          referrerPolicy="unsafe-url"
          className="w-[1px] h-[1px]"
        />
      </div>
    </footer>
  )
}
