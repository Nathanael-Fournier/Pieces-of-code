// Placer l'import en dernier
import useScrollAuto from '../../utils/useScrollAuto';

const App = () => {
    // Appeler la fonction juste avant le return
    useScrollAuto();

    return (
     <div className="App">App</div>
    );
}

export default App;
