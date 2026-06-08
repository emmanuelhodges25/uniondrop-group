export default function Payments() {
  const payments = [
    {
      id: "#INV-001",
      service: "Business Website",
      amount: "$5",
      status: "Paid",
    },
    {
      id: "#INV-002",
      service: "Premium Automation",
      amount: "$10",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Payments
        </h1>

        <p className="text-slate-400 mt-2">
          Manage invoices and transactions.
        </p>
      </div>

      <div className="grid gap-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="
            bg-slate-950
            border
            border-cyan-500/10
            rounded-2xl
            p-5
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{payment.service}</p>
                <p className="text-slate-500 text-sm">
                  {payment.id}
                </p>
              </div>

              <div className="text-right">
                <p className="text-cyan-400 font-bold">
                  {payment.amount}
                </p>

                <p className="text-xs text-slate-400">
                  {payment.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}