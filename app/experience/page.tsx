import Timeline from "@/components/timeline";
import { MyData } from "@/data/data";

const xpPage: React.FC = () => {
  return (
    <div className="m-8 mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
      <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-gray-100">{" "}</h1>
      <Timeline events={MyData.myExperience} />
    </div>
  );
};

export default xpPage;
