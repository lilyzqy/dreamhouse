export const CLEAR_ERROR = 'CLEAR_ERROR';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

const clearError = ()=>({
  type:CLEAR_ERROR,
  err:[]
});

const receiveError = err => ({
  type:RECEIVE_ERROR,
  err
});
