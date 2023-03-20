import Head from 'next/head';
import Link from 'next/link';
import logo from '/public/images/starbucks_logo.png';
import badge1 from '/public/images/badge1.jpg';
import badge2 from '/public/images/badge2.jpg';
import visual_title from '/public/images/visual_title.png';
import floating1 from '/public/images/floating1.png';
import floating2 from '/public/images/floating2.png';
import floating3 from '/public/images/floating3.png';
import spoon from '/public/images/visual_spoon.png';
import cup1 from '/public/images/visual_cup1.png';
import cup2 from '/public/images/visual_cup2.png';
import cup1_text from '/public/images/visual_cup1_text.png';
import cup2_text from '/public/images/visual_cup2_text.png';
import Image from 'next/image';
import classes from './starbucks.module.scss';
import { useEffect, useState } from 'react';
const Starbucks = (props: any) => {
  const [test, setTest] = useState(false);
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

  useEffect(() => {
    // 2. This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.

    function onYouTubeIframeAPIReady() {
      new YT.Player('player', {
        videoId: 'O7Yw6wdHTlY',
        playerVars: {
          autoplay: true,
          loop: true,
          playlist: 'O7Yw6wdHTlY',
        },
        events: {
          onReady: function (event: any) {
            event.target.mute();
          },
        },
      });
    }

    function floatingObject(selector:any){
        
    }

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
        <div className={classes.badges}>
          <div className={classes.badge}>
            <Image src={badge1} alt="badge" />
          </div>
          <div className={classes.badge}>
            <Image src={badge2} alt="badge" />
          </div>
        </div>
      </header>

      <section className={`${classes.visual}`}>
        <div className={classes.inner}>
          <div className={classes.title}>
            <Image src={visual_title} alt="" />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className={classes.btn}
            >
              자세히 보기{' '}
            </a>
          </div>
          <Image
            src={cup1}
            className={`${classes.cup1} ${classes.image}`}
            alt=""
          />
          <Image
            src={cup1_text}
            className={`${classes.cup1} ${classes.text}`}
            alt=""
          />
          <Image
            src={cup2}
            className={`${classes.cup2} ${classes.image}`}
            alt=""
          />
          <Image
            src={cup2_text}
            className={`${classes.cup2} ${classes.text}`}
            alt=""
          />
          <Image src={spoon} className={`${classes.spoon}`} alt="" />
        </div>
      </section>

      <section className={classes.youtube}>
        <div className={classes.youtube__area}>
          <div id={classes.player}></div>
        </div>
        <div className={classes.youtube__cover}></div>
        <div className={classes.inner}>
          <Image
            src={floating1}
            className={`${classes.floating} ${classes.floating1}`}
            alt=''
          />
          <Image
            src={floating2}
            className={`${classes.floating} ${classes.floating2}`}
            alt=''
          />
          <Image
            src={floating3}
            className={`${classes.floating} ${classes.floating3}`}
            alt=''
          />
        </div>
      </section>
    </div>
  );
};

export default Starbucks;
