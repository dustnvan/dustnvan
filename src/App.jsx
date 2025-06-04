import HomePage from './pages/HomePage';
import Media from './components/Media';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <>
      <div className="px-2 xl:px-50">
        <HomePage />
        <ProjectsPage />
        <Media />
      </div>
    </>
  );
}

export default App;
