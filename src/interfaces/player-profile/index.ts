import { PlayerInterface } from 'interfaces/player';

export interface PlayerProfileInterface {
  id?: string;
  player_id: string;
  position: string;
  height: number;
  weight: number;
  date_of_birth: Date;

  player?: PlayerInterface;
  _count?: {};
}
