import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabList = () => {
    const tabsId = 'uncontrolled-tab-example';
    return (
        <>
            <h1>おすすめ</h1>
            <Tabs defaultActiveKey="home" id={tabsId} className="mt-5">
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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/KFBNhGs7Y-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </li>
                        <br></br>
                    </ul>
                </Tab>
                <Tab eventKey="高野　大梧" title="高野　大梧">
                    {/* おすすめ機能内容 */}
                </Tab>
                <Tab eventKey="ファムフォンタオ" title="ファムフォンタオ" >
                    {/* おすすめ機能内容 */}
                </Tab>
            </Tabs>
        </>
    )
}
export default TabList;