import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import arrowShooterImage from "../../unnamed (4).webp";
import unpuzzleJamImage from "../../assets/unpuzzle-jam.png";
import stackPegPuzzleImage from "../../assets/stack-peg-puzzle.png";
import yarnUnzipImage from "../../assets/yarn-unzip.jpg";

const games = [
  {
    id: 1,
    title: "Arrow Shooter",
    description: "Aim, time, and clear each level.",
    image: arrowShooterImage,
    category: "Action puzzle",
    platform: "Android",
    url: "https://play.google.com/store/search?q=arrow+shooter&c=apps&hl=vi",
  },
  {
    id: 2,
    title: "Unpuzzle Jam",
    description: "Slide, match, and untangle colorful puzzle blocks.",
    image: unpuzzleJamImage,
    category: "Puzzle",
    platform: "Android",
    url: "https://play.google.com/store/apps/details?id=com.whestudio.unpuzzlejam&hl=vi",
  },
  {
    id: 3,
    title: "Stack Peg Puzzle",
    description: "Sort and stack colorful pieces to clear each puzzle.",
    image: stackPegPuzzleImage,
    category: "Puzzle",
    platform: "Android",
    url: "https://play.google.com/store/apps/details?id=com.whestudio.stackpegpuzzle&hl=vi",
  },
  {
    id: 4,
    title: "Yarn Unzip",
    description: "Unzip layers and match colorful yarn in a 3D puzzle.",
    image: yarnUnzipImage,
    category: "Puzzle",
    platform: "iOS",
    url: "https://apps.apple.com/vn/app/yarn-unzip/id6797804396?l=vi",
  },
];

export function Games() {
  return (
    <section id="games" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="border-t border-black/10 pt-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Our games</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Find your next puzzle.
            </h2>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Simple games, clearly presented. Browse the collection and choose a game to play.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          {games.map((game, index) => (
            <article
              key={game.id}
              className={`group flex gap-4 p-4 transition-colors hover:bg-slate-50 sm:items-center sm:gap-5 sm:p-5 ${
                index !== games.length - 1 ? "border-b border-black/8" : ""
              }`}
            >
              <ImageWithFallback
                src={game.image}
                alt={`${game.title} game icon`}
                className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm sm:h-24 sm:w-24"
              />

              <div className="min-w-0 flex-1 self-center">
                <h3 className="truncate text-lg font-semibold tracking-[-0.02em] text-slate-950 sm:text-xl">
                  {game.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">Whe Studio · {game.category}</p>
                <p className="mt-2 hidden text-sm text-slate-500 sm:block">{game.description}</p>
              </div>

              <a
                href={game.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${game.title} on ${game.platform}`}
                className="flex shrink-0 items-center gap-2 self-center rounded-full border border-black/10 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white sm:px-4 sm:text-sm"
              >
                {game.platform}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
