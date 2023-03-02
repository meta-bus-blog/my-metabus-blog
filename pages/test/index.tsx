import Head from 'next/head';
import classes from './test.module.scss';
import Image from 'next/image';
export async function getStaticProps(context: any) {
  // const id = context.params.id;
  // const response = await axios.get(`${getBaseurl}/api/board/0/${id}`);
  //   const a= await setTimeout(()=> 'sssss',5000)
  //   console.log("a :",a);
  console.log('test');
  return {
    props: { a: 'sss' },
  };
}

export default function TestHTML(props: any) {
  // console.log(props);
  const heroList = Array(32).fill(undefined);
  console.log(heroList);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Overwatch Characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.body}>
        <div className={classes.container}>
          <div className={classes.heroes}>
            {heroList.map((item, idx) => {
              return (
                <div className={classes.hero} key={idx}>
                  <div
                    className={classes.image}
                    style={{
                      backgroundImage: `url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero${
                        idx + 1
                      }.png)`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className={classes.logo}>
            <img src="https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/logo_overwatch.png" alt="OverWatch" />
          </div>
        </div>
      </main>
    </>
  );
}
