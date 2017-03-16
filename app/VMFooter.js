/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import Je from './Je';

import style from './VoucherMiddle.css';


class VMFooter extends Component {

    render() {

        return (
            <div className={ style.footer }>
                <table>
                    <tbody>
                    <tr  >
                        <td colSpan="2" className={ style.zy }>
                            <div className={ style.footerLeft }>
                                <p><span>合计：</span><span>{ this.props.total.capital }</span></p>
                            </div>
                        </td>
                        <td  className={ style.je }>
                            <Je
                                ref="je"
                                je={ this.props.total.jfje }
                                isJeInputShow={ false }
                                editAble = { false }
                            ></Je>
                        </td>
                        <td  className= { style.je }>
                            <Je
                                ref="je"
                                je={ this.props.total.dfje }
                                isJeInputShow={ false }
                                editAble = { false }

                            ></Je>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default VMFooter