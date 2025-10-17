function Landing() {
  return (
    <div className="grid h-screen w-full grid-rows-[auto_1fr]">
      <div className="h-full bg-blue-600 py-4">
        <span className="mx-auto flex w-[90%] max-w-[1000px] items-center gap-4">
          <img className="w-15" src="logo-white.svg" alt="logo svg" />
          <h2 className="text-2xl font-semibold text-white">Fynance</h2>
        </span>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-stone-100">
        <div className="mx-auto grid w-[90%] max-w-[900px] grid-cols-1 items-center justify-between md:grid-cols-[3fr_2fr] md:justify-items-center">
          <div className="md:items-left flex flex-col items-center gap-2">
            <h1 className="text-center text-4xl font-bold text-stone-800 md:self-start md:text-left md:text-5xl">
              Plan. Save. Grow.
            </h1>
            <p className="text-md w-3/4 text-center text-stone-600 md:self-start md:text-left md:text-lg">
              Keep all your finances in one place — simple insights, clear
              reports, and total control over your budget.
            </p>
            <button className="mt-4 cursor-pointer rounded-md border-[1px] border-blue-600 px-4 py-1 font-medium text-blue-600 duration-150 hover:bg-blue-600 hover:text-stone-100 md:self-start md:text-xl">
              Start Now
            </button>
          </div>
          <img
            className="mx-auto mt-15 w-full max-w-[250px] md:mt-0 md:max-w-[300px]"
            src="hero.svg"
            alt="hero finance"
          />
        </div>
      </div>
    </div>
  );
}

export { Landing };
