function createFuelConsumptionGraph() {
    // Example data
    const speeds = [6, 7, 8, 9, 10, 11, 12, 13, 14];
    const focMe = [30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000];
    const focMePlus10 = [33000, 38500, 44000, 49500, 55000, 66000, 77000, 88000, 99000];
    const focAe = [28000, 32500, 37000, 41500, 46000, 55000, 64000, 73000, 82000];
    const focAePlus3 = [28840, 33475, 38110, 42745, 47380, 56650, 65920, 75190, 84460];
  
    const data = [
      {
        x: speeds,
        y: focMe,
        mode: 'lines+markers',
        name: 'FOC ME',
        line: { color: 'blue' }
      },
      {
        x: speeds,
        y: focMePlus10,
        mode: 'lines+markers',
        name: 'ME + 10% margin',
        line: { color: 'red' }
      },
      {
        x: speeds,
        y: focAe,
        mode: 'lines+markers',
        name: 'FOC AE',
        line: { color: 'green' }
      },
      {
        x: speeds,
        y: focAePlus3,
        mode: 'lines+markers',
        name: 'AE + 3% margin',
        line: { color: 'orange' }
      }
    ];
  
    const layout = {
      title: 'FOC (litre) per Vs',
      xaxis: { title: 'Service Speed (Knot)' },
      yaxis: { title: 'FOC (litre)' }
    };
  
    Plotly.newPlot('fuel-consumption-graph', data, layout);
  }
  
  document.addEventListener('DOMContentLoaded', createFuelConsumptionGraph);
  