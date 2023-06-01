import { DrillInterface } from 'interfaces/drill';
import { CoachInterface } from 'interfaces/coach';
import { TeamInterface } from 'interfaces/team';

export interface PracticePlanInterface {
  id?: string;
  coach_id: string;
  team_id: string;
  name: string;
  description: string;
  drill?: DrillInterface[];
  coach?: CoachInterface;
  team?: TeamInterface;
  _count?: {
    drill?: number;
  };
}
