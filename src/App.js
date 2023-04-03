import './assets/App.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
