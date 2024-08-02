import React from "react";
export interface SkillSet {
    name: string;
    innerSKills : Array<MiniSkill>;
}


export interface MiniSkill {
    name: string;
    logo : React.ReactNode;
}