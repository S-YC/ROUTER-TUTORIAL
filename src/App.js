import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr/>
    <Routes>
      <Route path="/" element={<Home />}  exact={true}/>
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<About />} />
      {/* 서브라우팅 */}
      <Route path="/profiles/*" element={<Profiles />} />
      <Route path="/history" element={<HistorySample />} />
      <Route path="/*" element={<h1>404 페이지를 찾을 수 없습니다.</h1>} />
    </Routes>
    </div>
  );
};

export default App;
