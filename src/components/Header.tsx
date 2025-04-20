// src/components/Header.tsx

import React from 'react';

/**
 * Props para o componente Header.
 * Define as propriedades esperadas pelo componente.
 */
interface HeaderProps {
  siteTitle: string; // O título do site/portfólio a ser exibido.
}

/**
 * Componente de Cabeçalho (Header).
 * Exibe o título do site. Pode ser expandido para incluir navegação.
 * @param {HeaderProps} props - As propriedades do componente.
 * @param {string} props.siteTitle - O título do site/portfólio.
 * @returns {JSX.Element} O elemento JSX do cabeçalho.
 */
const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{siteTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
