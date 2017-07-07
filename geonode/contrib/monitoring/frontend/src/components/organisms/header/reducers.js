import INTERVAL, { minute } from './constants';


export default function interval(
  state = { interval: 10 * minute },
  action,
) {
  switch (action.type) {
    case INTERVAL:
      return action.payload;
    default:
      return state;
  }
}
