
export default function StatCard({ value, label, bg, textColor }) {
  return (
    <div className={`${bg} p-8 min-h-[380px] flex flex-col justify-between`}>
      <div className={` ${textColor} text-4xl xl:text-6xl font-bold tracking-tight`}>{value}</div>
      <div className={` ${textColor} mt-3 text-2xl font-bold leading-snug`}>{label}</div>
    </div>
  );
}

