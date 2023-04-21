import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import PostForm from './components/PostForm/PostForm';

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
          <Route path="postform" element={<PostForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
