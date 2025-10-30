"use client";
import { WizardProvider, useWizard } from "@/components/form/WizardProvider";
import MultiChoice from '@/components/inputs/MultiChoice';
import NumberSlider from '@/components/inputs/NumberSlider';
import SingleChoice from '@/components/inputs/SingleChoice';
import { STEPS } from "@/lib/steps";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [schema, setSchema] = useState(null);
  const params = useParams();
  const step = String(params.step ?? "1");

  useEffect(() => {
    fetch("/api/form/kiddo-waitlist-v1")
      .then(r => r.json()).then(setSchema)
      .catch(() => setSchema({ error: true }));
  }, []);

  if (!schema) return <div className="p-6">Loading…</div>;
  if (schema.error) return <div className="p-6">Failed to load.</div>;

  return (
    <WizardProvider schema={schema}>
      <StepScreen step={step} />
    </WizardProvider>
  );
}

function StepScreen({ step }) {
  const router = useRouter();
  const { schema, email, setEmail, answers, setAnswers } = useWizard();

  const meta = useMemo(() => {
    const cfg = STEPS.find(s => s.slug === step);
    if (!cfg) return null;
    let question = null;
    if (cfg.qkey !== "email" && cfg.type !== "info") {
      question = schema.questions.find(q => q.qkey === cfg.qkey);
    }
    return { cfg, question };
  }, [schema, step]);

  if (!meta) return <div className="p-6">Not found</div>;
  const { cfg, question } = meta;

  // render pagal tipą
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 grow overflow-y-auto">
        {cfg.type === "email" && (
          <>
            <h1 className="text-xl font-semibold mb-3">A Real Plan For Your Kids’ Phone Addiction.</h1>
            <input
              className="w-full rounded-lg p-3 text-black"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </>
        )}

        {cfg.type === "number" && (
          <>
            <h2 className="text-xl text-center mb-6">{question.title}</h2>
            <NumberSlider
              value={answers[question.id] ?? 60}
              onChange={(v)=>setAnswers(a=>({ ...a, [question.id]: v }))}
            />
          </>
        )}

        {cfg.type === "single" && (
          <SingleChoice
            question={question}
            options={schema.options.filter(o=>o.question_id===question.id)}
            value={answers[question.id] ?? null}
            onChange={(optId)=>setAnswers(a=>({ ...a, [question.id]: optId }))}
          />
        )}

        {cfg.type === "multi" && (
          <MultiChoice
            question={question}
            options={schema.options.filter(o=>o.question_id===question.id)}
            values={answers[question.id] ?? []}
            onToggle={(optId, checked)=>{
              setAnswers(a=>{
                const cur = new Set(a[question.id] ?? []);
                checked ? cur.add(optId) : cur.delete(optId);
                return { ...a, [question.id]: Array.from(cur) };
              });
            }}
          />
        )}

        {cfg.type === "text" && (
          <TextArea
            label={question.title}
            value={answers[question.id] ?? ""}
            onChange={(t)=>setAnswers(a=>({ ...a, [question.id]: t }))}
          />
        )}

        {cfg.type === "info" && <InfoPanel kind={cfg.qkey} minutes={answers[getQ(schema,'q2_child_daily_minutes')]} />}
      </div>

      <div className="p-4">
        <NavButtons
          step={step}
          onPrev={()=>router.push(`/join/${Number(step)-1}`)}
          onNext={async()=>{
            const last = Number(STEPS[STEPS.length-1].slug);
            if (Number(step) >= last) {
              // submit
              await submitAll(schema, email, answers);
            } else {
              router.push(`/join/${Number(step)+1}`);
            }
          }}
        />
      </div>
    </div>
  );
}

function getQ(schema, qkey){ return (schema.questions.find(q=>q.qkey===qkey)||{}).id }
async function submitAll(schema, email, answersObj){
  const answers = [];
  for (const q of schema.questions) {
    const v = answersObj[q.id];
    if (v == null) continue;
    if (q.qtype === "number") answers.push({ questionId: q.id, valueNumber: Number(v) });
    if (q.qtype === "text")   answers.push({ questionId: q.id, valueText: String(v) });
    if (q.qtype === "single") answers.push({ questionId: q.id, optionId: v });
    if (q.qtype === "multi")  for (const id of v) answers.push({ questionId: q.id, optionId: id });
  }
  await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({ formId: schema.form.id, email, answers })
  });
}
