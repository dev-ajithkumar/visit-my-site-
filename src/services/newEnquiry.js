import supabase from "./supabase";
import { toast } from "react-hot-toast";

export async function newEnquiry(obj) {
  const { data, error } = await supabase
    .from("Enquires")
    .insert([obj])
    .select();

  if (error) {
    return { data: null, error };
  }

  toast.success("Done! Your inquiry's in.");
  return { data, error: null };
}
