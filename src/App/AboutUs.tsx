import './AboutUs.scss';
import config from '../config.json';
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url;
    }
  };

  // 環境変数 PUBLIC_URL が設定されていることを確認してください
  const imageUrl = `${process.env.PUBLIC_URL}/icon-pwamap.svg`;

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={imageUrl} alt="PWAMap Icon" /></div>
          <div className="logo">京都湧水マップ</div>
        </div>

        <p>このウェブアプリは誰でも汲める京都市内の湧き水を紹介しています。Google Mapsと連携すれば経路検索機能が使えます。</p>
        <h3>湧き水についての留意点</h3>
        <p>・寄付の協力や一度に汲む量の上限があります。ルールに従ってご利用ください。</p>
        <p>・ここでは水質検査済み、かつ作者が複数回飲んだことがある湧き水のみを紹介しています。</p>
        <h3>マップ作成の経緯</h3>
        <p>このマップは「<a href="https://www.city.kyoto.lg.jp/bunshi/page/0000321558.html" target="_blank" rel="noopener noreferrer">京都市文化財マネージャー育成講座</a>」の課題の一環として作成されました。</p>
        <p>・同講座は歴史的建造物の調査や保存・活用とそれを生かしたまちづくりについて、講義と演習、修了課題で実践的に学ぶ講座です。2024年度は14期生として36名を迎えました。</p>
        <p>・同講座は京都市に拠点を置く認定NPO法人《<a href="http://www.kozai.or.jp/" target="_blank" rel="noopener noreferrer">古材文化の会</a>》が主催しています。古材文化の会は日本の伝統的な建築様式で使用される古材の保存、活用、普及を目的としています。</p>

        {config.form_url && (
          <>
            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button onClick={clickHandler}><FaPlus color="#FFFFFF" /></button></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
