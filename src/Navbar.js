import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, closeSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (event) => {
    // 初步的 onMouseOver 只能设置一个 displaySubmenu，无法动态地展示不同 submenu。
    // console.log('Hello World!');
    // openSubmenu();

    // 改进版：（对准每一个 button 的 text 内容）
    const page = event.target.textContent;
      // console.log(page);
    const tempBtn = event.target.getBoundingClientRect(); // 定位 button 坐标

    const center = (tempBtn.left + tempBtn.right) / 2; // 设置 subMenu 的坐标
    const bottom = tempBtn.bottom - 3;
      // console.log(tempBtn);
    
    // openSubmenu 从接收 0 个 parameter 变为接收 2 个 parameter
    // 第一个： page， 第二个： 坐标。

    openSubmenu(page, {center, bottom})
  }
  const handleSubmenu = (event) => {
    // 挪动到 link-button 上时（现 button 或其他 button），不 close subMenu
    // console.log(event.target);

    if(!event.target.classList.contains('link-btn')){ 
      // 如果 event.target （现在正 hover 的 <nav>） 不包括 'link-btn',
      // 则 closeSubmenu()
      closeSubmenu();
    }
  }
  return <nav className='nav' onMouseOver={handleSubmenu}>
    {/* 设置一个 handleSubmenu 而不是直接关闭，因为需要如下的关闭结果：
      hover 到现 button 时不变，hover 到 nav 的其他地方则关闭。
      若设置直接关闭，则根本不会打开 subMenu，
      因为 hover 到 navbar 就会关闭*/}
    <div className='nav-center'>
      <div className='nav-header'>
        <img className='nav-logo' src={logo} alt='logo' />
        <button className='btn toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div> 
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          {/* 为何不直接设置一个 onMouseOver = {openSubmenu} ? 
          因为不止有一个 subMenu，必须知道 target 哪一个 */}
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
        </li>
      </ul>
      
      <button className='btn signin-btn'>sign in</button>
    </div>
  </nav>
}

export default Navbar
