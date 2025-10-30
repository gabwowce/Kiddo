export default function NumberSlider({ value, onChange, min=0, max=600, step=15 }) {
  return (
    <div className="grid gap-4">
      <div className="text-center text-5xl font-bold">{Math.round(value/60)}<span className="text-base ml-1">Hours</span></div>
      <input type="range" min={min} max={max} step={step}
        value={value} onChange={(e)=>onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
