import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url;
    }
  }

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt="PWAMap Icon"/></div>
          <div className="logo">京都湧水マップ</div>
        </div>

        <p>このウェブアプリは京都市内の誰もが汲める湧水の紹介に特化したマップです。Google Mapsと連携すると迷わず目的地に到達できます。</p>
        <p>このマップは「京都市文化財マネージャー育成講座」の課題の一環として作成されました。</p>
        <p>京都市文化財マネージャー育成講座とは、歴史的建造物の調査や保存・活用とそれを生かしたまちづくりについて、講義と演習、修了課題で実践的に学ぶ講座です。</p>
        <p>約６か月にわたり合計14日間、座学と現場研修が行われ、修了者は、京都市文化財マネージャー等へ登録することができます。同講座は京都市に拠点を置く認定NPO法人《古材文化の会》が主催しており、2024年度で14期生として36名を迎えました。</p>
        
        <p>京都市文化財マネージャー育成講座について</p>
        <p><a href="https://www.city.kyoto.lg.jp/bunshi/page/0000321558.html" target="_blank" rel="noreferrer">詳細はこちら</a></p>
        
        <h2>古材文化の会</h2>
        <p>日本の伝統的な建築様式で使用される古材の保存、活用、普及を目的としています。</p>
        <p><a href="http://www.kozai.or.jp/" target="_blank" rel="noreferrer">古材文化の会ホームページ</a></p>

        <p>京都モダン建築祭は、時代を経て守られてきた京都のモダン建築を一般公開するイベントで、これらの建物が生きた文化財として未来に受け継がれることを目指しています。このイベントは、変化する都市景観の中で重要な建築を祝うために、2022年に京都市と民間団体が連携して始めたものです。</p>

        <h2>京都地下水MAP</h2>      
        <p>※京都市には数千の井戸があるといわれています。水質検査済み箇所のみ記載しています。</p>

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
