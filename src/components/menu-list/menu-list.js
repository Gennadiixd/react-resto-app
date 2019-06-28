import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/with-resto-service'
import Spinner from '../spinner'
import * as actions from '../../actions/index'
import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const { RestoService, menuLoaded, menuRequested } = this.props;
        
        menuRequested();
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
    }

    render() {
        const { menuItems, loading } = this.props;

        if (loading) {
            return <Spinner />
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map((menuItem) => {
                        return <MenuListItem menuItem={menuItem} key={menuItem.id} />
                    })
                }
            </ul>
        )
    }
};

const mapStateToprops = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

export default WithRestoService()(connect(mapStateToprops, actions)(MenuList));