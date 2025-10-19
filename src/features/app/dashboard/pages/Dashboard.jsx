import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../supabase";

import { AppLayout } from "../../components/AppLayout";
import { Subtitle } from "../../components/Subtitle";

import { Balance } from "../components/Balance";
import { Container } from "../components/Container";
import { Incomes } from "../components/Incomes";
import { Expences } from "../components/Expences";
import { useState } from "react";

async function getData() {
  const {
    data: {
      user: { id },
    },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("movements")
    .select("*")
    .eq("user_uuid", id);

  if (error) throw error;

  return data;
}

async function addMovement(mov) {
  const {
    data: {
      user: { id },
    },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("movements")
    .insert([{ user_uuid: id, mov }])
    .select();

  if (error) throw error;
}

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [movement, setMovement] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["movements"],
    queryFn: getData,
  });

  function handleAddMovement(e) {
    e.preventDefault();
    if (movement === 0) return;

    addMovement(movement);
    setShowModal(false);
    setMovement(false);
  }

  if (error) throw error;

  if (isLoading) return <p>Loading</p>;

  const movements = data.map((d) => d.mov);

  const total = movements.reduce((prev, cur) => prev + cur, 0);
  const incomes = movements.filter((mov) => mov > 0);
  const expences = movements.filter((mov) => mov < 0);

  return (
    <AppLayout>
      <Balance total={total} />
      <button
        onClick={() => setShowModal(true)}
        className="ml-auto cursor-pointer self-start rounded-md border border-blue-600 px-3 py-1 text-blue-600 duration-150 hover:bg-blue-600 hover:text-white"
      >
        Add Movement
      </button>
      <Container>
        <Subtitle>Your Incomes</Subtitle>
        <Incomes incomes={incomes} />
      </Container>
      <Container>
        <Subtitle>Your Expences</Subtitle>
        <Expences expences={expences} />
      </Container>
      {showModal && (
        <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm backdrop-brightness-80">
          <div className="rounded-md bg-neutral-200 p-4">
            <form onSubmit={handleAddMovement} className="flex flex-col gap-2">
              <label>Add movement</label>
              <input
                value={movement}
                onChange={(e) => setMovement(e.target.value)}
                type="number"
                className="rounded-md border border-neutral-500 px-4 py-1"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-md border border-blue-600 px-3 py-1 text-blue-600 duration-150 hover:bg-blue-600 hover:text-white"
              >
                Add Movement
              </button>
            </form>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

export { Dashboard };
