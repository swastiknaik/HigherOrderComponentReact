import logo from './logo.svg';
import './App.css';
import EnhancedLikes from './Components/Hoc/Likes';
import EnhancedComments from './Components/Hoc/Comments';

function App() {
  return (
    <div className="App">
     <EnhancedLikes/>
     <EnhancedComments/>
    </div>
  );
}

export default App;
