export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const ADD_TASK = 'ADD_TASK';

const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
const fetchTasksSuccess = tasks => ({ type: FETCH_TASKS_SUCCESS, payload: tasks });
const fetchTasksFailure = error => ({ type: FETCH_TASKS_FAILURE, payload: error });
export const addTask = task => ({ type: ADD_TASK, payload: task });

export const fetchTasks = () => {
  return async dispatch => {
    dispatch(fetchTasksRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      dispatch(fetchTasksSuccess(data));
    } catch (error) {
      dispatch(fetchTasksFailure(error.toString()));
    }
  };
};