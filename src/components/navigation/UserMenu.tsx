
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LogOut, User, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface UserMenuProps {
  onClose: () => void;
}

const UserMenu = ({ onClose }: UserMenuProps) => {
  const { logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      ref={menuRef}
      className="absolute right-0 top-12 w-48 bg-[#172c3a] border border-blue-800 rounded-md shadow-lg py-1 z-20"
    >
      <Link 
        to="/profile" 
        className="flex items-center px-4 py-2 text-sm text-white hover:bg-blue-900/40"
      >
        <User className="mr-2 h-4 w-4" />
        Profile
      </Link>
      <Link 
        to="/settings" 
        className="flex items-center px-4 py-2 text-sm text-white hover:bg-blue-900/40"
      >
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Link>
      <div className="border-t border-blue-800 my-1"></div>
      <button
        onClick={handleLogout}
        className="flex items-center px-4 py-2 text-sm text-white hover:bg-blue-900/40 w-full text-left"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
