import React from 'react';
import moment from 'moment';
import { Avatar } from 'antd';
import './index.less';

const ArticleListContent = ({ data: { update_time, useravatar, username, href, note_type } }) => (
  <div className='listContent'>
    <div className='extra'>
      <Avatar src={useravatar} size="small" />
      发布在 <a href={href}>{note_type}</a>
      <em>{moment(update_time).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;
