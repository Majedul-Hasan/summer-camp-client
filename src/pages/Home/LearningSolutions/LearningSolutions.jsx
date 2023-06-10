import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const LearningSolutions = () => {
  return (
    <div className='flex py-10'>
      <div>
        <div>
          <h2 className='text-2xl py-5'>
            Online learning solutions that meet your needs.
          </h2>
          <p className='text-xs mb-4'>
            Use the list below to bring attention to your product’s key
            differentiator.
          </p>
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <div className='p-5 bg-green-100 rounded-full m-2'>
              <img
                src='https://creativelayers.net/themes/educrat-html/img/home-2/learning/icons/1.svg'
                alt=''
              />
            </div>
            <div>
              <h3 className='text-base font-semibold'>
                Leadership development
              </h3>
              <p className='text-xs'>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='p-5 bg-orange-100 rounded-full m-2'>
              <img
                src='https://creativelayers.net/themes/educrat-html/img/home-2/learning/icons/3.svg'
                alt=''
              />
            </div>
            <div>
              <h3 className='text-base font-semibold'>
                Innovation & design thinking
              </h3>
              <p className='text-xs'>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='p-5 bg-violet-100 rounded-full m-2'>
              <img
                src='https://creativelayers.net/themes/educrat-html/img/home-2/learning/icons/2.svg'
                alt=''
              />
            </div>
            <div>
              <h3 className='text-base font-semibold'>
                Digital transformation
              </h3>
              <p className='text-xs'>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-96 w-full'>
        <>
          <div
            className=''
            style={{
              height: '100%',
              width: '100%',
              //   background: '#4b4bae',
              color: '#fff',
              overflow: 'hidden',
            }}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <MouseParallaxContainer
                className='parallax flex justify-end'
                containerStyles={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                }}
                resetOnLeave>
                <MouseParallaxChild
                  factorX={0.4}
                  factorY={0.3}
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background:
                      'url("https://creativelayers.net/themes/educrat-html/img/home-2/learning/1.png") #a3a3ed',
                    backgroundPositionX: 'right',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div>
                  <MouseParallaxChild
                    factorX={0.1}
                    factorY={0.03}
                    updateStyles={{
                      display: 'flex',
                      marginBottom: '50px',
                      justifyContent: 'center',
                      width: 'auto',
                    }}>
                    <div className=''>
                      <div className='stats shadow'>
                        <div className='stat'>
                          <div className='stat-figure text-secondary'>
                            <div className='avatar online'>
                              <div className='w-16 rounded-full'>
                                <img src='https://creativelayers.net/themes/educrat-html/img/masthead/4.png' />
                              </div>
                            </div>
                          </div>
                          <div className='stat-value'>86%</div>
                          <div className='stat-title'>5 star ratings</div>
                        </div>
                      </div>
                    </div>
                  </MouseParallaxChild>
                  <MouseParallaxChild
                    factorX={0.2}
                    factorY={0.1}
                    updateStyles={{
                      display: 'flex',
                      marginBottom: '50px',
                      justifyContent: 'center',
                      width: 'auto',
                    }}>
                    <div className=''>
                      <img
                        className='h-52 mt-5'
                        height='20px'
                        src='https://creativelayers.net/themes/educrat-html/img/home-2/learning/2.png'
                        alt=''
                      />
                    </div>
                  </MouseParallaxChild>
                </div>

                <MouseParallaxChild
                  factorX={0.02}
                  factorY={0.03}
                  updateStyles={{}}>
                  <img
                    className='h-80'
                    height='20px'
                    src='https://creativelayers.net/themes/educrat-html/img/home-2/learning/1.png'
                    alt=''
                  />
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default LearningSolutions;
