import Head from 'next/head';
import Link from 'next/link';
import logo from '/public/images/starbucks_logo.png';
import Image from 'next/image';
import classes from './starbucks.module.scss';
import { useEffect, useState } from 'react';
const Starbucks = (props: any) => {
    const [test, setTest]  = useState(false)
  useEffect(() => {
    const searchEl = document.querySelector(`.${classes.search}`);
    const searchInput = searchEl!.querySelector('input');
    console.log(searchInput);
    searchEl?.addEventListener('click', () => {
      searchInput?.focus();
    });
    searchInput?.addEventListener('focus', () => {
    //   searchEl?.classList.add('focused');
    //   searchInput.setAttribute('placeholder', '통합검색');
      setTest(true);
    });
    searchInput?.addEventListener('blur', () => {
    //   searchEl?.classList.remove('focused');
    //   searchInput.removeAttribute('placeholder');
      setTest(false);
    });
  }, []);
  // const searchInput = searchEl!.querySelector('input');
  return (
    <div className={classes.body}>
      <Head>
        <title>starbucks</title>
        <meta name="description" content="starbucks" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Link href="/" className={classes.logo}>
            <Image src={logo} alt="starbucks" />
          </Link>
          <div className={classes['sub-menu']}>
            <ul className={classes.menu}>
              <li>
                <a href="/signin">Sign In</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  My Starbucks
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Customer Service & Ideas
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Find a Store
                </a>
              </li>
            </ul>
            <div className={classes.search}>
              <input type="text" />
              <div className="material-icons" id={classes['material-icons']}>
                search
              </div>
            </div>
          </div>
        </div>
      </header>
      <div></div>
    </div>
  );
};

export default Starbucks;
