import React from "react";

export default function Slide8() {
  return (
    <div className="slide slide-8">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <h1 className="main-title">
              Engajamento &amp; <span className="text-white">Métricas</span>
            </h1>
            <p className="subtitle">Analise o que importa: qualidade acima de vaidade</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
            <i className="fas fa-chart-line text-green-400" />
            <span className="text-xs font-bold text-gray-300 uppercase">Performance KPI</span>
          </div>
        </div>

        {/* Grid */}
        <div className="metrics-grid">
          <div className="metric-card theme-reels">
            <div className="card-header">
              <div className="icon-box">
                <i className="fas fa-play-circle" />
              </div>
              <div className="card-title-group">
                <span>Alcance &amp; Viralidade</span>
                <h3>Reels</h3>
              </div>
            </div>
            <div className="kpi-section">
              <span className="kpi-label">KPIs Prioritários</span>
              <ul className="kpi-list">
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-eye" /> Retenção (3s)
                  </span>
                  <span className="kpi-value">&gt; 35%</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-percentage" /> Conclusão
                  </span>
                  <span className="kpi-value">Média Alta</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-share" /> Compartilhamentos
                  </span>
                  <span className="kpi-value">Viral</span>
                </li>
              </ul>
            </div>
            <div className="action-box">
              <i className="fas fa-bolt action-icon" />
              <div className="action-content">
                <h4>Ação Rápida</h4>
                <p>Otimize o Hook visual e textual nos primeiros 3 segundos. Adicione legenda dinâmica.</p>
              </div>
            </div>
          </div>

          <div className="metric-card theme-carousel">
            <div className="card-header">
              <div className="icon-box">
                <i className="fas fa-images" />
              </div>
              <div className="card-title-group">
                <span>Educação &amp; Valor</span>
                <h3>Carrosséis</h3>
              </div>
            </div>
            <div className="kpi-section">
              <span className="kpi-label">KPIs Prioritários</span>
              <ul className="kpi-list">
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-bookmark" /> Salvamentos
                  </span>
                  <span className="kpi-value">Ouro</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-hand-pointer" /> Navegação
                  </span>
                  <span className="kpi-value">Scroll até fim</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-clock" /> Tempo de Tela
                  </span>
                  <span className="kpi-value">Alto</span>
                </li>
              </ul>
            </div>
            <div className="action-box">
              <i className="fas fa-lightbulb action-icon" />
              <div className="action-content">
                <h4>Ação Rápida</h4>
                <p>Esconda uma dica extra ou bônus no penúltimo slide para forçar a navegação completa.</p>
              </div>
            </div>
          </div>

          <div className="metric-card theme-stories">
            <div className="card-header">
              <div className="icon-box">
                <i className="fas fa-history" />
              </div>
              <div className="card-title-group">
                <span>Relacionamento</span>
                <h3>Stories</h3>
              </div>
            </div>
            <div className="kpi-section">
              <span className="kpi-label">KPIs Prioritários</span>
              <ul className="kpi-list">
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-reply" /> Respostas (DM)
                  </span>
                  <span className="kpi-value">Conexão</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-forward" /> Taxa de Saída
                  </span>
                  <span className="kpi-value">Baixa</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-fingerprint" /> Toques em Sticker
                  </span>
                  <span className="kpi-value">Interação</span>
                </li>
              </ul>
            </div>
            <div className="action-box">
              <i className="fas fa-comment-dots action-icon" />
              <div className="action-content">
                <h4>Ação Rápida</h4>
                <p>Comece o dia com uma enquete simples &quot;Sim/Não&quot; para aquecer o algoritmo dos stories.</p>
              </div>
            </div>
          </div>

          <div className="metric-card theme-posts">
            <div className="card-header">
              <div className="icon-box">
                <i className="fas fa-image" />
              </div>
              <div className="card-title-group">
                <span>Branding &amp; Estética</span>
                <h3>Post Único</h3>
              </div>
            </div>
            <div className="kpi-section">
              <span className="kpi-label">KPIs Prioritários</span>
              <ul className="kpi-list">
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-comments" /> Comentários
                  </span>
                  <span className="kpi-value">Conversa</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-user-plus" /> Visitas ao Perfil
                  </span>
                  <span className="kpi-value">Interesse</span>
                </li>
                <li className="kpi-item">
                  <span className="kpi-name">
                    <i className="fas fa-chart-bar" /> Taxa de Engajamento
                  </span>
                  <span className="kpi-value">Estável</span>
                </li>
              </ul>
            </div>
            <div className="action-box">
              <i className="fas fa-question-circle action-icon" />
              <div className="action-content">
                <h4>Ação Rápida</h4>
                <p>Faça uma pergunta aberta e curta na legenda. Responda os comentários em até 1h.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
