import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Actions from './components/Actions';

const API = import.meta.env.VITE_BACKEND_URL || '';

function App() {
  const [summary, setSummary] = useState({ income: 0, expenses: 0, balance: 0 });
  const [month, setMonth] = useState(() => new Date().toISOString().slice(0, 7));
  const [loading, setLoading] = useState(false);

  const loadSummary = async (m) => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/summary?month=${encodeURIComponent(m)}`);
      const data = await res.json();
      setSummary(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSummary(month);
  }, [month]);

  const addTransaction = async ({ amount, type, note }) => {
    try {
      await fetch(`${API}/api/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, type, note, date: new Date().toISOString() }),
      });
      loadSummary(month);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-xl text-blue-200">This month</h2>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-blue-100"
          />
        </div>
      </div>
      <Stats data={summary} />
      <Actions onAdd={addTransaction} />
      {loading && (
        <div className="text-center text-blue-300/80 text-sm mt-4">Refreshing...</div>
      )}
      <footer className="mt-16 py-10 text-center text-blue-300/60">
        Stay in control. Keep it simple.
      </footer>
    </div>
  );
}

export default App;
