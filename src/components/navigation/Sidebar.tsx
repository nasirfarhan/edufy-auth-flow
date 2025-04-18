
import { Calendar, Award, CheckSquare, FileText, Layers } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    { icon: Calendar, text: "Events", path: "/events" },
    { icon: FileText, text: "Resume", path: "/resume" },
    { icon: Award, text: "Achievement", path: "/achievements" },
    { icon: CheckSquare, text: "Completed", path: "/completed" },
    { icon: Layers, text: "Certificates", path: "/certificates" },
  ];

  return (
    <aside 
      className={`bg-[#172c3a] fixed h-screen w-64 transform transition-transform duration-300 ease-in-out z-10 
                 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-6">Menu</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center text-gray-300 hover:text-white p-2 rounded hover:bg-blue-900/30 transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
