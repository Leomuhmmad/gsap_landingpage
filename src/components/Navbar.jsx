import gsap from 'gsap'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    })


  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="Logo" className='w-10 h-10' />
                <p>Diego is the best</p>
            </a>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar