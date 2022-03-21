import React from "react";
import { NavLink, Route, Routes } from 'react-router-dom'
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/ycLee" style={({ isActive }) => ({ color: isActive ? 'black' : 'yellow' })}>ycLee</NavLink>
                </li>
                <li>
                <   NavLink to="/profiles/gildong" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>gildong</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
                <Route path=":username" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Profiles;