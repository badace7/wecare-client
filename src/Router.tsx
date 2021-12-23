import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" element={<404Page />} /> */}
        </Routes>
    )
}





// const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
//     const userState = useSelector((state: { user: userStore }) => state.user);
//     return !userState.isLogged ? <Navigate to="/" /> : Component;
// }

export default AppRouter;