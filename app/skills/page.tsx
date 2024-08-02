import SkillSetCard from "@/components/skillSetCard";
import { MyData } from "@/data/data";

export default function SkillsPage() {
  const skillSets = MyData.mySkills;

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-6xl">
        {skillSets.map((skillSet, index) => (
          <SkillSetCard key={index} skillSet={skillSet} />
        ))}
      </div>
    </div>
  );
}
