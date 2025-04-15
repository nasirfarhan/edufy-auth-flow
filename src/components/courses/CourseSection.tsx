
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Master frontend and backend technologies to build modern websites.",
    progress: 65,
  },
  {
    id: 2,
    title: "App Development",
    description: "Create cross-platform mobile applications with React Native and Flutter.",
    progress: 40,
  },
  {
    id: 3,
    title: "IoT",
    description: "Connect devices and build smart systems with Internet of Things.",
    progress: 25,
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Build intelligent systems that learn from data and make predictions.",
    progress: 15,
  },
  {
    id: 5,
    title: "Cloud Computing",
    description: "Master AWS, Azure, and GCP to deploy scalable applications.",
    progress: 50,
  },
  {
    id: 6,
    title: "Data Science",
    description: "Analyze complex datasets to extract meaningful insights and patterns.",
    progress: 30,
  },
];

const CourseSection = () => {
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
    <div className="relative">
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
        {courses.map(course => (
          <CourseCard 
            key={course.id}
            title={course.title}
            description={course.description}
            progress={course.progress}
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

export default CourseSection;
