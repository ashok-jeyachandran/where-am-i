import './feature-dashboard.scss';
import { useTranslation } from 'react-i18next';

export function OrgFeatureDashboard() {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <h1>{t('dashboard.welcome')}</h1>
    </div>
  );
}

export default OrgFeatureDashboard;
