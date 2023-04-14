/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '@/images/logo.png'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import styles from './NavBar.module.scss'
import buttons from '@/styles/Button.module.scss'
import classNames from 'classnames/bind'
import { useAppSelector } from '@/redux/hook'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import exBefore from '../../../exData/exBefore.json'
import exAfter from '../../../exData/exAfter.json'
import { setGraphData } from '@/redux/features/graph/graphSlice'

const NavBar = () => {
  const cx = classNames.bind(styles)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleExample = () => {
    dispatch(
      setGraphData({
        before_json: exBefore,
        before_output: ['%12', '%14', '%15', '%34'],
        after_json: exAfter,
        after_output: ['%12', '%14', '%15', '%33'],
        file_pass: '-simplifycfg -dse -globalopt',
      }),
    )
    navigate('/example')
  }

  return (
    <section className={styles.container}>
      <Navbar expand="md" className={styles.NavBar}>
        <NavbarBrand href="/" className={styles.logo}>
          <img src={logo} alt="logo" height="46" width="125.45"></img>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className={styles.toggler}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavbarToggler>
        <Collapse navbar isOpen={isOpen} className={styles.right}>
          <Nav navbar className={styles.nav}>
            <NavItem className={styles.items}>
              <NavLink to="/tutorial">
                <button className={buttons.nav} onClick={handleExample}>
                  Tutorial
                </button>
              </NavLink>
            </NavItem>
            <NavItem className={styles.items}>
              <NavLink to="/board">
                <button className={buttons.nav}>Board</button>
              </NavLink>
            </NavItem>
            <NavItem className={styles.items}>
              <button className={buttons.nav}>
                <a
                  href="https://kc-ml2.gitbook.io/llvm-flow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              </button>
            </NavItem>
            <NavItem className={styles.items}>
              <button className={buttons.nav}>
                <a
                  href="https://github.com/kc-ml2/llvm-flow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </button>
            </NavItem>
            <NavItem className={styles.items}>
              <NavLink to="/uploadC">
                <button className={buttons.default}>Start</button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  )
}

export default NavBar
