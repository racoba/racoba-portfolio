'use client';

import { useState } from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import { TimeLineCard } from './TimeLineCard';

const steps = [
  { title: 'Início', description: 'Começamos o projeto em Janeiro 2023' },
  { title: 'Planejamento', description: 'Definimos as estratégias' },
  { title: 'Execução', description: 'Implementamos o plano' },
  { title: 'Entrega', description: 'Concluímos o projeto' },
  { title: 'Expansão', description: 'Começamos novos projetos' },
  { title: 'Análise', description: 'Avaliamos os resultados' },
  { title: 'Melhorias', description: 'Ajustamos para escalar' },
  { title: 'Melhorias', description: 'Ajustamos para escalar' },
  { title: 'Melhorias', description: 'Ajustamos para escalar' },
  { title: 'Melhorias', description: 'Ajustamos para escalar' },
  { title: 'Melhorias', description: 'Ajustamos para escalar' },
  { title: 'Melhorias', description: 'Ajustamos para escalar' },
  { title: 'Internacionalização', description: 'Expandimos globalmente' },
];

export const TimeLine = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col w-full xl:w-4/5 mx-auto overflow-x-auto py-16 scroll-hidden">
      <div className="relative flex items-center gap-20 min-w-max h-50">
        <div className="absolute top-12 left-0 right-0 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2 z-0" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center z-10 group min-h-[200px]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Ícone */}
            <div
              className={`flex items-center justify-center bg-white min-w-24 w-24 h-24 rounded-2xl shadow-md transition-all duration-300 ${hoveredIndex === index ? '-translate-y-2' : ''
                }`}
            >
              <FlagIcon style={{ width: 48, height: 48 }} className="text-gray-800" />
            </div>

            {/* Card agora é absoluto */}
            <div className="relative w-full">
              <div
                className={`absolute top-full mt-2 transition-all duration-300
                ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                ${index === 0
                    ? 'left-0'
                    : index === steps.length - 1
                      ? 'right-0'
                      : 'left-1/2 -translate-x-1/2'
                  }
              `}
              >
                {hoveredIndex === index && (
                  <TimeLineCard title={step.title} description={step.description} />
                )}
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};
