"use client";

import { carMakes } from "@/content/cars";

/** The customer's car: a listed make and model, or typed text when make is "Other". */
export type CarChoice = { make: string; model: string };

const OTHER = "Other";

/**
 * Two taps instead of typing: make (by logo), then model. Collapses to the pick with a
 * "Change" link so the page never grows into a long form.
 */
export function CarPicker({
  value,
  onChange,
  accentStyle,
}: {
  value: CarChoice;
  onChange: (v: CarChoice) => void;
  accentStyle: React.CSSProperties;
}) {
  const make = carMakes.find((m) => m.name === value.make);
  const chip = "rounded-full border px-3.5 py-2 text-sm transition-colors";
  const idle = "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400";
  const reset = (
    <button
      type="button"
      onClick={() => onChange({ make: "", model: "" })}
      className="px-2 text-sm font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-800"
    >
      Change
    </button>
  );

  // Done: one line.
  if (make && value.model) {
    return (
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className={`${chip} inline-flex items-center gap-2 border-transparent`} style={accentStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={make.logo} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
          {make.name} {value.model}
        </span>
        {reset}
      </div>
    );
  }

  // Step 2: models of the chosen make.
  if (make) {
    return (
      <div className="mt-3">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={make.logo} alt="" width={20} height={20} className="h-5 w-5" />
          <span className="text-sm font-semibold">{make.name}</span>
          {reset}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {make.models.map((m) => (
            <button key={m} type="button" onClick={() => onChange({ make: make.name, model: m })} className={`${chip} ${idle}`}>
              {m}
            </button>
          ))}
          <button type="button" onClick={() => onChange({ make: OTHER, model: "" })} className={`${chip} ${idle}`}>
            Other model
          </button>
        </div>
      </div>
    );
  }

  // Not listed: type it.
  if (value.make === OTHER) {
    return (
      <div className="mt-3 flex items-center gap-2">
        <input
          type="text"
          autoFocus
          maxLength={40}
          aria-label="Your car"
          value={value.model}
          onChange={(e) => onChange({ make: OTHER, model: e.target.value })}
          placeholder="e.g. Jeep Compass, Honda Activa"
          className="w-full rounded-xl border-0 bg-neutral-100 px-4 py-3.5 text-[15px] text-neutral-800 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-offset-2"
        />
        {reset}
      </div>
    );
  }

  // Step 1: makes by logo; anything else is typed.
  return (
    <>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {carMakes.map((m) => (
          <button
            key={m.name}
            type="button"
            onClick={() => onChange({ make: m.name, model: "" })}
            className="flex flex-col items-center gap-1.5 rounded-[14px] border border-neutral-200 bg-white px-0.5 py-3 text-[10.5px] leading-tight text-neutral-600 transition-colors hover:border-neutral-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.logo} alt="" width={28} height={28} className={`h-7 w-7 ${m.wide ? "scale-[1.9]" : ""}`} />
            <span className="text-center">{m.name}</span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange({ make: OTHER, model: "" })}
        className="mt-2.5 text-sm font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-800"
      >
        Car not listed? Type it
      </button>
    </>
  );
}

/** What the review should call the car: "Creta" for a listed model, the typed text otherwise. */
export const carLabel = (v: CarChoice) => (v.make && v.make !== OTHER && v.model ? `${v.make} ${v.model}` : v.make === OTHER ? v.model.trim() : "");
