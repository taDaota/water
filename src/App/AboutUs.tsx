import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }


  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt=""/></div>
          <div className="logo">京都市文化財マネージャー講座</div>
        </div>

        <p>京都市文化財マネージャー育成講座とは、歴史的建造物の調査や保存・活用とそれを生かしたまちづくりについて、講義と演習、修了課題で実践的に学ぶ講座です。</p>
        <p>約６か月にわたり合計14日間、座学と現場研修が行われ、修了者は、京都市文化財マネージャー等へ登録することができます。</p>

        <h2> 京都モダン建築祭</h2>
        <p><a href="https://kyoto.kenchikusai.jp/" target='_blank' rel="noreferrer">https://kyoto.kenchikusai.jp/</a></p>

        <p>京都モダン建築祭は、時代を経て守られてきた京都のモダン建築を一般公開するイベントで、これらの建物が生きた文化財として未来に受け継がれることを目指しています。このイベントは、変化する都市景観の中で重要な建築を祝うために、2022年に京都市と民間団体が連携して始めたものです。</p>

        <h2>京都地下水MAP</h2>      
        <p>※京都市には数千の井戸があるといわれています。水質検査済み箇所のみ記載しています。</p>

        {config.form_url?
          <>
            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button><FaPlus color="#FFFFFF" onClick={clickHandler} /></button></div>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Content;
