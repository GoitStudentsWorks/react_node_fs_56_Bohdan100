import Loader from 'components/Loader/Loader';
import Container from '../../components/MainContainer/MainContainer';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const CategoriesPage = () => {
  return (
    <div>
      <Container>
        <ReusableTitle>Categories</ReusableTitle>
        <CategoriesList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default CategoriesPage;
