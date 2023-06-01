import * as yup from 'yup';
import { drillValidationSchema } from 'validationSchema/drills';

export const practicePlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  coach_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  drill: yup.array().of(drillValidationSchema),
});
