import React, { useState } from 'react';
import './AboutUs.scss';
import config from '../config.json';
import { FaPlus, FaBars } from 'react-icons/fa';

const Content = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url;
    }
  };

  const imageUrl = `${process.env.PUBLIC_URL}/icon-pwamap.svg`;

  // スムーズスクロール関数
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false); // Optionally close the menu after clicking
  };

  return (
    <div className="about-us">
      <div className="container">
        <FaBars className="hamburger" onClick={toggleMenu} />
        {menuOpen && (
          <div className="menu">
            <button onClick={() => handleNavigation('branding')}>ホーム</button>
            <button onClick={() => handleNavigation('considerations')}>湧き水についての留意点</button>
            <button onClick={() => handleNavigation('update')}>データの更新について</button>
          </div>
        )}
        <div id="branding" className="branding">
          <div className="image"><img src={imageUrl} alt="PWAMap Icon" /></div>
          <div className="logo">京都湧水マップ</div>
          <ul>
            <li>このウェブアプリは誰でも汲める京都市内の湧き水を紹介しています。</li>
            <li>Google Mapsと連携すれば経路検索機能が使えます。</li>
          </ul>
        </div>
        <section id="considerations">
          <h3>湧き水についての留意点</h3>
          <ul>
            <li>寄付への協力や一度に汲む量の上限があります。各々のルールに従ってください。</li>
            <li>ここでは水質検査済み、かつ作者が複数回飲んだことがある湧き水のみを紹介しています。</li>
          </ul>
        </section>
        {config.form_url && (
          <section id="update">
            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button onClick={clickHandler}><FaPlus color="#FFFFFF" /></button></div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Content;
