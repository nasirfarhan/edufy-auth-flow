import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User } from "lucide-react";

const Index = () => {
  const { user, logout, users } = useAuth();
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
    <div className="min-h-screen flex items-center justify-center bg-[#1d3748]">
      <div className="bg-[#172c3a] text-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold">Edufy Dashboard</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={logout} 
            className="text-white hover:text-red-300 hover:bg-red-900/20"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mb-8 p-4 border border-blue-800 rounded-lg bg-blue-900/20">
          <h2 className="text-xl font-semibold mb-2">Welcome, {user.username}!</h2>
          <p className="text-gray-300">You are successfully logged in.</p>
          <p className="text-gray-300 mt-2">Email: {user.email}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Authentication Demo</h3>
          <p className="text-gray-300 text-sm">
            This is a demo of a basic authentication system. In a real app, this would be connected to a secure backend service.
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-lg font-medium mb-2">Registered Users:</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {users.map((u, index) => (
              <div key={index} className="text-sm bg-blue-900/20 p-2 rounded">
                <div><span className="font-medium">Username:</span> {u.username}</div>
                <div><span className="font-medium">Email:</span> {u.email}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
