import { Sidebar } from "./Sidebar";

import { Header } from "../../shared/ui/Header";
import { MainCenter } from "../../shared/ui/MainCenter";
import { ScreenLayout } from "../../shared/ui/ScreenLayout";

function AppLayout({ children }) {
  return (
    <ScreenLayout>
      <Header />
      <MainCenter>
        <div className="grid h-full w-full max-w-[1200px] grid-cols-[auto_1fr] gap-4 p-4">
          <Sidebar />
          <div className="grid h-full grid-cols-2 gap-4 rounded-md bg-neutral-200 p-10">
            {children}
          </div>
        </div>
      </MainCenter>
    </ScreenLayout>
  );
}

export { AppLayout };
