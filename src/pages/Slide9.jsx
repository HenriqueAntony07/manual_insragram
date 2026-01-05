import React from "react";

export default function Slide9() {
  return (
    <div className="slide slide-9">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <h1 className="main-title">
              Checklist Prático <span className="text-green-400">Final</span>
            </h1>
            <p className="subtitle">O passo a passo para garantir qualidade antes de apertar &quot;Publicar&quot;</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
            <i className="fas fa-tasks text-gray-400" />
            <span className="text-xs font-bold text-gray-300 uppercase">Workflow</span>
          </div>
        </div>

        <div className="checklist-wrapper">
          {/* Phase 1 */}
          <div className="phase-card theme-blue">
            <div className="phase-number">01</div>
            <div className="phase-header">
              <div className="phase-icon-circle">
                <i className="fas fa-brain" />
              </div>
              <h3 className="phase-title">Antes de Criar</h3>
            </div>
            <div className="checklist-content">
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Objetivo Definido</strong>Venda, Alcance ou Conexão?
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Gancho (Hook)</strong>A promessa dos 3s está clara?
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Referência Visual</strong>Qual estética vou seguir?
                </p>
              </div>
            </div>
            <div className="footer-note">
              <i className="fas fa-info-circle mr-1" /> Planejamento é 80% do sucesso
            </div>
          </div>

          {/* Phase 2 */}
          <div className="phase-card theme-purple">
            <div className="phase-number">02</div>
            <div className="phase-header">
              <div className="phase-icon-circle">
                <i className="fas fa-photo-video" />
              </div>
              <h3 className="phase-title">Produção</h3>
            </div>
            <div className="checklist-content">
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Qualidade Técnica</strong>Luz, áudio limpo e nitidez.
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Identidade Visual</strong>Cores e fontes da marca.
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Capa / Thumb</strong>Título legível no grid (1:1).
                </p>
              </div>
            </div>
            <div className="footer-note">
              <i className="fas fa-eye mr-1" /> Visual retém atenção
            </div>
          </div>

          {/* Phase 3 */}
          <div className="phase-card theme-pink">
            <div className="phase-number">03</div>
            <div className="phase-header">
              <div className="phase-icon-circle">
                <i className="fas fa-sliders-h" />
              </div>
              <h3 className="phase-title">Otimização</h3>
            </div>
            <div className="checklist-content">
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Legenda &amp; CTA</strong>Texto escaneável + ação final.
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>SEO &amp; Tags</strong>3-5 hashtags + Alt Text.
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Marcações</strong>Localização e Colabs.
                </p>
              </div>
            </div>
            <div className="footer-note">
              <i className="fas fa-search mr-1" /> Ajude o algoritmo
            </div>
          </div>

          {/* Phase 4 */}
          <div className="phase-card theme-orange">
            <div className="phase-number">04</div>
            <div className="phase-header">
              <div className="phase-icon-circle">
                <i className="fas fa-rocket" />
              </div>
              <h3 className="phase-title">Lançamento</h3>
            </div>
            <div className="checklist-content">
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Horário de Pico</strong>Postar na janela ideal.
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Interação (1h)</strong>Responder todos comentários.
                </p>
              </div>
              <div className="check-item">
                <div className="check-box">
                  <i className="fas fa-check" />
                </div>
                <p className="item-text">
                  <strong>Amplificação</strong>Stories com link/sticker.
                </p>
              </div>
            </div>
            <div className="footer-note">
              <i className="fas fa-fire mr-1" /> Engajamento gera alcance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
