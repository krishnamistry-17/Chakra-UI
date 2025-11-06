import { supabase } from "../lib/supabaseClient";

export default {
  title: "Pages/Supabase",
  component: supabase,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export const Default = {
  label: "Default",
};
