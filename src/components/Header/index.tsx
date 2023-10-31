import { FC } from 'react';
import styles from './header.module.scss';

import { Button, NavMenu } from 'components';

import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <Link to={'home'}>Groceries</Link>
      </span>
      <NavMenu />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.8397 6.33343C24.576 5.78115 25.6207 5.93038 26.173 6.66677L30.673 12.6668H30.6783C33.7427 12.6668 36.0862 15.3983 35.6202 18.4271L33.8253 30.0938C33.45 32.5329 31.3513 34.3334 28.8833 34.3334H10.7959C8.3281 34.3334 6.22935 32.5329 5.8541 30.0938L4.05921 18.4271C3.59325 15.3982 5.93665 12.6668 9.00108 12.6668H9.00635L13.5063 6.66677C14.0586 5.93038 15.1033 5.78115 15.8397 6.33343C16.576 6.88572 16.7253 7.93038 16.173 8.66676L13.173 12.6668H26.5063L23.5063 8.66676C22.954 7.93038 23.1033 6.88572 23.8397 6.33343ZM9.82026 16.0001C9.83236 16.0002 9.84446 16.0002 9.85655 16.0001H29.8228H29.8592H30.6783C31.6998 16.0001 32.4808 16.9106 32.3255 17.9203L30.5307 29.5869C30.4057 30.3999 29.706 31.0001 28.8833 31.0001H10.7959C9.97333 31.0001 9.27375 30.3999 9.14866 29.5869L7.3538 17.9203C7.19846 16.9106 7.9796 16.0001 9.00108 16.0001H9.82026Z"
            fill="#101010"
          />
        </svg>
        <Button variant="contained">Sign Up</Button>
      </div>
    </header>
  );
};
