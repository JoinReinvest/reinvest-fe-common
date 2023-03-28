import { Experience } from 'types/graphql';
import { SelectOptions } from 'types/select-option';

export const EXPERIENCES_AS_VALUES: SelectOptions = [
  { title: 'No Experience', value: Experience.NoExperience },
  { title: 'Some Experience', value: Experience.SomeExperience },
  { title: 'Very Experienced', value: Experience.VeryExperienced },
  { title: 'Expert', value: Experience.Expert },
];

export const ACCOUNT_TYPES_AS_OPTIONS = [Experience.NoExperience, Experience.SomeExperience, Experience.VeryExperienced, Experience.Expert] as const;
