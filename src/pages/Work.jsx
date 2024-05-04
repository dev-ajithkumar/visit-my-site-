import { useRef } from "react";
import { supabaseUrl } from "../services/supabase";
import Project from "../ui/Project";

function Work() {
  const srcTheWildOasis = `${supabaseUrl}/storage/v1/object/sign/my-info/the-wild-oasis%20dashboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteS1pbmZvL3RoZS13aWxkLW9hc2lzIGRhc2hib2FyZC5wbmciLCJpYXQiOjE3MTQ0NzM4MTksImV4cCI6MTc0NjAwOTgxOX0.4dASE7mx7qBJvf0AK9t49tA4D2t9s0urymmzREa7V2w&t=2024-04-30T10%3A43%3A34.623Z`;
  const srcCraveCrust = `${supabaseUrl}/storage/v1/object/sign/my-info/pizzza-app-dashboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteS1pbmZvL3Bpenp6YS1hcHAtZGFzaGJvYXJkLnBuZyIsImlhdCI6MTcxNDQ4MTU3OCwiZXhwIjoxNzQ2MDE3NTc4fQ.G3P9xfFsBZS01FCOZq4IArN5eOiBHHteuf1vEaWnFDY&t=2024-04-30T12%3A52%3A54.089Z`;
  const srcCurrencyConverter = `${supabaseUrl}/storage/v1/object/sign/my-info/currency-calculator-dashboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteS1pbmZvL2N1cnJlbmN5LWNhbGN1bGF0b3ItZGFzaGJvYXJkLnBuZyIsImlhdCI6MTcxNDQ4MjA5MSwiZXhwIjoxNzQ2MDE4MDkxfQ.p0bmPlTSF9z_yKbbVgKjVq3sm1Gv7OVh6CIAQj_8gNs&t=2024-04-30T13%3A01%3A26.511Z`;
  const referenceTheWildOasis = useRef(
    `https://the-wild-oasis-ajith.netlify.app/`
  );

  const referenceCraveCrust = useRef(
    `https://joyful-nougat-33858c.netlify.app/`
  );

  const referenceCurrencyConverter = useRef(
    `https://cosmic-donut-9a46a4.netlify.app/`
  );
  return (
    <div className="m-4">
      <h1 className="text-2xl mb-2 md:text-3xl md:mb-3">
        Some Things I’ve Built
      </h1>
      <Project
        name={`The Wild Oasis`}
        detail={`Come explore our oasis admin pad. view booking cabins, arrange breakfast, do check-ins, track payments—all in a breeze for our team!`}
        src={srcTheWildOasis}
        reference={referenceTheWildOasis}
      />
      <Project
        name={`CraveCrust`}
        detail={`Pizza made simple! Add your favorites, order fast with this app`}
        src={srcCraveCrust}
        reference={referenceCraveCrust}
      />
      <Project
        name={`Currency Calculator`}
        detail={`Check USD vs. any country! Simple app.`}
        src={srcCurrencyConverter}
        reference={referenceCurrencyConverter}
      />
    </div>
  );
}

export default Work;
