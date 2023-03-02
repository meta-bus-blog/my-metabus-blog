import Head from 'next/head';
import classes from './test.module.scss';

const Test = (props: any) => {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Overwatch Characters" />
      </Head>
      <div className={classes.container}>
        <div className={classes.item}></div>
      </div>
    </>
  );
};

export default Test;
