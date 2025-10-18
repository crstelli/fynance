import { Button } from "../../components/Button";

import { AppLayout } from "../../components/AppLayout";
import { Title } from "../../components/Title";

function Expences() {
  return (
    <AppLayout>
      <div className="h-full">
        <div className="flex justify-between">
          <Title>Your Expences</Title>
          <Button>Add Expence</Button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Expence />
          <Expence />
          <Expence />
          <Expence />
        </div>
      </div>
    </AppLayout>
  );
}

function Expence() {
  return (
    <div className="flex items-center justify-between rounded-md bg-neutral-50 px-6 py-4">
      <h4 className="font-bold text-red-600">$271.02</h4>
      <span className="font-light text-neutral-800">3 days ago</span>
      <div className="flex items-center gap-1">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
}

export { Expences };
