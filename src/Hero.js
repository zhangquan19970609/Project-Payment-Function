import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  // const context = useGlobalContext();
  // console.log(context);

  const {closeSubmenu} = useGlobalContext();
  return <section className='hero' onMouseOver={closeSubmenu}> 
    {/* 设置关闭 subMenu 的一种情况：hover to hero
    另一种情况：hover to Navbar （hover 到 buttons 时除外） */}
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Payments infrastructure for the internet</h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt='phoneImg' />
      </article>
    </div>
  </section>
}

export default Hero
