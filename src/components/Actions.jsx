import { useState } from 'react';

function Actions({ onAdd }) {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [note, setNote] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (Number.isNaN(val) || val <= 0) return;
    onAdd({ amount: val, type, note });
    setAmount('');
    setNote('');
  };

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <form onSubmit={submit} className="bg-white/5 rounded-xl p-5 border border-white/10 flex flex-col sm:flex-row gap-3">
        <input
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="flex-1 rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note (optional)"
          className="flex-[2] rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <button type="submit" className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition">
          Add
        </button>
      </form>
    </section>
  );
}

export default Actions;
