export default function StatCard({ value, label, bg, textColor, titleStyle }) {
  return (
    <div className={`${bg} p-8 min-h-[380px] h-full flex flex-col justify-between u-stagger`}>
      <div className={`${textColor} ${titleStyle} font-bold u-reveal`}>{value}</div>
      <div className={`${textColor} mt-3 text-xl font-bold leading-snug u-reveal`}>{label}</div>
    </div>
  );
}
