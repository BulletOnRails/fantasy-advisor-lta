
import { Trophy } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-lta-blue to-lta-purple py-8 px-4 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <Trophy size={40} />
          <h1 className="text-4xl font-bold">Fantasy LTA Advisor</h1>
        </div>
        <p className="text-xl max-w-2xl text-center">
          Recomendações de escalações para o LTA Fantasy. Escolha os melhores
          jogadores para sua equipe e domine a liga!
        </p>
      </div>
    </header>
  );
};

export default Header;
