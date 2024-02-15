import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import forPjOne from "../images/forPjOne.jpg";
import forPjTwo from "../images/forPjTwo.jpg";
import projectOneHome from "../images/projectOneHome.jpg";
import projectOneOther from "../images/projectOneOther.jpg";
import projectTwoHome from "../images/projectTwoHome.jpg";
import projectTwoOther from "../images/projectTwoOther.jpg";
gsap.registerPlugin(ScrollTrigger);

const PastProjects = () => {
  const pjConRef = useRef(null);
  const heroImgOneRef = useRef(null);
  const heroImgTwoRef = useRef(null);
  const heroImgThreeRef = useRef(null);
  const heroIntroRef = useRef(null);
  const pjOneTitle = useRef(null);
  const pjOneInfo = useRef(null);
  const pjOneHome = useRef(null);
  const pjOneOther = useRef(null);
  const pjTwoHome = useRef(null);
  const pjTwoOther = useRef(null);
  const pjTwoTitle = useRef(null);
  const pjTwoInfo = useRef(null);
  const pjThreeTitle = useRef(null);
  const pjThreeInfo = useRef(null);
  const pjThreeImgOne = useRef(null);
  const pjThreeImgTwo = useRef(null);
  const pjThreeImgThree = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tlOne = gsap.timeline();
      const tlTwo = gsap.timeline(
        {scrollTrigger: {
          target : pjConRef.current,
          start : "700px bottom",
          end : "bottom top",
          scrub : true
        }}
      );
      // time line one (aka) tl 
      tlOne.from([heroImgOneRef.current, heroImgTwoRef.current,heroImgThreeRef.current],{
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger : 1
      })
      tlOne.from(heroIntroRef.current,{
        x: -40,
        opacity: 0,
        duration: 0.6,
      })
      tlTwo.to(heroImgOneRef.current,{
        y: 60
      },0)
      tlTwo.to(heroImgTwoRef.current,{
        y: -220
      },0)
      tlTwo.to(heroImgThreeRef.current,{
        y: 300
      },0)
      tlTwo.from([pjOneTitle.current, pjOneInfo.current, pjTwoTitle.current, pjTwoInfo.current, pjThreeTitle.current, pjThreeInfo.current],{
        x: -150,
        stagger: 0
      },0)
      tlTwo.to(pjOneHome.current, {
        y : -150
      },0)
      tlTwo.to(pjOneOther.current, {
        y : 150
      },0)
      tlTwo.to(pjTwoHome.current, {
        y : -150
      },0)
      tlTwo.to(pjTwoOther.current, {
        y : 150
      },0)
      tlTwo.from(pjThreeImgOne.current, {
        y : 120
      },0)
      tlTwo.from(pjThreeImgTwo.current, {
        y: -380
      },0)
      tlTwo.from(pjThreeImgThree.current, {
        y: 420
      },0)
    }, pjConRef.current);
    return () => context.revert();
  }, [])

  return (
    <>
      <div className="pastProjectContainer" ref={pjConRef}>
        <div className="projectHero page">
          <div className="heroImgDivOne" ref={heroImgOneRef}>
            <img src={forPjOne} alt="forPj" className="forPjImg" />
          </div> 
          <div className="heroImgDivTwo" ref={heroImgTwoRef}>
            <img src={forPjTwo} alt="forPj" className="forPjImg" />
          </div>
          <div className="heroImgDivThree" ref={heroImgThreeRef}>
            <img src={forPjOne} alt="forPj" className="forPjImg" />
          </div>
          <h2 className="pjHeroTitle letter" ref={heroIntroRef}>Welcome from<br />my past project page</h2>
        </div>
        <div className="pjBodyOne page">
          <div className="pjOneLeft pjOneDiv">
            <h1 className="pjOneTitle letter" ref={pjOneTitle}>My first project <br />"shopping one"</h1>
            <div className="pjOneInfo" ref={pjOneInfo}>
              <p className="letter">If you are finding cheap and beautiful and quality clothes, this site is for you</p>
              <div className="toProjectDiv">
                <a className="toProject toProjectOne" href="https://shopping-one-testing-by-kaungkyallinn.onrender.com">{"see how >>"}</a>
              </div>
            </div>
          </div>
          <div className="pjOneRight pjOneDiv">
            <div className="pjOneImgOneDiv pjOneImgDiv" ref={pjOneHome}>
              <img src={projectOneHome} alt="projectOne" className="pjOneImg"/>
            </div>
            <div className="pjOneImgTwoDiv pjOneImgDiv" ref={pjOneOther}>
              <img src={projectOneOther} alt="projectOne" className="pjOneImg"/>
            </div>
          </div>
        </div>
        <div className="pjBodyTwo page">
          <div className="pjTwoLeft pjTwoDiv">
            <div className="pjTwoImgOneDiv pjTwoImgDiv" ref={pjTwoHome}>
              <img src={projectTwoHome} alt="projectTwo" className="pjTwoImg"/>
            </div>
            <div className="pjTwoImgTwoDiv pjTwoImgDiv" ref={pjTwoOther}>
              <img src={projectTwoOther} alt="projectTwo" className="pjTwoImg"/>
            </div>
          </div>
          <div className="pjTwoRight pjTwoDiv">
            <h1 className="pjTwoTitle letter" ref={pjTwoTitle}>post blog</h1>
            <div className="pjTwoInfo" ref={pjTwoInfo}>
              <p className="letter">Are you a blogger? if you wanna show your ideas to the world from blogs, I recommand this site</p>
              <div className="toProjectDiv">
                <a className="toProject toProjectTwo" href="https://postblog-testing-by-kaungkyallinn.onrender.com">{"see how >>"}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pjBodyThree page">
          <div className="pjThreeDiv pjThreeLeft">
            <h1 className="pjThreeTitle letter" ref={pjThreeTitle}>Please be notic</h1>
            <p className="pjThreeInfo letter" ref={pjThreeInfo}>Those sites are not realworld projects, just fun projects</p>
          </div>
          <div className="pjThreeDiv pjThreeRight">
            <div className="pjThreeImgOneDiv" ref={pjThreeImgOne}>
              <img src={forPjOne} alt="forPj" className="forPjImg"/>
            </div>
            <div className="pjThreeImgTwoDiv" ref={pjThreeImgTwo}>
              <img src={forPjTwo} alt="forPj" className="forPjImg"/>
            </div>
            <div className="pjThreeImgThreeDiv" ref={pjThreeImgThree}>
              <img src={forPjOne} alt="forPj" className="forPjImg"/>
            </div>
          </div>
        </div>
        <div className="homeFooter">
          <h2>Logo</h2>
          <p>09 555 555 555</p>
          <p>www.kaungkyallinn2015@gmail.com</p>
          <p>Myanamr, Ayeyarwady</p>
        </div>
      </div>
    </>
  )
}

export default PastProjects