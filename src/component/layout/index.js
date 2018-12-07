import React, {Component} from 'react'

import MainHeader from './components/main_header'
import MainSidebar from "./components/main_sidebar";
import MainFooter from "./components/main_footer";
import ControlSidebar from "./components/control_sidebar";

class Layout extends Component{
    render(){
        return(
            <div className="wrapper">
                <MainHeader/>
                <MainSidebar/>
                <div className="content-wrapper">
                    <h1>Sample1</h1>
                </div>
                <MainFooter/>
                <ControlSidebar/>
                <div className="control-sidebar-bg"/>
            </div>
        )
    }
}

export default Layout;