
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold mb-2">Fantasy LTA Advisor</p>
            <p className="text-sm text-gray-400">
              Recomendações baseadas em estatísticas atualizadas
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-800">
              <a href="https://ltafantasy.com/pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                LTA Fantasy <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-800">
              <a href="https://clubedojava.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Clube do Java <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="mb-2">Fantasy LTA Advisor © 2025</p>
          <p className="text-sm text-gray-400">
            Clubedojava.com.br/LTA | Não afiliado oficialmente com LTA Fantasy
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Dados atualizados manualmente. Para integração automática, entre em contato.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
