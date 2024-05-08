import './AboutUs.scss';
import config from '../config.json';
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url;
    }
  };

  const imageUrl = `${process.env.PUBLIC_URL}/icon-pwamap.svg`;

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={imageUrl} alt="PWAMap Icon" /></div>
          <div className="logo">京都湧水マップ</div>
          <ul>
            <li>このウェブアプリは誰でも汲める京都市内の湧き水を紹介しています。</li>
            <li>Google Mapsと連携すれば経路検索機能が使えます。</li>
          </ul>
        </div>

        <section>
          <h3>湧き水についての留意点</h3>
          <ul>
            <li>寄付への協力や一度に汲む量の上限があります。各々のルールに従ってください。</li>
            <li>ここでは水質検査済み、かつ作者が複数回飲んだことがある湧き水のみを紹介しています。</li>
          </ul>
        </section>

        {/* 他のセクションは省略 */}
        
        {config.form_url && (
          <section>
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
