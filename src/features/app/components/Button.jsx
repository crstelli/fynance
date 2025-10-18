function Button({ children }) {
  return (
    <button className="cursor-pointer rounded-md border border-blue-600 px-3 text-blue-600 hover:bg-blue-600 hover:text-neutral-50">
      {children}
    </button>
  );
}

export { Button };
