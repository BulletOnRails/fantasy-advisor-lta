
import { Link } from "react-router-dom";
import { Trophy, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
            <Trophy className="h-8 w-8" />
            <div className="text-2xl font-bold">Fantasy LTA Advisor</div>
          </Link>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
                  <Trophy className="h-5 w-5" />
                  <span>Rankings</span>
                </Link>
              </li>
              <li>
                <Link to="/partidas" className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>Próximos Jogos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
