import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  position: yup.string().required(),
  height: yup.number().integer().required(),
  weight: yup.number().integer().required(),
  date_of_birth: yup.date().required(),
  player_id: yup.string().nullable().required(),
});
