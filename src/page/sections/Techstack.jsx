import TechCard from "@/page/comps/techCard";
import { TechArrLanguages, TechArrBack, TechArrFront, TechArrMobile, TechArrTools } from "./../../constants/technologies";

export default function Techstack() {
  // Combine all technologies into different rows
  const row1 = [...TechArrLanguages, ...TechArrFront];
  const row2 = [...TechArrBack, ...TechArrMobile];
  const row3 = TechArrTools;

  const MarqueeRow = ({ technologies, reverse = false }) => (
    <div className="marquee-container py-4">
      <div className={`marquee-content ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
        {/* Duplicate items for seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex-shrink-0">
            <TechCard
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section-spacing bg-gray-900/50 overflow-hidden">
      <div className="max-w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Animated Marquee Rows */}
        <div className="space-y-8">
          <MarqueeRow technologies={row1} />
          <MarqueeRow technologies={row2} reverse />
          <MarqueeRow technologies={row3} />
        </div>
      </div>
    </section>
  );
}

