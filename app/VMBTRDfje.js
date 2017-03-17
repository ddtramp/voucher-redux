/**
 * Created by wangxichao on 08/03/2017.
 */
import React, { Component } from 'react';

import style from './VoucherMiddle.css';
import Je from './Je';


class VMBTRDfje extends Component {

    render () {

        return (
            <td  className={ style.je }>
                <Je
                    ref="je"
                    editAble = { this.props.editAble.dfjeEditAble }
                    je={ this.props.je }
                    currentIndex= { this.props.currentIndex }

                    isJeInputShow={this.props.isJeInputShow }
                    direction={this.props.direction}
                    _jeInputOnBlur={this.props._jeInputOnBlur}
                    _jeInputChange={ this.props._jeInputChange }
                    _jeUlClick={this.props._jeUlClick}
                    _jeInputKeyDown={ this.props._jeInputKeyDown }

                ></Je>
            </td>
        )
    }
}

export default VMBTRDfje;