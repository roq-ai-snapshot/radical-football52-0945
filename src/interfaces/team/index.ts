import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';
import { PracticePlanInterface } from 'interfaces/practice-plan';
import { ScheduleInterface } from 'interfaces/schedule';
import { AcademyInterface } from 'interfaces/academy';

export interface TeamInterface {
  id?: string;
  name: string;
  academy_id: string;
  coach?: CoachInterface[];
  player?: PlayerInterface[];
  practice_plan?: PracticePlanInterface[];
  schedule?: ScheduleInterface[];
  academy?: AcademyInterface;
  _count?: {
    coach?: number;
    player?: number;
    practice_plan?: number;
    schedule?: number;
  };
}
