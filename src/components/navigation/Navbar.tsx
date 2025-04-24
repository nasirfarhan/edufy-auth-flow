import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserMenu from "./UserMenu";
import { LevelIndicator } from "../ui/level-indicator";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const { user } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <nav className="bg-[#172c3a] py-3 px-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#172c3a] flex items-center justify-center">
            <img 
              src="/lovable-uploads/3fbaf88a-90d9-4da5-ad87-8fcfeebf8e54.png"
              alt="EvoEd"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <span className="text-xl font-bold text-white">EvoEd</span>
        </Link>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search courses..." 
              className="pl-10 bg-blue-900/20 border-blue-800 text-white placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 relative" ref={userMenuRef}>
          <div className="flex flex-col items-end">
            <Button 
              variant="ghost" 
              className="p-0 h-auto hover:bg-transparent flex items-center space-x-2"
              onClick={toggleUserMenu}
            >
              <span className="text-white mr-2">{user?.username}</span>
              <Avatar className="h-10 w-10 border-2 border-blue-400">
                <AvatarFallback className="bg-blue-600 text-white">
                  {user?.username ? getInitials(user.username) : "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
            <LevelIndicator level={3} maxLevel={10} />
          </div>
          
          {isUserMenuOpen && (
            <UserMenu onClose={() => setIsUserMenuOpen(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
