
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isCourseDetail = location.pathname.includes('/course/');

  useEffect(() => {
    const handleToggle = () => setSidebarOpen(prev => !prev);
    window.addEventListener('toggle-sidebar', handleToggle);
    return () => window.removeEventListener('toggle-sidebar', handleToggle);
  }, []);

  return (
    <div className="min-h-screen bg-[#1d3748]">
      {!isCourseDetail && (
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      )}
      <div className="flex relative">
        {!isCourseDetail && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {!isCourseDetail && <Sidebar isOpen={sidebarOpen} />}
        <main className={`flex-1 transition-all duration-300 ${isCourseDetail ? '' : 'mt-16'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
