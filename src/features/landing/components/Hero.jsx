import { Button } from "./Button";

function Hero() {
  return (
    <div className="mx-auto grid w-[90%] max-w-[900px] grid-cols-1 items-center justify-between md:grid-cols-[3fr_2fr] md:justify-items-center">
      <div className="md:items-left flex flex-col items-center gap-2">
        <h1 className="text-center text-4xl font-bold text-stone-800 md:self-start md:text-left md:text-5xl">
          Plan. Save. Grow.
        </h1>
        <p className="text-md w-3/4 text-center text-stone-600 md:self-start md:text-left md:text-lg">
          Keep all your finances in one place — simple insights, clear reports,
          and total control over your budget.
        </p>
        <Button />
      </div>
      <img
        className="mx-auto mt-15 w-full max-w-[250px] md:mt-0 md:max-w-[300px]"
        src="hero.svg"
        alt="hero finance"
      />
    </div>
  );
}

export { Hero };
