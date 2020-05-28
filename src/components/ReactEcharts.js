import React from 'react';
import ReactEcharts from 'echarts-for-react';
 
import barOption from './barOption';
 
 
const EntranceGuard = ()=>{
    return (
        <div>
            <div>
                <p>门禁进入总数 <span>235</span></p>
                <p>门禁外出总数 <span>248</span></p>
            </div>
            <div>
                <ReactEcharts
                    option={barOption}
                    style={{width:'100%',height:'100%'}}
                />
            </div>
        </div>
    )
}
 
export default EntranceGuard;