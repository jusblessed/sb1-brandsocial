export interface Brand {
  name: string;
  industry: string;
  mission: string;
  values: string[];
  targetAudience: {
    demographics: string;
    interests: string[];
    painPoints: string[];
  };
  contentPillars: ContentPillar[];
}

export interface ContentPillar {
  name: string;
  description: string;
  topics: string[];
}

export interface Step {
  id: string;
  title: string;
  description: string;
}