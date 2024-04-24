import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center w-full max-w-[100vw]">
      <div>
        <Logo />
      </div>
      <div className="flex-1">
        <nav className="font-mono text-xs items-center justify-end flex">
          <ThemeToggle />

          <Link
            href="/about"
            className="mx-1 inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
          >
            About
          </Link>
          <a
            href="https://twitter.com/andreneves"
            target="_blank"
            className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
          >
            <TweetIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}

function TweetIcon(props: any) {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
