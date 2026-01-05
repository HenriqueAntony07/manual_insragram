import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function Slide7() {
  const chartRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    instanceRef.current = chart;

    // Days (X) vs Time of Day (Y)
    // Days: Seg(0), Ter(1), Qua(2), Qui(3), Sex(4), Sáb(5), Dom(6)
    // Times: Manhã(0), Tarde(1), Noite(2)
    // Value: 0-10 intensity
    let data = [
      [0, 0, 4], [0, 1, 5], [0, 2, 6],
      [1, 0, 5], [1, 1, 7], [1, 2, 9],
      [2, 0, 5], [2, 1, 8], [2, 2, 9],
      [3, 0, 5], [3, 1, 7], [3, 2, 8],
      [4, 0, 4], [4, 1, 6], [4, 2, 5],
      [5, 0, 2], [5, 1, 4], [5, 2, 3],
      [6, 0, 2], [6, 1, 3], [6, 2, 7],
    ].map((item) => [item[0], item[1], item[2] ?? "-"]);

    const option = {
      tooltip: {
        position: "top",
        formatter: (params) => `Intensidade: ${params.data[2]}/10`,
      },
      grid: {
        height: "70%",
        top: "10%",
        left: "10%",
        right: "5%",
      },
      xAxis: {
        type: "category",
        data: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        splitArea: {
          show: true,
          areaStyle: { color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"] },
        },
        axisLabel: { color: "#9CA3AF", fontFamily: "Montserrat" },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: "category",
        data: ["Manhã", "Tarde", "Noite"],
        splitArea: { show: true },
        axisLabel: { color: "#9CA3AF", fontFamily: "Montserrat" },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      visualMap: {
        min: 0,
        max: 10,
        calculable: false,
        orient: "horizontal",
        left: "center",
        bottom: "0%",
        show: false,
        inRange: {
          color: ["#1f1f1f", "#402a3a", "#833AB4", "#E1306C", "#FCAF45"],
        },
      },
      series: [
        {
          name: "Engajamento",
          type: "heatmap",
          data,
          label: { show: false },
          itemStyle: {
            borderRadius: 6,
            borderColor: "#2d2d2d",
            borderWidth: 2,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    chart.setOption(option);

    function onResize() {
      chart.resize();
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      chart.dispose();
      instanceRef.current = null;
    };
  }, []);

  return (
    <div className="slide slide-7">
      <div className="slide-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Header */}
        <div className="header-section">
          <div>
            <h1 className="main-title">
              Melhores Horários <span className="text-gray-500">2026</span>
            </h1>
            <p className="subtitle">Maximizando o &quot;Velocity&quot; (engajamento inicial) das suas publicações</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
            <i className="fas fa-clock text-gray-400" />
            <span className="text-xs font-bold text-gray-300 uppercase">Timing Strategy</span>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Left Column */}
          <div className="left-col">
            <div className="timeline-container">
              <div className="timeline-line" />

              <div className="time-card">
                <div className="time-dot dot-morning" />
                <div className="card-header">
                  <i className="fas fa-coffee time-icon text-morning" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Início do Dia</span>
                </div>
                <h3 className="time-range">08h – 09h</h3>
                <p className="time-desc">
                  Horário de deslocamento e início do trabalho. Ideal para conteúdo inspiracional e notícias rápidas.
                </p>
              </div>

              <div className="time-card">
                <div className="time-dot dot-lunch" />
                <div className="card-header">
                  <i className="fas fa-utensils time-icon text-lunch" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Pausa Almoço</span>
                </div>
                <h3 className="time-range">12h – 13h</h3>
                <p className="time-desc">
                  Pico de atividade móvel. Ótimo para Stories interativos e Reels de entretenimento.
                </p>
              </div>

              <div className="time-card">
                <div className="time-dot dot-night" />
                <div className="card-header">
                  <i className="fas fa-moon time-icon text-night" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Noite / Relax</span>
                </div>
                <h3 className="time-range">18h – 20h</h3>
                <p className="time-desc">
                  Janela de maior retenção. Momento perfeito para Carrosséis educativos e Lives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-col">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Intensidade de Engajamento Semanal</h3>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-dot" style={{ backgroundColor: "#333" }} />
                    <p>Baixo</p>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot" style={{ backgroundColor: "#833AB4" }} />
                    <p>Alto</p>
                  </div>
                </div>
              </div>

              <div ref={chartRef} className="heatmapChart" />
            </div>

            <div className="insights-box">
              <div className="insight-icon">
                <i className="fas fa-chart-bar" />
              </div>
              <div className="insight-text">
                <h4>Personalize com seus Dados</h4>
                <p>
                  Não confie apenas em médias globais. Vá em{" "}
                  <strong>Painel Profissional &gt; Total de Seguidores &gt; Períodos mais ativos</strong> e descubra sua
                  janela de ouro específica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
