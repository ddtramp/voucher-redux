/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';
import Je from './Je';

import style from './Middle.css';


class MFooter extends Component {
    /**
     * 金额转大写
     * @param num {number}
     * @returns {string}
     */
    DX (num) {
        var strOutput = "";
        var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
        num += "00";
        var intPos = num.indexOf('.');
        if (intPos >= 0)
            num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
        strUnit = strUnit.substr(strUnit.length - num.length);
        for (var i=0; i < num.length; i++)
            strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);
        return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
    }
    render() {


        let jfje = 0;
        let dfje = 0;
        this.props.data.forEach((v, i) => {
            jfje = jfje + parseFloat(v.jfje ? v.jfje : 0);
            dfje = dfje + parseFloat(v.dfje ? v.dfje : 0);
        });

        return (
            <div className={ style.footer }>
                <table>
                    <tbody>
                    <tr >
                        <td colSpan="2" className={ style.zy }>
                            <div className={ style.footerLeft }>
                                <p><span>合计：</span><span>{ jfje === dfje ? this.DX(jfje) : '' }</span></p>
                            </div>
                        </td>
                        <td  className={ style.je }>
                            <Je
                                text = { jfje }
                            />
                        </td>
                        <td  className= { style.je }>
                            <Je
                                text = { dfje }

                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

const select = (state) => {
    return { data: state.data }
}
export default connect(select)(MFooter);


// <Je
// ref="je"
// je={ this.props.total.jfje }
// isJeInputShow={ false }
// editAble = { false }
//     ></Je>
//

//     <Je
// ref="je"
// je={ this.props.total.dfje }
// isJeInputShow={ false }
// editAble = { false }
//
//     ></Je>