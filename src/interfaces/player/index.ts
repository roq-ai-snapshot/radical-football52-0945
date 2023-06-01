import { ParentInterface } from 'interfaces/parent';
import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  team_id: string;
  parent?: ParentInterface[];
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    parent?: number;
    player_profile?: number;
  };
}
