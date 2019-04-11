import {Question} from './question';
import {Survey} from './survey';

export class Answer {
  question: Question;
  survey: Survey;
  contents: string;
  rating: number;
  respondent: string;
}
