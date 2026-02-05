// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// const Dashboard = lazy(() => import('@org/feature-dashboard').then(m => ({default: m.OrgFeatureDashboard})));
// const Cricket = lazy(() => import('@org/feature-cricket').then((m => ({default: m.OrgFeatureCricket}))));

export function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language])

 const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <select className='align-self-end' value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="ta">Tamil</option>
      </select>
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
