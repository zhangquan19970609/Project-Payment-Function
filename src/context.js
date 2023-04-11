import React, { useState, useContext } from 'react'
import sublinks from './data'

// 注入 AppContext 形式的 useContext 用法。
// export 之后，在 index.js 中注入 AppProvier, 并使用 AppProvider 包含 App
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState(false)
    const [location, setLocation] = useState({})
    // 在能够设置滑动的 submenu 显示之后，再对不同 page 的 submenu 进行 find
    const [page, setPage] = useState({page:'', links:[]})
    
    const openSidebar = () =>{
        setShowSidebar(true);
    }

    const openSubmenu = (text, coordinates) => { 
        // query 到正确的 button page
        const page = sublinks.find((item) => item.page === text);
        // console.log(page);
        setPage(page);
        // 设置 location 到 openSubmenu 后，输出 location 到 subMenu component！
        setLocation(coordinates);
        setShowSubmenu(true);
    }

    const closeSidebar = () =>{
        setShowSidebar(false);
    }

    const closeSubmenu = () => {
        setShowSubmenu(false);
    }


    return <AppContext.Provider value={{
        showSidebar, showSubmenu,
        openSidebar, openSubmenu,
        closeSidebar, closeSubmenu,
        location, page
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider};