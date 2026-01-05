import React from "react";

export default function Slide3() {
  return (
    <div className="slide slide-3">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <h1 className="main-title">
              Tipos de Conteúdo <span className="text-gray-500">que Importam</span>
            </h1>
            <p className="subtitle">O ecossistema de formatos do Instagram e o papel estratégico de cada um</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
            <i className="fas fa-layer-group text-gray-400 text-sm" />
            <span className="text-xs font-bold text-gray-300 uppercase">Mix de Conteúdo 2026</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="cards-container">
          <div className="row-top">
            {/* Reels */}
            <div className="format-card">
              <div className="card-accent-bar accent-reels" />
              <div className="card-header">
                <div className="icon-box accent-reels bg-opacity-10">
                  <i className="fas fa-video" />
                </div>
                <div>
                  <h3 className="card-title">Reels</h3>
                  <p className="text-xs text-gray-500">Vídeos Curtos</p>
                </div>
              </div>
              <div className="purpose-tag">
                <p>🚀 Alcance &amp; Descoberta</p>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-dot accent-reels" />
                  <p>Maior potencial viral para atrair novos seguidores.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-reels" />
                  <p>Cortes dinâmicos e áudio em alta.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-reels" />
                  <p>Legendas on-screen para retenção.</p>
                </li>
              </ul>
            </div>

            {/* Carrosséis */}
            <div className="format-card">
              <div className="card-accent-bar accent-carousel" />
              <div className="card-header">
                <div className="icon-box accent-carousel bg-opacity-10">
                  <i className="fas fa-images" />
                </div>
                <div>
                  <h3 className="card-title">Carrosséis</h3>
                  <p className="text-xs text-gray-500">Sequência de Imagens</p>
                </div>
              </div>
              <div className="purpose-tag">
                <p>📚 Educação &amp; Retenção</p>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-dot accent-carousel" />
                  <p>Formato #1 para salvamentos.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-carousel" />
                  <p>Aprofunda temas e gera autoridade.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-carousel" />
                  <p>Ideal para storytelling passo a passo.</p>
                </li>
              </ul>
            </div>

            {/* Foto Única */}
            <div className="format-card">
              <div className="card-accent-bar accent-photo" />
              <div className="card-header">
                <div className="icon-box accent-photo bg-opacity-10">
                  <i className="fas fa-camera" />
                </div>
                <div>
                  <h3 className="card-title">Foto Única</h3>
                  <p className="text-xs text-gray-500">Post Estático</p>
                </div>
              </div>
              <div className="purpose-tag">
                <p>✨ Branding &amp; Estética</p>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-dot accent-photo" />
                  <p>Reforça a identidade visual da marca.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-photo" />
                  <p>Editorial, lifestyle e inspiração rápida.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-photo" />
                  <p>Menor alcance, mas alto valor de vitrine.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row-bottom">
            {/* Stories */}
            <div className="format-card">
              <div className="card-accent-bar accent-stories" />
              <div className="card-header">
                <div className="icon-box accent-stories bg-opacity-10">
                  <i className="fas fa-history" />
                </div>
                <div>
                  <h3 className="card-title">Stories</h3>
                  <p className="text-xs text-gray-500">Conteúdo Efêmero</p>
                </div>
              </div>
              <div className="purpose-tag">
                <p>🤝 Relacionamento &amp; Venda</p>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-dot accent-stories" />
                  <p>Bastidores e conexão real sem filtro.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-stories" />
                  <p>Interatividade (Enquetes, Caixas de Pergunta).</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-stories" />
                  <p>Links diretos para conversão.</p>
                </li>
              </ul>
            </div>

            {/* Lives */}
            <div className="format-card">
              <div className="card-accent-bar accent-lives" />
              <div className="card-header">
                <div className="icon-box accent-lives bg-opacity-10">
                  <i className="fas fa-broadcast-tower" />
                </div>
                <div>
                  <h3 className="card-title">Lives</h3>
                  <p className="text-xs text-gray-500">Transmissão Ao Vivo</p>
                </div>
              </div>
              <div className="purpose-tag">
                <p>🔥 Conexão Profunda</p>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-dot accent-lives" />
                  <p>Q&amp;A, lançamentos e aulas ao vivo.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-lives" />
                  <p>Notifica seguidores quando inicia.</p>
                </li>
                <li className="feature-item">
                  <div className="feature-dot accent-lives" />
                  <p>Parcerias com convidados (Co-hosts).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
