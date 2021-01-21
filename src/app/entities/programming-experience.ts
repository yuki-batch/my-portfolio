export type skillLevel = 1 | 2 | 3 | 4 | 5;

export class ProgrammingExperience {
  skill: Program[];
  startTerm: string;
}

export class Program {
  name: string;
  startTerm: string;
  endTerm: string;
  level: skillLevel;
}
