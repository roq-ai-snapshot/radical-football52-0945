import * as yup from 'yup';

export const drillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  practice_plan_id: yup.string().nullable().required(),
});
