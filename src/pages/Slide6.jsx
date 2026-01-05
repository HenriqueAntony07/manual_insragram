import React from "react";

export default function Slide6() {
  return (
    <div className="slide slide-6">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <p className="text-accent font-bold text-sm tracking-widest mb-2 uppercase">Estratégia de Alcance</p>
            <h1 className="main-title">Hashtags em 2026: Menos é Mais</h1>
          </div>
          <div className="subtitle-pill">
            <i className="fas fa-hashtag mr-2" /> SEO &amp; Discovery
          </div>
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Left */}
          <div className="priority-card">
            <div className="section-header">
              <div className="icon-circle bg-pink-900 text-pink-300">
                <i className="fas fa-search" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">A Regra de Ouro</p>
                <h2 className="text-2xl font-bold text-white">Estratégia 3–5 Tags</h2>
              </div>
            </div>

            <div className="priority-list">
              <div className="priority-item">
                <div className="priority-number">1</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Tags de Nicho (Específicas)</h3>
                  <p className="text-gray-400 text-sm">
                    Use 1-2 tags super específicas do seu tema. Ex: #CeramicaArtesanal em vez de #Arte.
                  </p>
                </div>
              </div>

              <div className="priority-item">
                <div className="priority-number">2</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Tags de Marca (Branded)</h3>
                  <p className="text-gray-400 text-sm">
                    Crie e use sua tag própria para agrupar conteúdo. Ex: #SuaMarcaInspira.
                  </p>
                </div>
              </div>

              <div className="priority-item">
                <div className="priority-number">3</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Tags de Local/Atributo</h3>
                  <p className="text-gray-400 text-sm">
                    Se relevante, use geolocalização ou atributo chave. Ex: #SaoPaulo ou #Vegano.
                  </p>
                </div>
              </div>

              <div className="priority-item">
                <div className="priority-number">4</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">SEO Integrado</h3>
                  <p className="text-gray-400 text-sm">
                    Combine com palavras-chave na legenda. O algoritmo lê o contexto, não só a tag.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="right-col">
            <div className="status-card card-dos">
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-green-500 text-xl mr-3" />
                <h3 className="text-white font-bold text-lg">Boas Práticas</h3>
              </div>

              <div className="bullet-point">
                <i className="fas fa-check text-green-500 bullet-icon" />
                <p>
                  <strong>Posicionamento:</strong> Final da legenda (para SEO) ou primeiro comentário (estética) funcionam igual.
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-check text-green-500 bullet-icon" />
                <p>
                  <strong>Relevância Total:</strong> A tag deve descrever EXATAMENTE o que está na imagem/vídeo.
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-check text-green-500 bullet-icon" />
                <p>
                  <strong>Variedade:</strong> Alterne os grupos de tags. Não copie e cole sempre o mesmo bloco.
                </p>
              </div>
            </div>

            <div className="status-card card-donts">
              <div className="flex items-center mb-4">
                <i className="fas fa-times-circle text-red-500 text-xl mr-3" />
                <h3 className="text-white font-bold text-lg">O que Evitar</h3>
              </div>

              <div className="bullet-point">
                <i className="fas fa-times text-red-500 bullet-icon" />
                <p>
                  <strong>Tags Genéricas:</strong> #instagood, #love, #happy trazem bots, não clientes.
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-times text-red-500 bullet-icon" />
                <p>
                  <strong>Spam de Tags:</strong> Usar 20–30 tags confunde o algoritmo sobre o tema real do post.
                </p>
              </div>
              <div className="bullet-point">
                <i className="fas fa-times text-red-500 bullet-icon" />
                <p>
                  <strong>Tags Banidas:</strong> Verifique se a tag não está oculta pelo Instagram (shadowban).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
