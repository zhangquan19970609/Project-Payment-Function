import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data' 

import { useGlobalContext } from './context';

const Sidebar = () => {
  
  const { showSidebar, openSidebar, closeSidebar } = useGlobalContext();

  return <div className={`${showSidebar ? 'sidebar-wrapper show': 'sidebar-wrapper' }`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((row, index) => {
            const {page, links} = row;
            return <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((item, index) => {
                  const {label, icon, url} = item;
                  return <a key={index} href={url}>{icon}{label}</a>
                })}
              </div>
            </article>
          })}
        </div>
      </aside>
    </div>
}

export default Sidebar
