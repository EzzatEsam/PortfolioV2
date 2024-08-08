import React from "react";
import { SkillSet } from "@/types/SkillSet";
import SkillCard from "./skillCard";

interface SkillSetCardProps {
  skillSet: SkillSet;
}

const SkillSetCard: React.FC<SkillSetCardProps> = ({ skillSet }) => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        {skillSet.name}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {skillSet.innerSKills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSetCard;
