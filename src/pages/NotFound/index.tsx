import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';

import s from './NotFound.module.scss';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.bigText}>404</div>
      <div className={s.imageWrapper} />
      <div className={s.smallText}>
        The rocket team <span className={s.blackText}>has won this time.</span>
      </div>
      <div className={s.btnWrapper}>
        <Button color="yellow" size="normal" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
