import React, { useState } from 'react';
import './AboutUs.scss';
import { FaBars, FaTimes } from 'react-icons/fa'; // 不要なimportを削除

const Content = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {menuOpen && (
          <div className="menu">
            <button onClick={() => handleNavigation('branding')}>京都湧き水マップについて</button>
            <button onClick={() => handleNavigation('directions')}>道順の確認方法</button>
            <button onClick={() => handleNavigation('currentLocation')}>MAPで現在位置を表示する方法</button>
            <button onClick={() => handleNavigation('appUsage')}>アプリのように使う</button>
            <button onClick={() => handleNavigation('culturalEducation')}>京都市文化財マネージャー育成講座とは</button>
          </div>
        )}
        <div id="branding" className="branding">
          <div className="image"><img src={imageUrl} alt="PWAMap Icon" /></div>
          <div className="logo">京都湧き水マップ</div>
          <br/>
            <p>誰でも汲める京都市内の湧き水を紹介するウェブアプリです。湧き水の各所に決まりごとがあります。ルールに従ってお水を頂きましょう。</p>
            <p>このマップは古材文化の会が主宰する「京都市文化財マネージャー育成講座」の課題の一環として作成されました。</p>

        <section id="directions">
          <h3>道順の確認方法</h3>
            <p>1.【設定】アプリを開く<br/></p>
            <p>2.【プライバシーとセキュリティ】をタップ<br/></p>
            <p>3.【位置情報サービス】をオン<br/></p>
            <p>4. 湧き水紹介のページ下部の「位置情報をオンにして道順を確認」をタップ</p>
        </section>
          
        </div>
        <section id="currentLocation">
          <h3>MAPで現在位置を表示する方法</h3>
          <ul>
            <li>1.【位置情報サービス】をオンにし、使用しているブラウザを選択します。</li>
            <li>2.【次回または共有時に確認】または【このアプリの使用中】を選択し、【正確な位置情報】トグルスイッチがオンであることを確認</li>
            <li>3. 立ち上げ画面のMAP右上にある「⛯」アイコンをタップ</li>
            <li>4. 位置情報を使用するポップアップ画面が出れば【許可】を選択</li>
            <li>5. MAPで現在位置が青●として表示されます</li>
          </ul>
        </section>
          
        <section id="appUsage">
            <h3>アプリのように使う</h3>
            <ul>
              <li>1. デフォルトのブラウザを開く</li>
              <li>2. 設定メニューにアクセスする</li>
              <li> - Safariでは画面下にある共有アイコン（四角いボックスと矢印）をタップ</li>
              <li> - ChromeやEdgeでは画面右上の三点リーダー（︙）をタップ</li>
              <li>3.【ホーム画面に追加】を選択→アイコンがホーム画面に追加されます。</li>
          </ul>
        </section>
        <section id="culturalEducation">
          <h3>京都市文化財マネージャー<br/>育成講座とは</h3>
          <p>歴史的建造物の調査や保存・活用とそれを生かしたまちづくりを、講義と演習、修了課題で実践的に学ぶ講座です。修了者は京都市文化財マネージャーへ登録し、活躍することができます。2024年度は14期生として36名を迎えました。</p>
          <h3><br/>古材文化の会</h3>
          <p>日本の伝統的な木造建築文化の継承と発展を目指し、木材や古材の利活用と地域活性化を目的とした活動を行っています。</p>
          <p><a href="http://www.kozai.or.jp/" target="_blank" rel="noopener noreferrer">古材文化の会ホームページ</a></p>
        </section>
      </div>
    </div>
  );
};

export default Content;
