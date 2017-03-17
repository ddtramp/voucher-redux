//index.js
import React from 'react';
import {render} from 'react-dom';
import Voucher from './Voucher';

render(<Voucher
    currentEdit="0"

/>, document.getElementById('root') );

// isZyEditAble= { true }       // 摘要字段是否可以编辑
// isKjkmEditAble= { true }     // 会计科目字段是否可以编辑