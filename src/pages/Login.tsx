
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
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
        <User className="h-6 w-6" />
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
            New to Edufy?{" "}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
