import React, { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string;
  timestamp?: Date;
}

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'system', content: 'WebDev Portugal Terminal v1.0.0' },
    { type: 'system', content: 'Digite "ajuda" para ver os comandos disponíveis.' },
    { type: 'system', content: '' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const demoCommands = [
    'const saudacao = "Olá, Portugal!";',
    'function criarWebsite() { return "Incrível"; }',
    'npm install react typescript',
    'git commit -m "Website fantástico criado"'
  ];

  const commands: Record<string, string> = {
    'ajuda': `Comandos disponíveis:
• ajuda - Mostra esta mensagem
• sobre - Informações sobre nós
• projetos - Lista os nossos projetos
• competencias - As nossas competências
• contacto - Como nos contactar
• limpar - Limpa o terminal`,
    'sobre': `WebDev Portugal - Especialistas em Desenvolvimento Web Moderno

Somos uma equipa dedicada ao desenvolvimento de soluções web inovadoras,
focando sempre na melhor experiência do utilizador e performance otimizada.`,
    'projetos': `Os Nossos Projetos Principais:
• E-commerce Moderno - Plataforma completa de vendas online
• Dashboard Analítico - Análise de dados em tempo real
• App Mobile Híbrida - Aplicação multiplataforma
• Sistema CRM - Gestão de relacionamento com clientes`,
    'competencias': `As Nossas Competências:
Frontend: React, TypeScript, Vue.js, Angular, Tailwind CSS
Backend: Node.js, Python, PostgreSQL, MongoDB
Ferramentas: Git, Docker, AWS
Design: Figma, UI/UX Design`,
    'contacto': `Entre em Contacto Connosco:
📧 Email: ola.webdevportugal@gmail.com
📱 Telefone: +351 925934270
🌐 Website: www.webdevportugal.pt
📍 Localização: Lisboa, Portugal`,
    'limpar': 'CLEAR_TERMINAL'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        setIsTyping(true);
        typeCommand(demoCommands[currentDemo]);
        setCurrentDemo((prev) => (prev + 1) % demoCommands.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentDemo, isTyping]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const typeCommand = async (command: string) => {
    setCurrentInput('');
    for (let i = 0; i <= command.length; i++) {
      setCurrentInput(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCurrentInput('');
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const newLines = [...lines];
    newLines.push({ type: 'input', content: `$ ${currentInput}`, timestamp: new Date() });

    const command = currentInput.toLowerCase().trim();
    if (commands[command]) {
      if (commands[command] === 'CLEAR_TERMINAL') {
        setLines([
          { type: 'system', content: 'WebDev Portugal Terminal v1.0.0' },
          { type: 'system', content: 'Digite "ajuda" para ver os comandos disponíveis.' },
          { type: 'system', content: '' }
        ]);
      } else {
        newLines.push({ type: 'output', content: commands[command] });
      }
    } else {
      newLines.push({ 
        type: 'output', 
        content: `Comando não reconhecido: ${currentInput}. Digite "ajuda" para ver os comandos disponíveis.` 
      });
    }

    if (commands[command] !== 'CLEAR_TERMINAL') {
      newLines.push({ type: 'system', content: '' });
      setLines(newLines);
    }
    setCurrentInput('');
  };

  return (
    <div className="bg-terminal-bg text-terminal-text font-mono text-sm rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-gray-400">WebDev Portugal Terminal</div>
        <div className="w-16"></div>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'input' && (
              <div className="text-terminal-green">{line.content}</div>
            )}
            {line.type === 'output' && (
              <div className="text-terminal-text whitespace-pre-line pl-2">
                {line.content}
              </div>
            )}
            {line.type === 'system' && (
              <div className="text-terminal-blue">{line.content}</div>
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-terminal-green mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={isTyping ? currentInput : currentInput}
            onChange={(e) => !isTyping && setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-terminal-text"
            placeholder={isTyping ? '' : 'Digite um comando...'}
            disabled={isTyping}
          />
          <span className="terminal-cursor"></span>
        </form>
      </div>
    </div>
  );
};

export default Terminal;