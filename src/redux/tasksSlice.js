import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksData = {
  tasks: [
    {
      color: '#ff5252',
      title: 'Eum voluptate dolor.',
      id: '1',
    },
    {
      color: '#ffee58',
      title: 'Temporibus praesentium praesentium nesciunt nisi cumque.',
      id: '2',
    },
    {
      color: '#00e676',
      title: 'Nemo ratione rerum.',
      id: '3',
    },
    {
      color: '#ff5252',
      title: 'Quam optio quaerat hic eveniet voluptatibus sequi enim.',
      id: '4',
    },
    {
      color: '#ffee58',
      title:
        'Cumque beatae fugiat error quisquam vero iusto nesciunt deleniti.',
      id: '5',
    },
    {
      color: '#ffee58',
      title: 'Dolor sequi architecto voluptatibus.',
      id: '6',
    },
    {
      color: '#00e676',
      title: 'Ipsam voluptatem velit et delectus.',
      id: '7',
    },
  ],
};
// console.log(tasksData);
const taskSlice = createSlice({
  name: 'tasks',
  initialState: tasksData,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            title,
            id: nanoid(),
            color: 'white',
          },
        };
      },
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    changeTaskColor: (state, action) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.color = action.payload.color;
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, changeTaskColor } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
