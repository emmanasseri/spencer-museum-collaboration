import logo from './logo.svg';
import './App.css';
import AssignSection from './components/Assign';
import OwnerVisualization from './components/OwnerVisualization';

function App() {
  return (
    <div>
      <OwnerVisualization/>
      
      <AssignSection />
    </div>
  );
}

export default App;
