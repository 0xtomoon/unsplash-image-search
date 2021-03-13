import actions from "./actions";

const initState = {
  keyword: null,
  data: [],
  pins: [],
  loading: false,
  error: null
};

function unsplashReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
    case actions.SET_KEYWORD:
      return { ...state, ...action.payload };
    case actions.ADD_PIN:
      const result = state.data.filter(item => item.id !== action.payload.id);
      const dat = state.data.filter(item => item.id === action.payload.id);
      return { 
        ...state,
        data: result,
        pins: [...state.pins, dat[0] ]
      };
    case actions.UN_PIN:
      let data = state.pins.filter(item => item.id !== action.payload.id);
      const pin = state.pins.filter(item => item.id === action.payload.id);
      return { 
        ...state,
        data: [...state.data, pin[0] ],
        pins: data,

      };
    default:
      return state;
  }
}

export default unsplashReducer;
