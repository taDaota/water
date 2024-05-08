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
  const handleNavigation = (sectionId: string) => {
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
            <button onClick={() => handleNavigation('culturaleducation')}>文化財マネージャー育成講座</button>
            <button onClick={() => handleNavigation('oldmaterials')}>古材文化の会</button>
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
            <li>各所、一度に汲む量の上限などのルールに従ってください。</li>
            <li>水質検査済み、かつ作者が複数回飲んだことがある湧き水のみを紹介しています。</li>
            <li>念のため、煮沸を勧めます。</li>
          </ul>
        </section>
        <section id="culturaleducation">
          <h3>京都市文化財マネージャー育成講座</h3>
          <p>歴史的建造物の調査や保存・活用とそれを生かしたまちづくりについて、講義と演習、修了課題で実践的に学ぶ講座です。約６か月にわたり合計14日間、座学と現場研修が行われ、修了者は、京都市文化財マネージャー等へ登録することができます。</p>
          <p>同講座は京都市に拠点を置く認定NPO法人《古材文化の会》が主催しており、2024年度で14期生として36名を迎えました。</p>
        </section>
        <section id="oldmaterials">
          <h3>古材文化の会</h3>
          <p>日本の伝統的な建築様式で使用される古材の保存、活用、普及を目的としています。</p>
          <p><a href="http://www.kozai.or.jp/" target="_blank" rel="noopener noreferrer">古材文化の会ホームページ</a></p>
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
