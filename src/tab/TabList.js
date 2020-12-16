import React from 'react';
import { Tabs,Tab } from 'react-bootstrap';

const TabList = () => {
    const tabsId = 'uncontrolled-tab-example';
    return (
       <> 
        <h1>おすすめ</h1>
        <Tabs defaultActiveKey="home" id={tabsId} className="mt-5">
            <Tab eventKey="鎌田　希望" title="鎌田　希望">
                {/* おすすめ機能内容 */}
            </Tab>
            <Tab eventKey="高野　大吾" title="高野　大吾">
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