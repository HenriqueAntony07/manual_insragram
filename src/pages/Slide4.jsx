import React from "react";

export default function Slide4() {
  return (
    <div className="slide slide-4">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <h1 className="main-title">
              Formatos que <span className="text-pink-500">Dominam</span> em 2026
            </h1>
            <p className="subtitle">Aposte nestes 5 pilares para maximizar sua distribuição orgânica</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
            <i className="fas fa-fire text-orange-500" />
            <span className="text-xs font-bold text-gray-300 uppercase">Top Trends</span>
          </div>
        </div>

        {/* Main Cards Grid */}
        <div className="cards-container">
          <div className="trend-card border-t-1">
            <div className="card-number">01</div>
            <div className="icon-container color-1">
              <i className="fas fa-stopwatch" />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                Reels Curtos
                <br />
                (7-12s)
              </h3>
              <p className="card-desc">
                Vídeos rápidos focados em retenção máxima. Gancho imediato e loop perfeito para aumentar views.
              </p>
            </div>
            <div className="card-footer">
              <span className="tip-label text-pink-500">Dica Prática</span>
              <p className="tip-text">Use áudios em alta e encerre com CTA rápido antes que o vídeo acabe.</p>
            </div>
          </div>

          <div className="trend-card border-t-2">
            <div className="card-number">02</div>
            <div className="icon-container color-2">
              <i className="fas fa-search" />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                Carrosséis
                <br />
                Search-Friendly
              </h3>
              <p className="card-desc">
                Conteúdo estruturado para ser encontrado na busca (SEO) e salvo para consulta posterior.
              </p>
            </div>
            <div className="card-footer">
              <span className="tip-label text-purple-500">Dica Prática</span>
              <p className="tip-text">Título com palavra-chave na capa + Alt Text descritivo em todas as fotos.</p>
            </div>
          </div>

          <div className="trend-card border-t-3">
            <div className="card-number">03</div>
            <div className="icon-container color-3">
              <i className="fas fa-users" />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                UGC &amp;
                <br />
                Prova Social
              </h3>
              <p className="card-desc">
                User Generated Content. Pessoas confiam em pessoas. Mostre sua comunidade usando seu produto.
              </p>
            </div>
            <div className="card-footer">
              <span className="tip-label text-yellow-500">Dica Prática</span>
              <p className="tip-text">Reposte stories de clientes e crie destaques de &quot;Depoimentos&quot;.</p>
            </div>
          </div>

          <div className="trend-card border-t-4">
            <div className="card-number">04</div>
            <div className="icon-container color-4">
              <i className="fas fa-book-open" />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                Conteúdo
                <br />
                Educativo
              </h3>
              <p className="card-desc">
                How-to, checklists e frameworks visuais. O formato ideal para gerar autoridade no nicho.
              </p>
            </div>
            <div className="card-footer">
              <span className="tip-label text-indigo-500">Dica Prática</span>
              <p className="tip-text">Resolva uma dor específica em 3 passos simples e visuais.</p>
            </div>
          </div>

          <div className="trend-card border-t-5">
            <div className="card-number">05</div>
            <div className="icon-container color-5">
              <i className="fas fa-video" />
            </div>
            <div className="card-content">
              <h3 className="card-title">
                Bastidores
                <br />
                Autênticos
              </h3>
              <p className="card-desc">
                A era &quot;sem filtro&quot;. Mostre processos, erros e decisões em tempo real para gerar conexão.
              </p>
            </div>
            <div className="card-footer">
              <span className="tip-label text-blue-500">Dica Prática</span>
              <p className="tip-text">Vlog curto no Stories ou Reels mostrando o &quot;making of&quot; do seu dia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
