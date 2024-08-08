import { MiniSkill } from "@/types/SkillSet";

interface SkillCardProps {
  skill: MiniSkill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="max-w-xs transform rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-center px-2 pt-2">
        <div className="text-2xl text-gray-900 dark:text-gray-100">
          {skill.logo}
        </div>
      </div>
      <div className="px-3 py-2 text-center">
        <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {skill.name}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
