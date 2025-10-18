function Form() {
  return (
    <form className="flex w-[90%] max-w-[400px] flex-col gap-3">
      <h1 className="text-center text-4xl text-neutral-800">Log In</h1>
      <input
        type="email"
        placeholder="Email"
        className="rounded-md border border-neutral-400 px-4 py-3 focus:outline-blue-600"
      />

      <input
        type="password"
        placeholder="Password"
        className="rounded-md border border-neutral-400 px-4 py-3 focus:outline-blue-600"
      />

      <button
        type="submit"
        className="cursor-pointer rounded-md border border-blue-600 py-2 font-bold text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        Login
      </button>
    </form>
  );
}

export { Form };
