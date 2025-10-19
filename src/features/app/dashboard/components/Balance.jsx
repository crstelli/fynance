import { ChevronUp } from "lucide-react";

import { Subtitle } from "../../components/Subtitle";

function Balance({ total }) {
  return (
    <div className="flex flex-col gap-1">
      <Subtitle>Your balance</Subtitle>
      <div className="flex gap-1">
        <h1 className="text-5xl font-bold">${total.toFixed(2)}</h1>
        <span className="flex font-bold text-green-600">
          <ChevronUp /> $32.01
        </span>
      </div>
    </div>
  );
}

export { Balance };
