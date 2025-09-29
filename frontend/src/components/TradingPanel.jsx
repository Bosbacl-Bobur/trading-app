import { useState } from "react";

export default function TradingPanel() {
  const [trades, setTrades] = useState([
    { id: 1, type: "Buy", amount: 100, result: 20 },
    { id: 2, type: "Sell", amount: 200, result: -15 },
    { id: 3, type: "Buy", amount: 150, result: 10 },
  ]);

  const stopTrading = () => {
    let profit = 0;
    let loss = 0;
    trades.forEach((t) => {
      if (t.result > 0) profit += t.result;
      else loss += Math.abs(t.result);
    });
    return { profit, loss, net: profit - loss };
  };

  const { profit, loss, net } = stopTrading();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">📊 Trading Panel</h1>

        <ul className="space-y-2 mb-6">
          {trades.map((trade) => (
            <li
              key={trade.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="font-medium">{trade.type} — ${trade.amount}</span>
              <span
                className={`font-bold ${
                  trade.result > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {trade.result > 0 ? `+${trade.result}$` : `${trade.result}$`}
              </span>
            </li>
          ))}
        </ul>

        <div className="space-y-2">
          <p className="text-green-600 font-semibold">✅ Umumiy foyda: {profit}$</p>
          <p className="text-red-600 font-semibold">❌ Umumiy zarar: {loss}$</p>
          <p
            className={`font-bold ${
              net >= 0 ? "text-green-700" : "text-red-700"
            }`}
          >
            📌 Yakuniy natija: {net}$
          </p>
        </div>
      </div>
    </div>
  );
}
