import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import FooterODarkIcon from '@site/static/icons/FooterODark';
import FooterSDarkIcon from '@site/static/icons/FooterSDark';
import FooterXDarkIcon from '@site/static/icons/FooterXDark';
import FooterOLightIcon from '@site/static/icons/FooterOLight';
import FooterSLightIcon from '@site/static/icons/FooterSLight';
import FooterXLightIcon from '@site/static/icons/FooterXLight';

const Footer = () => {
  const theme = useColorMode();

  return (
    <div className={styles.footerContainer}>
      <div>
        <p className={clsx(styles.footerText, styles.displayFromSmall)}>
          <a
            href="https://support.immutable.com/hc/en-us/articles/4405227590799-Immutable-X-Whitepaper"
            className="hyperlink"
            target="_blank"
            rel="noreferrer"
          >
            IMX Whitepaper
          </a>{' '}
          •{' '}
          <a
            href="https://support.immutable.com/hc/en-us/articles/4404531555855-Immutable-X-Token"
            className="hyperlink"
            target="_blank"
            rel="noreferrer"
          >
            IMX Tokenomics
          </a>{' '}
          •{' '}
          <a href="/reference" className="hyperlink">
            API
          </a>{' '}
          •{' '}
          <a href="/docs/getting-started-guide" className="hyperlink">
            SDK
          </a>{' '}
          •{' '}
          <a
            href="https://immutascan.io/"
            target="_blank"
            className="hyperlink"
            rel="noreferrer"
          >
            Immutascan Block Explorer
          </a>{' '}
          •{' '}
          <a
            href="https://www.immutable.com/careers"
            target="_blank"
            className="hyperlink"
            rel="noreferrer"
          >
            Careers at Immutable
          </a>
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.center}>
          <button
            onClick={() =>
              window.open('https://discord.gg/6GjgPkp464', '_blank')
            }
            className={clsx(styles.socialIcons, styles.discord)}
          />
          <button
            onClick={() =>
              window.open('https://twitter.com/Immutable', '_blank')
            }
            className={clsx(styles.socialIcons, styles.twitter)}
          />
          <button
            onClick={() =>
              window.open('https://www.reddit.com/r/immutable', '_blank')
            }
            className={clsx(styles.socialIcons, styles.reddit)}
          />
        </div>
        <span className={styles.starkwareIconContainer}>
          Powered By
          <div
            onClick={() => window.open('https://www.starkware.co', '_blank')}
            className={clsx(styles.starkwareIcon, styles.starkware)}
          ></div>
        </span>
      </div>
    </div>
  );
};

export default Footer;
