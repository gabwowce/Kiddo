import StatCard from "./StatCard";

export default function DesktopStatGrid({ items=[] }) {

  return (
    <div className="hidden sm:grid mt-8 gap-4 sm:grid-cols-2 lg:grid-cols-4 border-18 border-[#FAFAFA]">
      {items.map((it, i) => (
        <StatCard
          key={i}
          value={it.value}
          label={it.label}
          bg={it.bg}
          textColor={it.textColor}
        />
      ))}
    </div>
  );
}
