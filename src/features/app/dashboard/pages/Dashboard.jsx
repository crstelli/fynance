import { AppLayout } from "../../components/AppLayout";
import { Subtitle } from "../../components/Subtitle";

import { Balance } from "../components/Balance";
import { Container } from "../components/Container";
import { Incomes } from "../components/Incomes";
import { Expences } from "../components/Expences";

function Dashboard() {
  return (
    <AppLayout>
      <Balance />
      <Container>
        <Subtitle>Your Incomes</Subtitle>
        <Incomes />
      </Container>
      <Container>
        <Subtitle>Your Expences</Subtitle>
        <Expences />
      </Container>
    </AppLayout>
  );
}

export { Dashboard };
