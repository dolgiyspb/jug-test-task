import { PresentationLanguage } from '../enums/presentation-language.enum';
import { PresentationLevel } from '../enums/presentation-level.enum';

export interface Filters {
  language: PresentationLanguage[];
  level: PresentationLevel[];
  search: string;
}
