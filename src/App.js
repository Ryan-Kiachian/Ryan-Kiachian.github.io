import React from "react";

function App() {
  const githubBase = "https://raw.githubusercontent.com/Ryan-Kiachian/ryan-portfolio/main/images";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 bg-gray-100 border-b shadow">
        <h1 className="text-4xl font-bold">Ryan Kiachian</h1>
        <p className="text-lg mt-1">Mechanical Engineer · Cornell · D1 Basketball</p>
        <a href="/resume.pdf" target="_blank" className="text-blue-600 underline mt-2 block">Download Resume</a>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-16">
        <section>
          <h2 className="text-2xl font-bold">💧 Water Pump Design</h2>
          <p>Designed and built a 4-cylinder piston pump using lathes, mills, and custom crankshaft. Achieved 15.7 L/min at 80% efficiency.</p>
          <img src={`${githubBase}/waterpump.png`} alt="Water Pump" className="mt-3 rounded shadow" />
        </section>

        <section>
          <h2 className="text-2xl font-bold">🔥 Engine PV Diagram</h2>
          <p>Plotted real forklift engine PV data in MATLAB. Compared pressure vs. volume to theoretical cycles using air-standard assumptions.</p>
          <img src={`${githubBase}/pvdiagram.png`} alt="PV Diagram" className="mt-3 rounded shadow" />
        </section>

        <section>
          <h2 className="text-2xl font-bold">🌪 Wind Turbine Blade Optimization</h2>
          <p>Optimized pitch/chord design using BEM code, selected NACA 4412, tested in wind tunnel. Improved energy capture by 30% in theory.</p>
          <img src={`${githubBase}/blade.png`} alt="Blade" className="mt-3 rounded shadow" />
        </section>

        <section>
          <h2 className="text-2xl font-bold">🤖 Autonomous Robot</h2>
          <p>Built Arduino robot to detect zones and collect blocks autonomously. Used QTI + light sensors. Programmed in C using logic trees.</p>
          <img src={`${githubBase}/robot.png`} alt="Robot" className="mt-3 rounded shadow" />
        </section>

        <section>
          <h2 className="text-2xl font-bold">✈️ Turbofan Performance Map</h2>
          <p>Used MATLAB to analyze how bypass ratio & Mach number affect thrust and fuel use. Plotted SFC/ST curves and optimized for range.</p>
          <img src={`${githubBase}/turbofan.png`} alt="Turbofan" className="mt-3 rounded shadow" />
        </section>

        <section>
          <h2 className="text-2xl font-bold">🚀 Jet Propulsion Thermodynamics</h2>
          <p>Built MATLAB thermodynamic model of an ideal turbofan cycle. Calculated stagnation states, nozzle velocities, and efficiencies.</p>
          <img src={`${githubBase}/propulsion.png`} alt="Propulsion" className="mt-3 rounded shadow" />
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © 2025 Ryan Kiachian · Portfolio
      </footer>
    </div>
  );
}

export default App;
