export const runtime = "edge";

import Link from "next/link";

const INTRO = {
  Apps: "These are the apps I use the most and rely upon on a daily basis.",
  Brands: "Some of my favorite brands across fashion and entertainment.",
  Tech: "My daily drivers in the tech gadget world.",
};

const USES = {
  Apps: [
    "ZBD",
    "Perplexity",
    "Things",
    "Amie",
    "Notion",
    "Spotify",
    "X",
    "Mattermost",
    "Zed",
    "Figma",
    "Signal",
    "Spark",
  ],
  Tech: [
    'Macbook Pro 14" 2022 (main driver)',
    'Macbook Air 13" 2022',
    "iPhone 15 Pro",
    "Apple Watch Series 7",
    "AirPods (the OG ones)",
    "Nintendo Switch",
    "Theragun Mini (great for travel)",
    "iPad Pro 2022 (+ Pitaka accessories)",
  ],
  Brands: ["Alo", "Aer", "Atoms", "Nike Air", "Suit Supply", "Apple", "Dior"],
};

export default function Uses() {
  return (
    <div>
      {Object.keys(USES).map(key => (
        <>
          <h1 className="mb-2 mt-8 font-bold">{key}</h1>
          <p className="mt-2 mb-4">{INTRO[key]}</p>
          {USES[key].map((use: string) => (
            <div className="flex flex-row" key={use}>
              <p className="mr-2">—</p>
              {use === "ZBD" ? (
                <Link
                  target="_blank"
                  href="https://zbd.gg"
                  rel="noopener noreferrer"
                >
                  <p className="underline">{use}</p>
                </Link>
              ) : (
                <p>{use}</p>
              )}
            </div>
          ))}
        </>
      ))}
    </div>
  );
}
