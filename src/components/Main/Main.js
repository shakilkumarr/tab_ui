import React from 'react';
import Image from 'next/image';

import { CONTENT_1, TABS } from './Main.constants';

import styles from './main.module.css';

const Main = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const getTabClassName = (tabId) => {
    let className = styles.tab;
    if (tabId === activeTab) className += ` ${styles.active}`;
    return className;
  };

  const scrollToContent = id => () => {
    setActiveTab(id);
    document.getElementById(id).scrollIntoView();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image alt="logo" width={100} height={40} src="/logo-social.png" />
        </div>
        <div className={styles.tabContainer}>
          {
            TABS.map(({ id, name }) => (
              <div key={id} className={getTabClassName(id)} onClick={scrollToContent(id)}>{name}</div>
            ))
          }
        </div>
      </div>
      <div className={styles.body}>
        {
          TABS.map(({ id }) => (
            <div key={id} id={id} className={styles.content}>
              <div>{CONTENT_1}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Main;
