import * as yup from 'yup';
import { coachValidationSchema } from 'validationSchema/coaches';
import { playerValidationSchema } from 'validationSchema/players';
import { practicePlanValidationSchema } from 'validationSchema/practice-plans';
import { scheduleValidationSchema } from 'validationSchema/schedules';

export const teamValidationSchema = yup.object().shape({
  name: yup.string().required(),
  academy_id: yup.string().nullable().required(),
  coach: yup.array().of(coachValidationSchema),
  player: yup.array().of(playerValidationSchema),
  practice_plan: yup.array().of(practicePlanValidationSchema),
  schedule: yup.array().of(scheduleValidationSchema),
});
