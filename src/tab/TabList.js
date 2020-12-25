import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabList = () => {
    const tabsId = 'uncontrolled-tab-example';
    return (
        <>
            <h1>おすすめ</h1>
            <Tabs defaultActiveKey="鎌田　希望" id={tabsId} className="mt-2">
                <Tab eventKey="鎌田　希望" title="鎌田　希望">
                    <ul>
                        <br></br>
                        <li>プログラミング初心者に分かりやすくイラストでweb用語を解説してくれます<br></br>
                            <br></br>
                            「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典<br></br>
                            <a href="https://wa3.i-3-i.info/index.html">https://wa3.i-3-i.info/index.html</a>
                            <br></br><br></br>
                        </li>
                        <br></br>
                        <li>見やすいサイト作りを助けてくれます<br></br>
                            <br></br>
                            色のコントラストチェッカー<br></br>
                            <a href="https://lab.syncer.jp/Tool/Color-Contrast-Checker/">https://lab.syncer.jp/Tool/Color-Contrast-Checker/</a>
                            <br></br><br></br>
                        </li>
                        <br></br>
                        <li>運動不足解消！効果ありました<br></br>
                            <br></br>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/KFBNhGs7Y-s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </li>
                        <br></br>
                    </ul>
                </Tab>
                <Tab eventKey="高野　大梧" title="高野　大梧">
                <ul>
                        <br />
                        <li>
                            Reactの基礎について解説しています
                            <br />
                            <br />
                            忘備録として使えると思います！
                            <br />
                            <a href="https://qiita.com/tsuuuuu_san/items/58f82201ded0da420201">Reactの基礎を学ぶ</a>
                        </li>
                        <br />
                        <br />
                        <li>
                            gitについてマンガで解説してます
                            <br />
                            <br />
                            根本的な部分から分かりやすく書かれているのでおすすめです!
                            <br />
                            <a href="https://www.r-staffing.co.jp/engineer/entry/20190621_1">第1話 リポジトリを作ってコミットしてみよう【連載】マンガでわかるGit ～コマンド編～</a>
                        </li>
                    </ul>
                </Tab>
                <Tab eventKey="ファムフォンタオ" title="ファムフォンタオ" >
                    <ul>
                        <br />
                        <li>
                            わかりやすくReactについて解説してます。
                            <br />
                            チャットボットを作ったりハンズオンで教えているのでおすすめです。
                            <br />
                            <br />
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/Otrc2zAlJyM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </li>
                        <br />
                        <li>
                            基本的なwebの知識をイラストを交えながら解説してくれる本です。
                            <br />
                            <a href="https://www.amazon.co.jp/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E5%9B%B3%E8%A7%A3%E5%BC%8F-%E3%81%93%E3%81%AE%E4%B8%80%E5%86%8A%E3%81%A7%E5%85%A8%E9%83%A8%E3%82%8F%E3%81%8B%E3%82%8BWeb%E6%8A%80%E8%A1%93%E3%81%AE%E5%9F%BA%E6%9C%AC-%E5%B0%8F%E6%9E%97-%E6%81%AD%E5%B9%B3-ebook/dp/B06XNMMC9S">
                                web技術の基本
                            </a>
                        </li>

                    </ul>
                </Tab>
            </Tabs>
        </>
    )

}
export default TabList;