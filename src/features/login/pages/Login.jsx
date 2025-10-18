import { Form } from "../components/Form";

import { Header } from "../../shared/ui/Header";
import { MainCenter } from "../../shared/ui/MainCenter";
import { ScreenLayout } from "../../shared/ui/ScreenLayout";

function Login() {
  return (
    <ScreenLayout>
      <Header />
      <MainCenter>
        <Form />
      </MainCenter>
    </ScreenLayout>
  );
}

export { Login };
