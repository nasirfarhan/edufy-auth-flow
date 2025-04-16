
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

const newLaunches = [
  {
    id: 1,
    title: "EV",
    description: "Master electric vehicle technologies and sustainable transportation solutions.",
    progress: 0,
  },
  {
    id: 2,
    title: "System Design",
    description: "Learn to architect scalable, resilient and maintainable software systems.",
    progress: 0,
  },
  {
    id: 3,
    title: "Wearables",
    description: "Build applications for smartwatches and other wearable technologies.",
    progress: 0,
  },
  {
    id: 4,
    title: "Quantum Computing",
    description: "Explore the fundamentals of quantum algorithms and applications.",
    progress: 0,
  },
  {
    id: 5,
    title: "Metaverse",
    description: "Create immersive experiences for the next generation of the internet.",
    progress: 0,
  },
];

const NewLaunchesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [autoScrollActive, setAutoScrollActive] = useState(true);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: 'left' | 'right', scrollAmount = 320) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollDir = direction === 'left' ? -scrollAmount : scrollAmount;
      current.scrollBy({ left: scrollDir, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
      
      // If we're near the end and autoscroll is active, reset scroll position
      if (scrollLeft >= scrollWidth - clientWidth - 10 && autoScrollActive) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  // Auto scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollActive && scrollRef.current) {
        autoScrollTimerRef.current = setInterval(() => {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current!;
          
          // If we're near the end, go back to start
          if (scrollLeft >= scrollWidth - clientWidth - 10) {
            scrollRef.current!.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scroll('right', 100);
          }
        }, 3500); // Slightly different timing to avoid synchronized scrolling
      }
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [autoScrollActive]);

  // Pause auto-scroll on hover/touch
  const handleMouseEnter = () => {
    setAutoScrollActive(false);
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setAutoScrollActive(true);
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener('scroll', handleScroll);
      return () => current.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative mb-10">
      {showLeftButton && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#172c3a]/80 text-white hover:bg-[#172c3a] rounded-full"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 py-4 scrollbar-none"
        onScroll={handleScroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {newLaunches.map(course => (
          <CourseCard 
            key={course.id}
            title={course.title}
            description={course.description}
            progress={course.progress}
            showProgress={false}
          />
        ))}
      </div>
      
      {showRightButton && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#172c3a]/80 text-white hover:bg-[#172c3a] rounded-full"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default NewLaunchesSection;
