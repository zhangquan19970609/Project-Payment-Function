import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  const {
    showSubmenu, 
    location, 
    page: {page, links}
  } = useGlobalContext();
  // 要设置 submenu 的 mouse over event，应在 Navbar 中设置，此处只是内容页！

  // 设置一个 useEffect，每次 onMouseOver 导致 location 更新，都更新一下 subMenu 的内容
  // 并使用 useRef 援引到这个 container
  const container = useRef(null);
  // 设置一个根据 link.length 调整 subMenu column 数量的 useState
  const [columns, setColumns] = useState('col-2');
  useEffect(() => {
    setColumns('col-2');

    const subMenu = container.current;
    const {center, bottom} = location;
    subMenu.style.left = `${center}px`  
    subMenu.style.top = `${bottom}px`
    // 为什么是 left = center 而不是 center = center?
      // 因为 submenu 是一个包含 products + developers + company 的 component，
      // 分为 三节 - 两节 - 一节
    
    // 设置 subMenu columns
    if(links.length === 3){
      setColumns('col-3');
    }
    if(links.length === 4){
      setColumns('col-4');
    }
  }, [location, links])

  
  return <aside 
    className={`${showSubmenu ? 'submenu show' : 'submenu'}`} 
    ref={container}
  >
    <section>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link,index) => {
          const{label, icon, url} = link;
          return <a key={index} href={url}>
            {icon}{label}
          </a>
        })}
      </div>
    </section>
  </aside>
}

export default Submenu
