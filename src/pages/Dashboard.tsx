
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import CourseSection from "@/components/courses/CourseSection";
import NewLaunchesSection from "@/components/courses/NewLaunchesSection";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-white">Recommended Courses</h1>
        <CourseSection />
        
        <h1 className="text-2xl font-bold my-8 text-white">New Launches</h1>
        <NewLaunchesSection />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
