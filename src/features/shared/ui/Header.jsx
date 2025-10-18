function Header() {
  return (
    <div className="bg-blue-600 py-4">
      <span className="mx-auto flex w-[90%] max-w-[1000px] items-center gap-4">
        <img className="w-15" src="logo-white.svg" alt="logo svg" />
        <h2 className="text-2xl font-semibold text-white">Fynance</h2>
      </span>
    </div>
  );
}

export { Header };
