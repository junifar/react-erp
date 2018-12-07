import React, {Component} from 'react'

class MainHeader extends Component{
    render(){
        return(
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="/#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/#" data-toggle="control-sidebar"><i className="fa fa-gears"/></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )}
}

export default MainHeader;