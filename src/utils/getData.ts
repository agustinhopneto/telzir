import * as data from '../data.json';

interface PlanAndDddsProps {
  plans: string[];
  ddds: string[];
}

interface DataProps {
  origin: string;
  destination: string;
  minutes: number;
  plan: string;
}

export interface ResultProps {
  origin: string;
  destination: string;
  minutes: number;
  plan: string;
  withPlan: number;
  withoutPlan: number;
}

const callValues = data.values;
const callPlans = data.plans;

export const getPlansAndDdds = (): PlanAndDddsProps => {
  const origins = callValues.map((value) => value.origin);

  const plans = callPlans.map((plan) => plan.name);

  const ddds = origins.filter(
    (value, index, array) => array.indexOf(value) === index,
  );

  return { ddds, plans };
};

export const calculatePlan = ({
  origin,
  destination,
  minutes,
  plan,
}: DataProps): ResultProps => {
  const callValueSearch = callValues.map(
    (value) =>
      value.origin === origin &&
      value.destination === destination &&
      value.value,
  );

  const planData = callPlans.find((item) => item.name === plan);

  let planMinutes = 0;

  if (planData) {
    planMinutes = planData.minutes;
  }

  const callValue = callValueSearch.filter((call) => call !== false)[0];

  let withPlan = 0;
  let withoutPlan = 0;

  const excesssMinutes = planMinutes - minutes;

  if (excesssMinutes >= 0) {
    withPlan = 0;
  } else {
    withPlan = excesssMinutes * -1 * Number(callValue) * 1.1;
    withPlan = Number(withPlan.toFixed(2));
  }

  withoutPlan = minutes * Number(callValue);

  return { origin, destination, minutes, plan, withPlan, withoutPlan };
};
