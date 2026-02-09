import styles from './feature-cricket.module.scss';
import { useTranslation } from 'react-i18next';

export function OrgFeatureCricket() {

  const { t } = useTranslation();

  return (
    <div className={styles['container']}>
      <h1>{t('cricket.welcome')}</h1>
    </div>
  );
}

export default OrgFeatureCricket;
