
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const { current } = scrollRef;
    current?.addEventListener('scroll', handleScroll);
    return () => current?.removeEventListener('scroll', handleScroll);
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
