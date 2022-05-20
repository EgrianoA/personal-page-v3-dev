import { useState } from 'react'
import { Row, Col } from 'antd'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'



export default function Home() {
  const [jump, setJump] = useState(0)
  const assetPrefix = process.env.ASSET_PREFIX

  setTimeout(() => {
    setJump(jump + 1)
  }, 1500);

  const redirect = (url) => {
    window.open(url)
  }



  return (
    <div className="homepage">
      <div className='parent-scroll'>
        <section>
          <Row>
            <div className="intro">
              <h1>
                <Fade cascade>
                  Hi! I'm Egriano Aristianto
                </Fade>
              </h1>
              <h4>
                <Fade cascade>
                  I'm a Software Engineer
                </Fade>
              </h4>
              <Row>
                <Slide right cascade>
                  <div className="icons">
                    <div className='round'>
                      <a onClick={() => redirect("https://www.linkedin.com/in/egrianoaristianto/")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-linkedin.svg`} className='black-icon' />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://github.com/EgrianoA")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-github.svg`} />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://www.hackerrank.com/egrianoa?hr_r=1")}>
                        <img src={`${assetPrefix}/assets/Icon simple-hackerrank.svg`} />
                      </a>
                    </div>
                  </div>
                </Slide>
              </Row>
              <Row>
                <ParallaxProvider>
                  <center>
                    <div className="scroll">
                      <Parallax y={["0px", "125px"]} >
                        <p>SCROLL</p>
                      </Parallax>
                      <Parallax y={["0px", "50px"]} >
                        <img src={`${assetPrefix}/assets/Polygon 2.svg`} className="arrow-1" />
                      </Parallax>
                      <Parallax y={["-25px", "75px"]} >
                        <img src={`${assetPrefix}/assets/Polygon 3.svg`} className="arrow-2" />
                      </Parallax>
                    </div>
                  </center>
                </ParallaxProvider>
              </Row>
            </div>
          </Row>
        </section>
        <section>
          <Row className='what-i-do'>
            <ParallaxProvider>
              <center>
                <h2 className='gradientText'>What I do</h2>
              </center>
            </ParallaxProvider>
          </Row>
        </section>
        <section>
          <Row>
            <div className='tech-stacks'>
              <center>
                <h3>Tech Stacks</h3>
                <Row>
                </Row>
              </center>
            </div>
          </Row>
        </section>
        <section>
          <Row >
            <div className='closing'>
              <center>
                <h4>Thank you for visiting my site!</h4>
                {/* <a><button className="section5Button"></button></a> */}
                <p>For detailed information about me and my works you can contact me through</p>
                <div className="icons">
                  <Row>
                    <div className="contactInfo">
                      <div className="email">
                        <Col xs={24}>
                          <img src={`${assetPrefix}/assets/Icon material-email.svg`} />
                        </Col>
                        <span>EgrianoA@gmail.com</span>
                      </div>
                      <div className="linkedin">
                        <Col xs={24}>
                          <img src={`${assetPrefix}/assets/Icon awesome-linkedin.svg`} />
                        </Col>
                        <a href={"https://www.linkedin.com/in/egrianoaristianto/"}>https://www.linkedin.com/in/egrianoaristianto/</a>
                      </div>
                    </div>
                  </Row>
                </div>
              </center>
              <div className="finalWord">
                <center> <p>- EgrianoA's personal page v3 2022 -</p></center>
              </div>
            </div>
          </Row>
        </section>
      </div>
      {/* </ParallaxProvider> */}
    </div >

  )
}
