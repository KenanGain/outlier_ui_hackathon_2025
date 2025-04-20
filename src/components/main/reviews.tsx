/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee"; // Update the path to the correct location
import { TextAnimate } from "../magicui/text-animate";

const reviews = [
  {
    name: "Sarah Thompson",
    username: "@sarah_fx",
    body: "This platform revolutionized how I manage cross-border transactions. Execution speeds are unmatched!",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Raj Patel",
    username: "@raj_fintech",
    body: "Best forex rates I've found with real-time market analytics. Essential for my trading strategy.",
    img: "https://avatar.vercel.sh/raj",
  },
  {
    name: "Emily Chen",
    username: "@emily_invest",
    body: "Institutional-grade tools with retail accessibility. Saved 1.2% on currency conversions last quarter.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Michael O'Connor",
    username: "@mike_fxpro",
    body: "API integration simplified our global payroll system. 24/7 support team is phenomenal.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Fatima Al-Maktoum",
    username: "@fatima_finance",
    body: "Multi-currency accounts with instant settlements. Game changer for our e-commerce business.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "David Yamamoto",
    username: "@david_trading",
    body: "Hedging tools protected us during market volatility. Execution is flawless every time.",
    img: "https://avatar.vercel.sh/david",
  },
];

const firstRow = reviews.slice(0, 2);
const secondRow = reviews.slice(2, 4);
const thirdRow = reviews.slice(4, 6);
const fourthRow = reviews.slice(0, 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-blue-500/20 bg-gradient-to-b from-blue-50/10 to-blue-100/5",
        "dark:border-cyan-500/20 dark:from-slate-900/10 dark:to-slate-800/5",
        "hover:shadow-lg transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-10 h-10" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-cyan-100 text-blue-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-cyan-400/60 text-blue-600/80">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-gray-200 text-gray-700">
        {body}
      </blockquote>
    </figure>
  );
};

export function FinancialReviewsMarquee() {
  return (
    <div className=" flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-slate-900 [perspective:1000px]">
      <TextAnimate
                  by="character"
                  animation="blurIn"
                  
                  className="absolute rounded-full  px-4 py-2 text-sm"
                >
      <h1 className=" text-3xl font-bold  dark:text-cyan-100 text-blue-900">
        Trusted by Financial Professionals
      </h1>
      </TextAnimate>
      <div className="relative flex h-full w-full flex-row items-center justify-center gap-4 overflow-hidden">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:25s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:25s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-blue-50 dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-blue-50 dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-blue-50 dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-blue-50 dark:from-slate-950" />
      </div>
    </div>
  );
}