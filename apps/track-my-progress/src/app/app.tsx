import './app.scss';
import logo from '../assets/progress-tracking-line-icon-vector.jpg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

export function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language])

 const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <header className='header'>
        <div className='header_top-line'>
          <img src={logo} alt="Track my progress"/>

          <select className='align-self-end' value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">{t('language.en')}</option>
            <option value="ta">{t('language.ta')}</option>
          </select>
        </div>

        <nav className='header_navigation'>
          <ul>
            <li>
              <NavLink to="/dashboard">{t('dashboard.title')}</NavLink>
            </li>
            <li>
              <NavLink to="/cricket">{t('cricket.title')}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
       <div className='container'>
          <main>
            <Outlet />
          </main>
        </div>
      <footer></footer>
    </>
  );
}

export default App;
