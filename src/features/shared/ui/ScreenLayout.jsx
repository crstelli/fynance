function ScreenLayout({ children }) {
  return (
    <div className="grid h-screen w-full grid-rows-[auto_1fr]">{children}</div>
  );
}

export { ScreenLayout };
