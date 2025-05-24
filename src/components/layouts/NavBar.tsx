import { NavLink, useFetcher } from "react-router-dom";
import { shopRouteURL_Absolute } from "../../utilities/RouteUlti/routeUrl";
import { useStore } from "zustand";
import authenStore from "../../store/authenStore";
import Button from "./Button";

// import '../../pages/root.css'
function NavBar() {
    const authenInfor = useStore(authenStore, state => state.authenInfor);
    return (
        <>
            <header className='main-header'>
                {/* <button id  ='side-menu-toggle'>Menu</button> */}
                <nav className="main-header__nav">
                    <ul className="main-header__item-list">
                        <li className="main-header__item">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>Shop</NavLink>
                        </li>
                        <li className="main-header__item">
                            <NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
                        </li>
                        <li className="main-header__item">
                            <NavLink to='/cart' className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink>
                        </li>
                        <li className="main-header__item">
                            <NavLink to='/order' className={({ isActive }) => isActive ? 'active' : ''}>Orders</NavLink>
                        </li>
                        {authenInfor.isAdmin && <>
                            <li className="main-header__item">
                                <NavLink to='/admin/add-product' className={({ isActive }) => isActive ? 'active' : ''}>Add Product</NavLink>
                            </li>
                            <li className="main-header__item">
                                <NavLink to='/admin/products' className={({ isActive }) => isActive ? 'active' : ''}>Admin Products</NavLink>
                            </li>
                        </>}
                    </ul>
                    {!authenInfor.isLogin
                        ? <AuthenFunctions />
                        : <UserInfor email={authenInfor.email} />
                    }
                </nav>
            </header>

        </>
    );
}

export default NavBar;


function AuthenFunctions() {
    return <ul className="main-header__item-list">
        <li className="main-header__item">
            <NavLink to={shopRouteURL_Absolute.login} className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        </li>
        <li className="main-header__item">
            <NavLink to={shopRouteURL_Absolute.signup} className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink>
        </li>
    </ul>
}


type UserInforProps = { name?: string; email: string, isAdmin?: boolean }

function UserInfor({ email }: UserInforProps) {
    const fetcher = useFetcher()
    return <ul className="main-header__item-list">
        <li className="main-header__item">
            <NavLink to={shopRouteURL_Absolute.login} className={({ isActive }) => isActive ? 'active' : ''}>{email}</NavLink>
        </li>
        <li className="main-header__item">
            <fetcher.Form action={shopRouteURL_Absolute.logout} method="post" encType="application/x-www-form-urlencoded">
                <Button >Logout</Button>
            </fetcher.Form>
        </li>
    </ul>
}