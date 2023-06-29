import { Experience } from '../types/graphql';
import { SelectCardOption } from '../types/select-card-option';

export const EXPERIENCE_TITLES = {
  [Experience.NoExperience]: 'No Experience',
  [Experience.SomeExperience]: 'Some Experience',
  [Experience.VeryExperienced]: 'Very Experienced',
  [Experience.Expert]: 'Expert',
}

export const EXPERIENCES_AS_OPTIONS: SelectCardOption[] = [
  { title: EXPERIENCE_TITLES[Experience.NoExperience], value: Experience.NoExperience },
  { title: EXPERIENCE_TITLES[Experience.SomeExperience], value: Experience.SomeExperience },
  { title: EXPERIENCE_TITLES[Experience.VeryExperienced], value: Experience.VeryExperienced },
  { title: EXPERIENCE_TITLES[Experience.Expert], value: Experience.Expert },
];

export const EXPERIENCES_AS_VALUES = [Experience.NoExperience, Experience.SomeExperience, Experience.VeryExperienced, Experience.Expert] as const;
