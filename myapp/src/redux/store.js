export const LOCAL_STORAGE_KEY = 'posts_search_person';
const initState = () => {
  const dataFromLS = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  return (
    dataFromLS || {
      posts: [],
      search: '',
      person: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        token: ''
      },
      comments: []
    }
  );
};

export default initState;
