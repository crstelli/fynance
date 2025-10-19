import { EllipsisVertical } from "lucide-react";

function Expences({ expences }) {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-neutral-100 p-4">
      {expences.length > 0 ? (
        expences.map((el, i) => <Expence value={el} key={i} />)
      ) : (
        <p>No expences</p>
      )}
    </div>
  );
}

function Expence({ value }) {
  return (
    <div className="flex items-center justify-between rounded-md px-4 py-2">
      <h4 className="font-bold text-red-600">${value.toFixed(2)}</h4>
      <span className="font-light text-neutral-800">3 days ago</span>
      <EllipsisVertical className="cursor-pointer text-neutral-700" />
    </div>
  );
}

export { Expences };
