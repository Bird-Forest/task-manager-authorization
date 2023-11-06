import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';
const tasksInitialState = {
  tasks: null,
  isLoading: false,
  error: null,
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks.push(action.payload);
        // state.tasks.unshift(action.payload);
        // state.tasks = [action.payload, ...state.tasks];
      })
      .addCase(addTask.rejected, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleCompleted.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tasks.findIndex(
          task => task.id === action.payload.id
        );
        state.tasks.splice(index, 1, action.payload);
      })
      .addCase(toggleCompleted.rejected, state => {
        state.isLoading = true;
        state.error = null;
      }),
});

export const tasksReducer = tasksSlice.reducer;

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   //  Додаємо обробку зовнішніх екшенів
//   extraReducers: {
//     // List tasks
//     [fetchTasks.pending]: handlePending,
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected]: handleRejected,

//     // Add task
//     [addTask.pending]: handlePending,
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addTask.rejected]: handleRejected,
//     // Delete task
//     [deleteTask.pending]: handlePending,
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteTask.rejected]: handleRejected,
//     // Toggle completed
//     [toggleCompleted.pending]: handlePending,
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//     [toggleCompleted.rejected]: handleRejected,
//   },
// });

// export const tasksReducer = tasksSlice.reducer;
