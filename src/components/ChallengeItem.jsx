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
    <div className={`flex items-center justify-between rounded-2xl bg-[#F5F5F5] border-1 border-[#E5E5E5] py-1 md:py-2 px-1 md:px-3 ${className}`}>
      <div className="flex items-center gap-3 px-3 md:py-0">
        <span
          className="flex h-12 w-12 md:h-18 md:w-18 items-center justify-center rounded-full bg-white text-xl md:text-4xl"
          role={isEmoji ? "img" : undefined}
          aria-label={isEmoji ? iconLabel : undefined}
          aria-hidden={isEmoji && !iconLabel ? true : undefined}
          title={isEmoji && iconLabel ? iconLabel : undefined}
        >
          {icon}
        </span>
        <div className="py-3">
          <p className="font-bold text-sm md:text-lg md:leading-[43px]">{title}</p>
          {subtitle ? (
            <p className="text-[10px] md:text-base text-kiddo-muted leading-auto">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="text-right pl-0 md:pl-3 py-3 px-3">
        <p className="font-bold text-xl md:text-[28px] text-nowrap">{rewardText}</p>
        <p className="text-[8px] md:text-[14px] text-kiddo-muted ">{rewardUnit}</p>
      </div>
    </div>
  );
}
