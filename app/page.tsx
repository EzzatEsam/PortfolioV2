import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { MyData } from "@/data/data";
export default function Home() {
  return (
    <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
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
          src={"/pic.png"}
          alt="my pic"
          className="mx-8 w-1/2 rounded-full"
        />
        {/* <div className="flex flex-row text-center items-center justify-center space-x-4 mt-4">
          <Link isExternal href={siteConfig.links.linkedin}>
            LinkedIn
          </Link>
          <Link isExternal href={siteConfig.links.linkedin}>
            LinkedIn
          </Link>
        </div> */}
      </div>

      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}