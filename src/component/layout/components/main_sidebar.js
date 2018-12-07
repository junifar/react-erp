import React, {Component} from 'react'

class MainSidebar extends Component{
    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="/bower_components/admin-lte/dist/img/user2-160x160.jpg"
                                 className="img-circle" alt="User"/>
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <i className="fa fa-circle text-success"/> Online
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                    className="fa fa-search"/>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="/#">
                                <i className="fa fa-dashboard"/>
                                <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"/>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active">
                                    <a href="index.html">
                                        <i className="fa fa-circle-o"></i> Dashboard</a>
                                </li>
                                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )}
}

export default MainSidebar;