function Button({ children }) {
  return (
    <button className="rounded-md border border-blue-600 px-3 text-blue-600">
      {children}
    </button>
  );
}

export { Button };
