export default function Layout({ children }) {
  return (
    <div className="min-h-dvh grid place-items-center bg-neutral-100">
      <div className="w-[394px] max-w-[94vw] h-[760px] rounded-3xl bg-black text-white overflow-hidden shadow-2xl">
        {children}
      </div>
    </div>
  );
}
