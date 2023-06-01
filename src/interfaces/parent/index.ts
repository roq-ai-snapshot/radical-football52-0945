import { UserInterface } from 'interfaces/user';
import { PlayerInterface } from 'interfaces/player';

export interface ParentInterface {
  id?: string;
  user_id: string;
  player_id: string;

  user?: UserInterface;
  player?: PlayerInterface;
  _count?: {};
}
