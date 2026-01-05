import React from "react";
import { Link } from "react-router-dom";

export default function Slide1() {
  return (
    <div className="slide slide-1">
      <div className="slide-container">
        {/* Background Elements */}
        <div className="blob blob-purple" />
        <div className="blob blob-pink" />
        <div className="blob blob-orange" />

        {/* Main Content Card */}
        <div className="main-card flex flex-col items-center">
          {/* Brand Icon */}
          <div className="brand-icon-box">
            <i className="fab fa-instagram text-5xl" style={{ color: "#E1306C" }} />
          </div>

          {/* Meta Info */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-gray-800 text-gray-300 text-xs font-bold px-3 py-1 rounded-full border border-gray-700 uppercase tracking-wide">
              Atualizado 2026
            </span>
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">
              Guia Oficial de Estratégia
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-black text-white mb-6">
            Manual de Posts
            <br />
            <span className="accent-text">para Instagram</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
            Domine o algoritmo e crie conteúdos que geram{" "}
            <span className="text-white font-semibold">alcance</span>,{" "}
            <span className="text-white font-semibold">salvamentos</span> e{" "}
            <span className="text-white font-semibold">conversões</span> reais.
          </p>

          {/* Feature Grid (clicável -> rotas) */}
          <div className="grid grid-cols-4 gap-4 w-full border-t border-gray-700 pt-8">
            <Link to="/algoritmo" className="feature-pill p-4 rounded-xl flex flex-col items-center justify-center">
              <i className="fas fa-robot text-purple-400 mb-2 text-lg" />
              <p className="text-gray-400 text-xs uppercase font-bold">Entenda o</p>
              <p className="text-white font-bold text-sm">Algoritmo</p>
            </Link>

            <Link to="/formatos" className="feature-pill p-4 rounded-xl flex flex-col items-center justify-center">
              <i className="fas fa-layer-group text-pink-400 mb-2 text-lg" />
              <p className="text-gray-400 text-xs uppercase font-bold">Formatos</p>
              <p className="text-white font-bold text-sm">Vencedores</p>
            </Link>

            <Link to="/legendas" className="feature-pill p-4 rounded-xl flex flex-col items-center justify-center">
              <i className="fas fa-pen-nib text-orange-400 mb-2 text-lg" />
              <p className="text-gray-400 text-xs uppercase font-bold">Legendas</p>
              <p className="text-white font-bold text-sm">Que Engajam</p>
            </Link>

            <Link to="/metricas" className="feature-pill p-4 rounded-xl flex flex-col items-center justify-center">
              <i className="fas fa-chart-bar text-blue-400 mb-2 text-lg" />
              <p className="text-gray-400 text-xs uppercase font-bold">Growth</p>
              <p className="text-white font-bold text-sm">Métricas</p>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 w-full text-center z-20">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-widest">
            Para Criadores • Social Media • Marcas
          </p>
        </div>
      </div>
    </div>
  );
}
