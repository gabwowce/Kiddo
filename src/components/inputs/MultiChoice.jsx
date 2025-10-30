export default function MultiChoice({ question, options, values, onToggle }) {
  return (
    <div className="grid gap-2">
      <h2 className="text-xl text-center mb-1">{question.title}</h2>
      {question.helper && <p className="text-center text-sm text-neutral-400 mb-2">{question.helper}</p>}
      {options.map(o=>{
        const checked = values.includes(o.id);
        return (
          <button key={o.id}
            onClick={()=>onToggle(o.id,!checked)}
            className={`w-full rounded-xl px-4 py-3 text-left bg-neutral-800 ${checked?'ring-2 ring-white':''}`}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
