
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/auth/AuthCard";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { User } from "lucide-react";

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailOrUsername || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    const success = login(emailOrUsername, password);
    
    if (success) {
      toast({
        title: "Success",
        description: "You have successfully logged in!",
      });
      navigate("/");
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const header = (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 relative">
          <img 
            src="/lovable-uploads/7470a764-a38d-4ef0-8118-73fd300fb84b.png"
            alt="EvoEd Logo"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
        <span className="text-2xl font-bold text-yellow-400">EvoEd</span>
      </div>
      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
        <img 
          src="/lovable-uploads/a1fd4678-3174-46c7-84ef-6efc75839b20.png"
          alt="Avatar"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <h1 className="text-2xl font-bold">Sign In</h1>
    </div>
  );

  return (
    <AuthCard header={header}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="emailOrUsername">Username or Email</Label>
          <Input
            id="emailOrUsername"
            type="text"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="bg-[#1d3748] border-gray-700"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#1d3748] border-gray-700"
          />
        </div>
        
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Login
        </Button>
        
        <div className="text-center">
          <p className="text-gray-300">
            New to EvoEd?{" "}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
