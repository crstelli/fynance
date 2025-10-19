import { createClient } from "@supabase/supabase-js";

const url = "https://betkxljoyrgsybsowcam.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldGt4bGpveXJnc3lic293Y2FtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDU1MTYwMywiZXhwIjoyMDc2MTI3NjAzfQ.MZsjw9JjiHlTgttKMKERMW9wE5dtpyUmEMDMIBHNN8w";

export const supabase = createClient(url, key);
