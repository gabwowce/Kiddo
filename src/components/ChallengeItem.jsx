// components/ChallengeItem.jsx
export default function ChallengeItem({
  icon,          // emoji arba <Icon/>
  iconLabel,     // a11y: jei icon yra emoji string
  title,         // viršutinė antraštė (pvz. "Make your bed")
  subtitle,      // mažas aprašas (pvz. "Complete the quick morning task")
  rewardText,    // dešinė pusė (pvz. "+5 min")
  rewardUnit = "Screen time", // mažas tekstas po reward
  className = "",             // papildomos klasės, jei prireiks
}) {
  const isEmoji = typeof icon === "string";

  return (
    <div className={`flex items-center justify-between rounded-2xl bg-[#F5F5F5] border-1 border-[#E5E5E5] py-2 px-3 ${className}`}>
      <div className="flex items-center gap-3">
        <span
          className="flex h-18 w-18 items-center justify-center rounded-full bg-white text-4xl"
          role={isEmoji ? "img" : undefined}
          aria-label={isEmoji ? iconLabel : undefined}
          aria-hidden={isEmoji && !iconLabel ? true : undefined}
          title={isEmoji && iconLabel ? iconLabel : undefined}
        >
          {icon}
        </span>
        <div className="py-3">
          <p className="font-bold text-lg leading-[43px]">{title}</p>
          {subtitle ? (
            <p className="text-base text-kiddo-muted leading-auto">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="text-right p-3 ">
        <p className="font-bold text-[28px]">{rewardText}</p>
        <p className="text-[14px] text-kiddo-muted ">{rewardUnit}</p>
      </div>
    </div>
  );
}
