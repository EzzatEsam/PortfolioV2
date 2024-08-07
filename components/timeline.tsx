import React from "react";
import TimelineItem from "./timelineItem";
import { TimelineEvent } from "@/types";

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <ol className="relative m-4 border-s border-gray-200 dark:border-gray-700">
      {events.map((event, index) => (
        <TimelineItem key={index} item={event} />
      ))}
    </ol>
  );
};

export default Timeline;
