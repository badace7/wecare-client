import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/Home';
import BookPage from './pages/BookPage';
import LoginPage from './pages/Login';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/book' element={<BookPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}





// const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
//     const userState = useSelector((state: { user: userStore }) => state.user);
//     return !userState.isLogged ? <Navigate to="/" /> : Component;
// }

export default AppRouter;