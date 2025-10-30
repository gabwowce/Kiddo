export default function SingleChoice({ question, options, value, onChange }) {
  return (
    <div className="grid gap-2">
      <h2 className="text-xl text-center mb-2">{question.title}</h2>
      {options.map(o=>(
        <button key={o.id}
          onClick={()=>onChange(o.id)}
          className={`w-full rounded-xl px-4 py-3 text-left bg-neutral-800 ${value===o.id?'ring-2 ring-white':''}`}>
          {o.label}
        </button>
      ))}
    </div>
  );
}
