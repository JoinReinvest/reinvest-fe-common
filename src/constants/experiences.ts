import { Experience } from '../types/graphql';
import { SelectCardOption } from '../types/select-card-option';

export const EXPERIENCES_AS_OPTIONS: SelectCardOption[] = [
  { title: 'No Experience', value: Experience.NoExperience },
  { title: 'Some Experience', value: Experience.SomeExperience },
  { title: 'Very Experienced', value: Experience.VeryExperienced },
  { title: 'Expert', value: Experience.Expert },
];

export const EXPERIENCES_AS_VALUES = [Experience.NoExperience, Experience.SomeExperience, Experience.VeryExperienced, Experience.Expert] as const;
