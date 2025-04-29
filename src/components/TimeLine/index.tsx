'use client';

import { useEffect, useRef, useState } from 'react';
import { TimeLineCard } from './TimeLineCard';
import englishStrings from '@/resources/strings';
import { getIconFromString } from '@/utils/utils';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export const TimeLine = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const CARD_WIDTH = 60;
  const GAP = 12;
  const SCROLL_AMOUNT = (CARD_WIDTH + GAP) * 3;

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollLeft = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
      scrollRef.current.scrollBy({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);
  const steps = englishStrings.components.timeline.steps;

  return (
    <div className="flex">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden group-hover:flex absolute left-40 -top-42 bottom-0 z-10 items-center px-2 text-white cursor-pointer group/seta"
        >
          <div className="w-8 h-8 transition-transform duration-200 transform group-hover/seta:scale-180">
            <ChevronLeft className="w-full h-full" />
          </div>
        </button>
      )}
      <div ref={scrollRef} className="relative flex flex-col w-[70%] mx-auto overflow-x-auto py-16 scroll-hidden">
        <div className="relative flex items-center gap-30 min-w-max h-64">
          <div className="absolute top-12 left-0 right-0 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center z-10 group min-h-[280px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex items-center justify-center bg-white min-w-24 w-24 h-24 rounded-2xl shadow-md transition-all duration-300 ${hoveredIndex === index ? '-translate-y-2' : ''
                  }`}
              >
                {getIconFromString(step.icon)}
              </div>
              <span>
                {step.year}
              </span>
              <div className="relative w-full">
                <div
                  className={`absolute top-full mt-2 transition-all duration-300
                ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                ${index === 0
                      ? 'left-0'
                      : index === steps.length - 1
                        ? 'right-0'
                        : 'left-1/2 -translate-x-1/2'
                    }
              `}
                >
                  {hoveredIndex === index && (
                    <TimeLineCard title={step.title} description={step.description} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden group-hover:flex absolute right-40 -top-42 bottom-0 z-10 items-center px-2 text-white cursor-pointer group/seta"
        >
          <div className="w-8 h-8 transition-transform duration-200 transform group-hover/seta:scale-180">
            <ChevronRight className="w-full h-full" />
          </div>
        </button>
      )}
    </div>
  );
};
