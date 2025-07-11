import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars, words" });
        const _paragraphSplit = new SplitText(".subtitle", { type: "lines" });

         heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
         
         gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(_paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0)
    }, []);


  return (
    <>
        <section id="hero" className="noisy">
            <h1 className="title">Mojito</h1>

            <img 
            src="/images/hero-left-leaf.png" 
            alt="left-leaf"
            className="left-leaf" 
            />

            <img 
            src="/images/hero-right-leaf.png" 
            alt="right-leaf"
            className="right-leaf" 
            />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Fuel your body, nourish your soul.</p>
                    <p className="subtitle">
                        Fresh in a glass <br /> nothing but the best
                    </p>
                    </div>

                    <div className="view-cocktails">
                        <p className="subtitle">
                            Emphasize that the juices are made with fresh, 
                            high-quality ingredients, whether it's organic,
                            locally sourced, or cold-pressed. 
                        </p>
                        <a href="#cocktails">
                            View Cocktails
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero