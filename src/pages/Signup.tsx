
import { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/auth/AuthCard";
import { SignupSuccess } from "@/components/auth/SignupSuccess";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { User } from "lucide-react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { signup } = useAuth();
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!email || !username || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    const signupSuccess = signup(email, username, password);
    
    if (signupSuccess) {
      setSuccess(true);
    } else {
      toast({
        title: "Error",
        description: "Username or email already exists",
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
      <h1 className="text-2xl font-bold">Create An EvoEd Account</h1>
    </div>
  );

  if (success) {
    return (
      <AuthCard header={header}>
        <SignupSuccess />
      </AuthCard>
    );
  }

  return (
    <AuthCard header={header}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1d3748] border-gray-700"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#1d3748] border-gray-700"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#1d3748] border-gray-700"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-[#1d3748] border-gray-700"
          />
        </div>
        
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
          Sign Up
        </Button>
        
        <div className="text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
