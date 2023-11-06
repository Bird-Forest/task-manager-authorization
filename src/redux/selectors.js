import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constans';

// state. іт'я ред'юсера із сторі. ім'я слайсу
export const selectTasks = state => state.tasks.tasks;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;

// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuth = state => state.auth;
export const selectToken = createSelector(selectAuth, auth => auth.token);
export const selectUser = createSelector(selectAuth, auth => auth.user);
export const selectIsLoggedIn = createSelector(
  selectAuth,
  auth => auth.isLoggedIn
);

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log('Calculating visible tasks');

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  console.log('Calculating task count. Now memoized!');
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

// Мемонізація елементів
// const selectProductsStore = state => state.productsStore;

// export const selectProducts = createSelector(
//   selectProductsStore,
//   productsStore => productsStore.products
// );
// export const selectProductsIsLoading = createSelector(
//   selectProductsStore,
//   productsStore => productsStore.isLoading
// );
// export const selectProductsError = createSelector(
//   selectProductsStore,
//   productsStore => productsStore.error
// );
// export const selectProductsFilterTerm = createSelector(
//   selectProductsStore,
//   productsStore => productsStore.filterTerm
// );
// Додатковий запис в стор
// export const rootReducer = combineReducers({
//   postDetails: postDetailsReducer,
//   postsData: postsReducer,
//   productsStore: productsReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
