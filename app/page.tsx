import { title, subtitle } from "@/components/primitives";
import { MyData } from "@/data/data";
export default function Home() {
  return (
    <section className="mx-auto mt-8 flex flex-col items-center justify-center gap-4 px-4 py-8 md:flex-row md:py-10">
      <div className="inline-block">
        <div className="text-start">
          <h1 className={title()}>Hi there</h1>
          <br />
          <h1 className={title()}>I am</h1>
          <h1 className={title({ color: "blue" })}> {MyData.myName}</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            {MyData.myDiscription}
          </h2>
          <br />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img
          src={"/pic.jpg"}
          alt="my pic"
          className="mx-8 w-1/2 rounded-full"
        />
      </div>
    </section>
  );
}
