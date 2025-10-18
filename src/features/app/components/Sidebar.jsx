import { LayoutDashboard, Settings, BanknoteArrowUp, Euro } from "lucide-react";
import { NavLink } from "react-router";

function Sidebar() {
  return (
    <div
      className="flex h-full min-w-[200px] flex-col gap-4 rounded-md bg-neutral-200 px-4 py-10"
      id="sidebar"
    >
      <Item icon={<LayoutDashboard size={30} />}>Dashboard</Item>
      <Item icon={<Euro size={30} />}>Expences</Item>
      <Item icon={<BanknoteArrowUp size={30} />}>Incomes</Item>
      <Item icon={<Settings size={30} />}>Settings</Item>
    </div>
  );
}

function Item({ children, icon }) {
  return (
    <NavLink
      to={"/" + children.toLowerCase()}
      className={`flex cursor-pointer items-center gap-1 px-2 py-1 text-lg text-neutral-700`}
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}

export { Sidebar };
