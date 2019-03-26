import { useReducer } from 'react';

function visibilityReducer(state, action) {
  const { type, activity, subActivity } = action;

  const allValues = Object.keys(state).map(key => state[key]);

  const isCurrentToggleOff = !state[activity][subActivity];

  switch (type) {
    case 'toggle':
      return {
        ...state,
        [activity]: {
          ...state[activity],
          [subActivity]: !state[activity][subActivity],
        },
      };
    default:
      return {
        ...state,
      };
  }
}

function useVisibilityReducer() {
  const initialVisibility = {
    run: {
      inside: true,
      outside: true,
    },
    ride: {
      //inside: true,
      outside: true,
    },
    // swim: {
    //   inside: true,
    //   outside: true,
    // },
  };

  const [state, dispatch] = useReducer(visibilityReducer, initialVisibility);

  return [state, dispatch];
}

export default useVisibilityReducer;
