import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';
import { playerProfileValidationSchema } from 'validationSchema/player-profiles';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  parent: yup.array().of(parentValidationSchema),
  player_profile: yup.array().of(playerProfileValidationSchema),
});
