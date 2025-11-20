function Stat({ label, value, accent }) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
      <div className="text-sm text-blue-200/80">{label}</div>
      <div className={`mt-1 text-2xl font-semibold ${accent}`}>{value}</div>
    </div>
  );
}

function Stats({ data }) {
  const { income = 0, expenses = 0, balance = 0 } = data || {};
  const toCurrency = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat label="Income" value={toCurrency(income)} accent="text-emerald-300" />
        <Stat label="Expenses" value={toCurrency(expenses)} accent="text-rose-300" />
        <Stat label="Balance" value={toCurrency(balance)} accent="text-blue-300" />
      </div>
    </section>
  );
}

export default Stats;
