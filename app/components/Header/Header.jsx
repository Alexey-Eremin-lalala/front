

import Styles from './Header.module.css'
import { useState } from 'react';
import { AuthForm } from '../AuthForm/AuthForm'
import { Overlay } from '../Overlay/Overlay'
import { Popup } from '../Popup/Popup'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from '@/app/context/app-context';
import { useStore } from '@/app/store/app-store';

export const Header = () => {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
    const path = usePathname()

    const authContext = useStore()

    function openPopup() {
        setPopupIsOpened(true)
    }
    function closePopup() {
        setPopupIsOpened(false)
    }


    const handleLogout = () => {
        authContext.logout()
    }





    return (
        <header className={Styles["header"]}>
            {path === '/' ? (<div className={Styles["logo"]}><img className={Styles["logo__image"]} src="/images/logo.svg" alt="Логотип Pindie" /></div>) : (<Link href="/" className={Styles["logo"]} >
                <img className={Styles["logo__image"]} src="/images/logo.svg" alt="Логотип Pindie" />
            </Link>)}
            <nav className={Styles["menu"]}>
                <ul className={Styles["menu__list"]}>
                    <li className={Styles["menu__item"]}>
                        <Link href="/new" className={`${Styles["menu__link"]} ${path === '/new' ? Styles['menu__link_active'] : ''}`}>Новинки</Link>
                    </li>
                    <li className={Styles["menu__item"]}>
                        <Link href="/popular" className={`${Styles["menu__link"]} ${path === '/popular' ? Styles['menu__link_active'] : ''}`}>Популярные</Link>
                    </li>
                    <li className={Styles["menu__item"]}>
                        <Link href="/shooter" className={`${Styles["menu__link"]} ${path === '/shooter' ? Styles['menu__link_active'] : ''}`}>Шутеры</Link>
                    </li>
                    <li className={Styles["menu__item"]}>
                        <Link href="/runner" className={`${Styles["menu__link"]} ${path === '/runner' ? Styles['menu__link_active'] : ''}`}>Ранеры</Link>
                    </li>
                    <li className={Styles["menu__item"]}>
                        <Link href="/pixel" className={`${Styles["menu__link"]} ${path === '/pixel' ? Styles['menu__link_active'] : ''}`}>Пиксельные</Link>
                    </li>
                    <li className={Styles["menu__item"]}>
                        <Link href="/TDS" className={`${Styles["menu__link"]} ${path === '/TDS' ? Styles['menu__link_active'] : ''}`}>TDS</Link>
                    </li>
                </ul>
                <div className={Styles["auth"]}>
                    {authContext.isAuth ? (
                        <button className={Styles["auth__button"]} onClick={handleLogout}>Выйти</button>
                    ) : (<button className={Styles["auth__button"]} onClick={openPopup}>Войти</button>)}
                </div>
            </nav>
            <Overlay isOpened={popupIsOpened} close={closePopup} />
            <Popup isOpened={popupIsOpened} close={closePopup}>
                <AuthForm close={closePopup}  />
            </Popup>
        </header>
    )


}