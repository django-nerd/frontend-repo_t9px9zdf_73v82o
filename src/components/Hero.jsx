import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs backdrop-blur border border-white/10 mb-4">
          Clean • Minimal • Fintech
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-sm">
          Budget your money with clarity
        </h1>
        <p className="mt-4 text-blue-200/90 text-base md:text-lg">
          Track income and expenses, set monthly limits, and stay on top of your goals.
        </p>
      </div>
    </section>
  );
}

export default Hero;
