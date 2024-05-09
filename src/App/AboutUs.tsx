import React, { useState } from 'react';
import './AboutUs.scss';
import config from '../config.json';
import { FaPlus, FaBars, FaTimes } from 'react-icons/fa';  // FaTimesをインポート

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

  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="about-us">
      <div className="container">
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}  {/* ハンバーガーメニューのアイコンを切り替え */}
        </div>
        {menuOpen && (
          <div className="menu">
            <button onClick={() => handleNavigation('branding')}>ホーム</button>
            <button onClick={() => handleNavigation('culturalEducation')}>京都市文化財マネージャー育成講座とは</button>
            <button onClick={() => handleNavigation('update')}>データの更新について</button>
            <button onClick={() => handleNavigation('directions')}>道順の確認方法</button>
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
        <section id="culturalEducation">
          <h3>京都市文化財マネージャー<br/>育成講座とは</h3>
          <p>歴史的建造物の調査や保存・活用とそれを生かしたまちづくりを、講義と演習、修了課題で実践的に学ぶ講座です。修了者は京都市文化財マネージャーへ登録し、活躍することができます。2024年度は14期生として36名を迎えました。</p>
          <h3>古材文化の会</h3>
          <p>日本の伝統的な建築様式で使用される古材の利活用と地域活性化を目的とした活動を行っています。</p>
          <p><a href="http://www.kozai.or.jp/" target="_blank" rel="noopener noreferrer">古材文化の会ホームページ</a></p>
        </section>
        <section id="directions">
          <h3>道順の確認方法</h3>
          <p className="location-instruction">スマホの位置情報サービスをオンにする:</p>
          <ul>
            <li>スマホの「設定」アプリを開きます。</li>
            <li>「プライバシーとセキュリティ」をタップします。</li>
            <li>「位置情報サービス」をオンにします。</li>
            <li>湧き水紹介のページ下部の「位置情報をオンにして道順を確認」をタップします。</li>
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
