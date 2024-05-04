import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xiaspeqsnlqdqcrwcdej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpYXNwZXFzbmxxZHFjcndjZGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzM5MDgsImV4cCI6MjAyOTYwOTkwOH0.20sAQffI7xG-UVI7RZaXr4RSPvufRDmoG9HIM_HK0mw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
