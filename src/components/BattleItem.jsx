
export default function BattleItem({ icon, iconLabel, title, text }) {
  const isEmoji = typeof icon === "string";
  return (
    <li className="flex gap-4">
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-xl"
        role={isEmoji ? "img" : undefined}
        aria-label={isEmoji ? iconLabel : undefined}
        aria-hidden={isEmoji && !iconLabel ? true : undefined}
        title={isEmoji && iconLabel ? iconLabel : undefined}
      >
        {icon}
      </span>
      <div>
        <p className="font-bold text-xl leading-6">{title}</p>
        <p className="mt-1 text-kiddo-muted leading-6">{text}</p>
      </div>
    </li>
  );
}
