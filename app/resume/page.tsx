import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold">My Resume</h1>
      <object data="cv.pdf" type="application/pdf" height="600">
        Cv Not Found{" "}
      </object>
    </div>
  );
}
