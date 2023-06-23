import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import '../css/logo.css';

// sidebar nav config
import navigation from '../_nav'
import navHome from '../_navhome'
import navAdmin from '../_navadmin'
import navLect from '../_navlecturer'
import navStu from '../_navstudent'

const AppSidebar = ({ userType }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <p className="logo gradient-text">Team8</p>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {!userType ? (
              <AppSidebarNav items={navigation} />
          ) : userType === 'admin' ? (
              <AppSidebarNav items={navAdmin} />
          ) : userType === 'lecturer' ? (
              <AppSidebarNav items={navLect} />
          ) : userType === 'student' ? (
              <AppSidebarNav items={navStu} />
          ) : null}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
