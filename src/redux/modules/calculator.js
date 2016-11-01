/**
 * Created by sadafkhan on 15/12/15.
 */

const SET_VALUE = 'SET_VALUE';
const EQUATE = 'EQUATE';
const RESET = 'RESET';

const initialState = {
  value: 0
}; 
const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      let val = state.value;
      if(state.value == 0)
        return {value: action.data};
      if(action.data == '+' || action.data == '-' || action.data == '*' || action.data == '/')
        return {value: state.value + ' ' + action.data + ' '};
      return {value: state.value + action.data};
    case EQUATE:
      let equateVal;
      state.error = null;
      try{
        equateVal = eval(action.data);
      } catch(e){
        return { error : 'Insert Correct Values'}
      }
      return {value: equateVal};
    case RESET:
      return {value: 0};
    default:
      return state;
  }
};

export default calculatorReducer;

export const setValue = (value) => {
  return {type: SET_VALUE, data: value}
};

export const equate = (value) => {
  return {type: EQUATE, data: value}
};

export const resetValue = () => {
  return {type: RESET}
};