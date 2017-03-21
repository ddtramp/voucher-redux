/**
 * Created by wangxichao on 07/03/2017.
 */

import React , { Component } from 'react';
import style from './VoucherMiddle.css';

class VMHeader extends Component {

    render() {

        return (
            <div className={ style.header }>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan="2"  className={ style.zy }>
                                摘要
                            </td>
                            <td rowSpan="2">会计科目</td>
                            <td>借方金额</td>
                            <td>贷方金额</td>
                        </tr>
                        <tr>
                            <td className={ style.je }>
                                <ul  className={ style.jeul }>
                                    <li>
                                        亿
                                    </li>
                                    <li>
                                        千
                                    </li>
                                    <li className={ style.blue }>
                                        百
                                    </li>
                                    <li>
                                        十
                                    </li>
                                    <li>
                                        万
                                    </li>
                                    <li className={ style.blue }>
                                        千
                                    </li>
                                    <li>
                                        百
                                    </li>
                                    <li>
                                        十
                                    </li>
                                    <li className={ style.red }>
                                        元
                                    </li>
                                    <li>
                                        角
                                    </li>
                                    <li>
                                        分
                                    </li>
                                </ul>
                            </td>
                            <td className={ style.je }>
                                <ul  className={ style.jeul }>
                                    <li>
                                        亿
                                    </li>
                                    <li>
                                        千
                                    </li>
                                    <li className={ style.blue }>
                                        百
                                    </li>
                                    <li>
                                        十
                                    </li>
                                    <li>
                                        万
                                    </li>
                                    <li className={ style.blue }>
                                        千
                                    </li>
                                    <li>
                                        百
                                    </li>
                                    <li>
                                        十
                                    </li>
                                    <li className={ style.red }>
                                        元
                                    </li>
                                    <li>
                                        角
                                    </li>
                                    <li>
                                        分
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default VMHeader