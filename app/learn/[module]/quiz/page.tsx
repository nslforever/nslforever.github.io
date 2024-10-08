import Quiz from "@/components/Quiz";
import Modules from "@/assets/modules.json";
import path from "path";
import { readFileSync } from "fs";

export function generateStaticParams() {
  return Modules["modules"].map((mod) => ({ module: String(mod["id"]) }));
}
export const dynamicParams = false;

export const dynamic = "force-static";

export default function Page({ params }: { params: { module: number } }) {
  try {
    const raw = readFileSync(
      path.resolve(`assets/modules/${params.module}/quiz.json`),
      "utf8"
    );
    const mod = Modules["modules"][params.module];
    const quiz = JSON.parse(raw);
    return <Quiz questions={quiz["questions"]} authors={mod["authors"]} />;
  } catch (e) {
    return <div>Quiz not found</div>;
  }
}
