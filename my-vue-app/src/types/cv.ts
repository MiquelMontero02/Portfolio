export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
}

export interface SocialLinks {
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    username: string;
    url: string;
  };
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  startDate?: string;
  endDate?: string;
  description: string;
}

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skills {
  techSkills: Skill[];
  softSkills: Skill[];
}