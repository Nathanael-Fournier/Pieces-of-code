// Créer ce fichier dans src/utils
import { useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';

const useScrollAuto = () => { 
  // Utilisation de `useLocation` pour récupérer l'objet location et extraire `pathname` qui représente le chemin actuel de l'URL (ex: /home ou /about).
  const { pathname } = useLocation(); 

  useEffect(() => { 
    // Fait défiler la page jusqu'en haut à gauche (0,0)
    window.scrollTo(0, 0);
  // Uniquement si `pathname` change
  }, [pathname]); 
};

export default useScrollAuto; 
