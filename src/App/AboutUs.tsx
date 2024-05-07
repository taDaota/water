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

        <p>このウェブアプリは誰もが汲める京都市内の湧き水を紹介するマップです。経路検索はGoogle Mapsと連携してご使用ください。</p>
        <p>紹介している湧き水処は、寄付の協力や汲む量の上限があります。ルールに従ってご利用ください。</p>
        <p>このマップは「京都市文化財マネージャー育成講座」の課題の一環として作成されました。</p>
        <h2><a href="https://www.city.kyoto.lg.jp/bunshi/page/0000321558.html" target="_blank" rel="noopener noreferrer">京都市文化財マネージャー育成講座</a></h2>
        <p>歴史的建造物の調査や保存・活用とそれを生かしたまちづくりについて、講義と演習、修了課題で実践的に学ぶ講座です。約６か月にわたり合計14日間、座学と現場研修が行われ、修了者は、京都市文化財マネージャー等へ登録することができます。</p>
        <p>同講座は京都市に拠点を置く認定NPO法人《古材文化の会》が主催しており、2024年度で14期生として36名を迎えました。</p>
        <h2>古材文化の会</h2>
        <p>日本の伝統的な建築様式で使用される古材の保存、活用、普及を目的としています。</p>
        <p><a href="http://www.kozai.or.jp/" target="_blank" rel="noopener noreferrer">古材文化の会ホームページ</a></p>
        <p>※紹介している湧き水は水質検査済み、かつ作者が複数回飲んだことがある湧き水のみです。他にもたくさんあります。</p>

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
