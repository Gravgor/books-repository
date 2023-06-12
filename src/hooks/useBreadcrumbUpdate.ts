import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBreadcrumbs } from '../store/actions/breadcrumbAction';

export default function useBreadcrumbUpdate() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs = pathnames.map((name, index) => {
      const capitalizedLabel = name
        .split('%20')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      return { label: capitalizedLabel, url };
    });
    dispatch(setBreadcrumbs(breadcrumbs));
  }, [location, dispatch]);
}
