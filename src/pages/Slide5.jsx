import React from "react";

export default function Slide5() {
  return (
    <div className="slide slide-5">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <h1 className="main-title">
              Estratégia de <span className="text-accent">Legendas</span>
            </h1>
            <p className="subtitle">A fórmula para reter a atenção e converter em 2026</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
            <i className="fas fa-pen-nib text-gray-400" />
            <span className="text-xs font-bold text-gray-300 uppercase">Copywriting</span>
          </div>
        </div>

        <div className="content-grid">
          {/* Left: Formula */}
          <div className="formula-container">
            <div className="formula-line" />

            <div className="formula-card">
              <div className="step-icon color-hook">
                <i className="fas fa-bolt" />
              </div>
              <div className="step-content">
                <h3 className="step-title">1. O Gancho (Hook)</h3>
                <p className="step-desc">
                  A primeira frase é tudo. Use uma pergunta, um dado chocante ou promessa forte para parar o scroll.
                </p>
              </div>
            </div>

            <div className="formula-card">
              <div className="step-icon color-context">
                <i className="fas fa-align-left" />
              </div>
              <div className="step-content">
                <h3 className="step-title">2. Contexto &amp; História</h3>
                <p className="step-desc">
                  Gere conexão imediata. Explique o &quot;porquê&quot; ou relate uma situação comum (dor) do seu público.
                </p>
              </div>
            </div>

            <div className="formula-card">
              <div className="step-icon color-value">
                <i className="fas fa-list-ul" />
              </div>
              <div className="step-content">
                <h3 className="step-title">3. Entrega de Valor</h3>
                <p className="step-desc">
                  O conteúdo principal. Use listas (bullets), emojis e parágrafos curtos para facilitar a leitura.
                </p>
              </div>
            </div>

            <div className="formula-card">
              <div className="step-icon color-cta">
                <i className="fas fa-bullhorn" />
              </div>
              <div className="step-content">
                <h3 className="step-title">4. Call to Action (CTA)</h3>
                <p className="step-desc">
                  Uma única ação clara. &quot;Salve para consultar depois&quot; ou &quot;Comente sua dúvida abaixo&quot;.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tips */}
          <div className="right-col">
            <div className="info-box flex-grow">
              <h3 className="box-title">
                <i className="fas fa-lightbulb text-yellow-500 mr-3" />
                Dicas de Ouro
              </h3>
              <ul className="tips-list">
                <li className="tip-item">
                  <i className="fas fa-check-circle text-green-500" />
                  <p>
                    <strong>SEO Nativo:</strong> Inclua palavras-chave do nicho naturalmente no texto.
                  </p>
                </li>
                <li className="tip-item">
                  <i className="fas fa-check-circle text-green-500" />
                  <p>
                    <strong>Escaneabilidade:</strong> Quebre o texto a cada 2 frases. Blocos grandes são ignorados.
                  </p>
                </li>
                <li className="tip-item">
                  <i className="fas fa-check-circle text-green-500" />
                  <p>
                    <strong>Hashtags:</strong> Use 3 a 5 tags específicas no final da legenda, não misture no meio.
                  </p>
                </li>
                <li className="tip-item">
                  <i className="fas fa-check-circle text-green-500" />
                  <p>
                    <strong>Emojis:</strong> Use como marcadores visuais, não para substituir palavras.
                  </p>
                </li>
              </ul>
            </div>

            <div className="info-box">
              <h3 className="box-title">
                <i className="fas fa-ruler-horizontal text-blue-400 mr-3" />
                Tamanho Ideal
              </h3>
              <div className="length-bar">
                <div className="length-option">
                  <span className="length-title">Micro (Reels)</span>
                  <span className="length-desc">1-2 linhas + CTA</span>
                </div>
                <div className="length-option">
                  <span className="length-title">Longa (Valor)</span>
                  <span className="length-desc">Até 2.200 caracteres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
