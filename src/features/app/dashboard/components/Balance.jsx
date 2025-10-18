import { ChevronUp } from "lucide-react";

import { Subtitle } from "../../components/Subtitle";

function Balance() {
  return (
    <div className="col-span-2 flex flex-col gap-1">
      <Subtitle>Your balance</Subtitle>
      <div className="flex gap-1">
        <h1 className="text-5xl font-bold">$213.21</h1>
        <span className="flex font-bold text-green-600">
          <ChevronUp /> $21.02
        </span>
      </div>
    </div>
  );
}

export { Balance };
