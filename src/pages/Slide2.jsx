import React from "react";

export default function Slide2() {
  return (
    <div className="slide slide-2">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <p className="text-accent font-bold text-sm tracking-widest mb-2 uppercase">Core Update</p>
            <h1 className="main-title">Entendendo o Algoritmo 2026</h1>
          </div>
          <div className="subtitle-pill">
            <i className="fas fa-sync-alt mr-2" /> Atualizado
          </div>
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="priority-card">
            <div className="section-header">
              <div className="icon-circle bg-purple-900 text-purple-300">
                <i className="fas fa-signal" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sinais de Ranking</p>
                <h2 className="text-2xl font-bold text-white">O que o Algoritmo Prioriza?</h2>
              </div>
            </div>

            <div className="priority-list">
              <div className="priority-item">
                <div className="priority-number">1</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Retenção Extrema</h3>
                  <p className="text-gray-400 text-sm">
                    Tempo de exibição, repetições (loops) e taxa de conclusão em vídeos.
                  </p>
                </div>
              </div>

              <div className="priority-item">
                <div className="priority-number">2</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Interação Profunda</h3>
                  <p className="text-gray-400 text-sm">
                    Salvamentos, compartilhamentos via DM e comentários com mais de 4 palavras.
                  </p>
                </div>
              </div>

              <div className="priority-item">
                <div className="priority-number">3</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Micro-Engajamentos</h3>
                  <p className="text-gray-400 text-sm">
                    Toques para &quot;ver mais&quot; na legenda, deslizar no carrossel e visitar o perfil.
                  </p>
                </div>
              </div>

              <div className="priority-item">
                <div className="priority-number">4</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Velocity</h3>
                  <p className="text-gray-400 text-sm">
                    Engajamento rápido nas primeiras 2 horas após a publicação define o potencial viral.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-col">
            <div className="status-card card-dos">
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-green-500 text-xl mr-3" />
                <h3 className="text-white font-bold text-lg">Boas Práticas</h3>
              </div>

              <div className="bullet-point">
                <i className="fas fa-check text-green-500 bullet-icon" />
                <p>
                  <strong>Consistência Híbrida:</strong> 3–5 posts/semana misturando Reels (alcance) e Carrosséis (valor).
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-check text-green-500 bullet-icon" />
                <p>
                  <strong>Hooks Visuais:</strong> Capture a atenção em 0–3s com movimento ou texto grande.
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-check text-green-500 bullet-icon" />
                <p>
                  <strong>SEO Nativo:</strong> Palavras-chave no nome do perfil, legenda e Alt Text.
                </p>
              </div>
            </div>

            <div className="status-card card-donts">
              <div className="flex items-center mb-4">
                <i className="fas fa-times-circle text-red-500 text-xl mr-3" />
                <h3 className="text-white font-bold text-lg">O que Penaliza</h3>
              </div>

              <div className="bullet-point">
                <i className="fas fa-times text-red-500 bullet-icon" />
                <p>
                  <strong>Engagement Bait:</strong> Pedir likes ou comentários de forma artificial (&quot;digite SIM&quot;).
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-times text-red-500 bullet-icon" />
                <p>
                  <strong>Reposts com Marca D&apos;água:</strong> Conteúdo reciclado do TikTok reduz o alcance.
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-times text-red-500 bullet-icon" />
                <p>
                  <strong>Baixa Qualidade:</strong> Vídeos borrados ou áudio ruim são ignorados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
