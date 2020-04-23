import { PresentationLevel } from '../enums/presentation-level.enum';
import { PresentationLanguage } from '../enums/presentation-language.enum';

export interface Presentation {
  title: string;
  author: string;
  level: PresentationLevel;
  language: PresentationLanguage;
}
