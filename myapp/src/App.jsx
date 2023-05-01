import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList/PostsList';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <hr style={{ marginTop: '15px' }} />
      <Container
        maxWidth="sm"
        className="container"
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100vw' }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/postslist"
            element={
              <RequireAuth>
                <PostsList />
              </RequireAuth>
            }
          />
          <Route path="/:id" element={<Comments />} />
          <Route
            path="postform"
            element={
              <RequireAuth>
                <PostForm />
              </RequireAuth>
            }
          />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
