import { useState } from "react";
import { useNavigate } from "react-router";

import { supabase } from "../../../supabase";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(email, password) {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw Error;

      navigate("/dashboard");

      return { data, error };
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [handleLogin, isLoading];
}

export { useLogin };
