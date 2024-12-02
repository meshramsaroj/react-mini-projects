import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import TodosLayout from './Projects/Todos/TodosLayout';
import RecipeLayout from './Projects/ReciepeeApp/RecipeLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="todos"  element={<TodosLayout />} />
          <Route path="recipe/*" element={<RecipeLayout />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
