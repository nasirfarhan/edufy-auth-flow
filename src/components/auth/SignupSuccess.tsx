
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SignupSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        navigate("/login");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-4">
        <Check className="text-green-400 w-16 h-16 animate-[bounce_1s_infinite]" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Setting up your EvoEd Account</h2>
      <p className="text-gray-300">Redirecting to login page in {countdown} seconds...</p>
    </div>
  );
}
