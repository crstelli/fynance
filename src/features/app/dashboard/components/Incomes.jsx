import { EllipsisVertical } from "lucide-react";

function Incomes({ incomes }) {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-neutral-100 p-4">
      {incomes.map((el, i) => (
        <Income value={el} key={i} />
      ))}
    </div>
  );
}

function Income({ value }) {
  return (
    <div className="flex items-center justify-between rounded-md px-4 py-2">
      <h4 className="font-bold text-green-600">${value.toFixed(2)}</h4>
      <span className="font-light text-neutral-800">3 days ago</span>
      <EllipsisVertical className="cursor-pointer text-neutral-700" />
    </div>
  );
}

export { Incomes };
