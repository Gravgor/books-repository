import { useNavigate } from 'react-router';
import DisplayToggle from '../components/DisplayToggle';
import useBreadcrumbUpdate from '../hooks/useBreadcrumbUpdate';
import { DisplayOption } from '../types/displayToggleTypes';

export default function Home() {
  // Update the breadcrumb
  useBreadcrumbUpdate();

  const navigate = useNavigate();

  const handleDisplayChange = (option: DisplayOption) => {
    if (option === DisplayOption.Authors) {
      navigate('/authors');
    } else if (option === DisplayOption.Books) {
      navigate('/books');
    }
  };

  return <DisplayToggle onDisplayChange={handleDisplayChange} />;
}
