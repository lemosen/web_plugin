/**
 * Copyright (c) 2018 lemosen
 * email : 28462961@qq.com
 */
// (function () {
//     'use strict'
//     alert("asd")
//
//     // Let ie support bind
//     // 主要为了Ie能够使用弹窗，不然移动端确实不需要兼容bind
//     if (!Function.prototype.bind) {
//         Function.prototype.bind = function (oThis) {
//             if (typeof this !== "function") {
//                 throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
//             }
//             var aArgs = Array.prototype.slice.call(arguments, 1),
//                 fToBind = this,
//                 fNOP = function () {
//                 },
//                 fBound = function () {
//                     return fToBind.apply(this instanceof fNOP && oThis
//                         ? this
//                         : oThis,
//                         aArgs.concat(Array.prototype.slice.call(arguments)))
//                 }
//             fNOP.prototype = this.prototype
//             fBound.prototype = new fNOP()
//             return fBound
//         }
//     }
//
//     /**
//      * Id Dom indexs
//      * parent 是为了兼容iframe
//      */
//     function id(a) {
//         return window.parent.document.getElementById(a)
//     }
//
// // Avoid multiple imports, resulting in a different version of the first class
//     // 保证只运行一个
//     if (typeof window.lemosen == 'object') {
//         console.error('Close the global object of XXY--xxy')
//         return false
//     }
//     // document.documentElement.style.overflow = 'hidden'
//     // document.body.style.overflow = 'hidden'
//     window.lemosen = (function () {
//         alert("asd1")
//         var _init = {
//             prototype: {
//                 // screenWidth: window.screen.width,
//                 // screenHeight: window.screen.height,
//                 sureCallBackParam: {},
//                 cancelCallBackParam: {},
//                 modalDismiss: {},
//                 modalParam: undefined
//             },
//             initPopup: function () {
//                 alert("asd2")
//                 lemosen.saveCallBackParam(arguments[2] ? arguments[2] : {}, true);
//                 lemosen.saveCallBackParam(arguments[4] ? arguments[4] : {}, false);
//
//
//             },
//             saveCallBackParam(param, isSure) {
//                 if (param && param !== {}) {
//                     isSure ? window.lemosen.prototype.sureCallBackParam = param : window.lemosen.prototype.cancelCallBackParam = param;
//                 }
//             },
//             createDocument: function (htmlStr) {
//                 document.body.insertAdjacentHTML('beforeend', htmlStr)
//             },
//             //
//             // alertSure: function (fun) {
//             //     if (window.lemosen.prototype.sureCallBackParam) {
//             //         fun(window.lemosen.prototype.sureCallBackParam);
//             //     }
//             //     // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
//             // },
//             // alertCancel: function (fun) {
//             //     if (window.lemosen.prototype.cancelCallBackParam) {
//             //         fun(window.lemosen.prototype.cancelCallBackParam);
//             //     }
//             //     // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
//             // },
//             // /**
//             //  * 阻止点击模态框引起关闭事件
//             //  * @param event
//             //  */
//             // popupBodyClick: function (event) {
//             //     event.stopPropagation();
//             // },
//             // modalClose: function () {
//             //     if (this.prototype.modalParam) {
//             //         this.prototype.modalDismiss(this.prototype.modalParam);
//             //     }
//             //     document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
//             // },
//             // modalDismiss: function () {},
//             // setModalParam: function () {
//             //     if (arguments.length !== 0) {
//             //         lemosen.prototype.modalParam = arguments;
//             //     }
//             // }
//             test: 'test',
//             /**
//              * arguments
//              * 0 content                require
//              * 1 sureCallBack           require
//              * 2 sureCallBackParam
//              * 3 cancelCallBack
//              * 4 cancelCallBackParam
//              * 5 title
//              */
//             alert: function (a, b) {
//                 alert("test3")
//                 // if (d === undefined) {
//                 //     d = function () {
//                 //     };
//                 // }
//                 // if (g === undefined) {
//                 let g = '提示';
//                 // }
//
//                 lemosen.initPopup();
//                 let htmlDivElement = '<div class="lemosen-popup"><div class="lemosen-popup-body">' +
//                     '<div class="lemosen-popup-head">' + g + '</div>' +
//                     '<div class="lemosen-popup-content">' + a + '</div>' +
//                     '<p class="lemosen-popup-buttons">' +
//                     // '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.alertSure(' + arguments[1] + ')">确定</span>' +
//                     // '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.alertCancel(' + arguments[3] + ')">取消</span>' +
//                     '</p>' +
//                     '</div>' +
//                     '</div>';
//                 lemosen.createDocument(htmlDivElement);
//             },
//
//             toast: function () {
//             },
//
//             // /**
//             //  * arguments
//             //  * 0 content                require
//             //  * 1 dismiss
//             //  * 2 width      vw
//             //  */
//             // modal: function () {
//             //     if (arguments[1] === undefined) {
//             //         arguments[1] = function () {};
//             //     }
//             //     let width = arguments[2] ? arguments[2] + '%' : 35 + '%';
//             //     let htmlDivElement = lemosen.initPopup();
//             //
//             //     htmlDivElement.addEventListener("click", htmlDivElement.addEventListener("click", function () {
//             //         lemosen.modalClose();
//             //     }));
//             //
//             //     htmlDivElement.innerHTML = '<div onclick="lemosen.popupBodyClick(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
//             //         // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
//             //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' + '</div>';
//             //     lemosen.createDocument(htmlDivElement);
//             // }
//
//         }
//         return _init
//
//     })()
// })()

;(function () {
    //'use strict'
    /**
     * Id Dom indexs
     * parent 是为了兼容iframe
     */
    function id(a) {
        return window.parent.document.getElementById(a)
    }

    /**
     *  Add style
     *  param {String} str
     *  param {String} val
     *  If Id does not exist, add the style
     *  如果有自定义ID，将不会进行配置默认样式
     */
    function addStyle(str, val) {
        if (Boolean(id(str))) {
            return false
        }

        var tag = window.parent.document.createElement('style')
        tag.id = str
        if ('styleSheet' in tag) {
            tag.setAttribute('type', 'text/css')
            tag.styleSheet.cssText = val
        } else {
            tag.innerHTML = val
        }
        window.parent.document.getElementsByTagName('head')[0].appendChild(tag)
    }

    // create dom
    if (!Boolean(id('xxy-addDom'))) {
        try {
            var div = window.parent.document.createElement('div')
            div.id = 'xxy-addDom'
            window.parent.document.body.appendChild(div)
        } catch (e) {
            console.error('Please put the script below the body tag (not the bottom)--xxy')
        }
    }

    // Avoid multiple imports, resulting in a different version of the first class
    // 保证只运行一个
    if (typeof window.xxy == 'object') {
        console.error('Close the global object of XXY--xxy')
        return false
    }

    // styles
    // 弹窗的样式，可自由配置
    var popup = '#xxy-addDom .xxy-popup-box{position:fixed;top:0;left:0;z-index:99;z-index:99999999;overflow:hidden;width:100%;height:100%;background:rgba(0,0,0,.5);font-size:14px}#xxy-addDom .xxy-popup-box .inner{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:80%;height:0;max-width:280px;background:#fff;color:#646464}#xxy-addDom .xxy-popup-box .inner .inner_box{border:.01px solid #adadad;background:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%);-ms-transform:translateY(-50%)}#xxy-addDom .xxy-popup-box .xxy-popup-title{width:100%;border-bottom:1px solid #e8e8e8;background-color:#eee;color:#646464;text-align:left;text-indent:.7em;font-size:13px;line-height:2.1em}#xxy-addDom .xxy-popup-box .print{overflow:auto;padding:15px 20px 0;max-height:250px}#xxy-addDom .xxy-popup-box .or{margin:0 auto;width:90%}#xxy-addDom .xxy-popup-box button{border-radius:0px;margin:1em 0;padding:.6em 0;width:48%;border-width:0;border-radius:.4em;color:#fff}#xxy-addDom .xxy-popup-box .xxy-popup-done{background:#febb2c}#xxy-addDom .xxy-popup-box .xxy-popup-cancal{margin-left:4%;background:#eb4b27}#xxy-addDom .xxy-popup-box .off{float:right;margin-right:.4em;font-size:1.3em}#xxy-addDom .print_inner p span:nth-child(1){text-align:right}#xxy-addDom .print_inner p span:nth-child(2){text-align:center}#xxy-addDom .print_inner span{display:inline-block;width:48%}#xxy-addDom .print_inner p .important{color:#febb2c}'
        ,
        toast = '#xxy-addDom .xxy-toast{z-index: 999999999;text-align:center;opacity:1;transition:all 1s;-webkit-transition:all 1s;position:fixed;bottom:2em;left:50%;-webkit-transition-timing-function:ease;-webkit-transition-duration:2s;-webkit-transition-property:color;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);min-width:2em;width:100%;box-sizing:border-box}#xxy-addDom .xxy-toast>*{max-width:69%;display:inline-block;margin:0 auto;padding:.2em 1em;border-radius:.9em;background:rgba(0,0,0,.6);color:#fff;font-size:15px;line-height:1.7em}'
        ,
        touch = '.xxy-down-viewbox{position:relative;overflow:hidden;margin:auto;min-width:200px;min-height:200px;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;-ms-perspective:1000;perspective:1000}.xxy-down-viewbox>div{overflow:auto;width:100%;height:100%;border:0 solid transparent;background:#eee}.xxy-down-viewbox>div:before{top: .2rem;content:attr(data-befor)}.xxy-down-viewbox>div:after,.xxy-down-viewbox>div:before{position:absolute;width:100%;color:#646464;text-align:center}.xxy-down-viewbox>div:after{bottom:.2rem;content:attr(data-after)}.xxy-down-viewbox>div>*{position:relative;z-index:1;background:#fff}'
        ,
        iosPopup = '#xxy-addDom .xxy-popup-box{position:fixed;top:0;left:0;z-index:99;z-index:99999999;overflow:hidden;width:100%;height:100%;background:rgba(0,0,0,.5);font-size:14px}#xxy-addDom .xxy-popup-box .inner{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:80%;height:0;max-width:280px;background:rgba(255,255,255,.95)}#xxy-addDom .xxy-popup-box .inner .inner_box{background:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%);-ms-transform:translateY(-50%);border-radius:13px}#xxy-addDom .xxy-popup-box .xxy-popup-title{font-size:18px;font-weight:500;text-align:center;padding-top:5px;line-height:2em}#xxy-addDom .xxy-popup-box .print{overflow:auto;padding:0 15px 15px 15px;max-height:250px}#xxy-addDom .xxy-popup-box .or{margin:0 auto;border-bottom-left-radius:13px;border-bottom-right-radius:13px;overflow:hidden}#xxy-addDom .xxy-popup-box button{border-radius:0px;;border-width:0;color:#007aff;background:#fff;background:rgba(255,255,255,.95);font-size:17px;line-height:44px;position:relative;overflow:hidden;box-sizing:border-box;width:50%;height:44px;padding:0 5px;cursor:pointer;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:#007aff;background:rgba(255,255,255,.95);-webkit-box-flex:1;border-top:1px solid #cdcdcd}#xxy-addDom .xxy-popup-box .xxy-popup-cancal{border-left:1px solid #cdcdcd}#xxy-addDom .xxy-popup-box .off{float:right;margin-right:.4em;font-size:1.3em}#xxy-addDom .print_inner p span:nth-child(1){text-align:right}#xxy-addDom .print_inner p span:nth-child(2){text-align:center}#xxy-addDom .print_inner span{display:inline-block;width:48%}#xxy-addDom .print_inner p .important{color:#febb2c}';

    // add style
    addStyle('xxy-style-popup', popup)
    addStyle('xxy-style-toast', toast)
    addStyle('xxy-style-touch', touch)

    // create Global var XXY
    window.xxy = (function () {
        // defaults config
        var defaults = {
                popupui: {
                    skin: void 0,
                    mask: .5,
                    an: false
                },
                toastui: {}
            }
            /**
             * preventDefault Prevent mobile end events from bubbling
             * For example, trigger div scroll
             */
            , preventDefaultEvent = function (e) {
                e.preventDefault()
            }
            , addDomName = 'xxy-addDom'

            // init return api
            , _init = {
                alert1: function (a, b) {
                    // if (d === undefined) {
                    //     d = function () {
                    //     };
                    // }
                    // if (g === undefined) {
                    let g = '提示';
                    // }

                    // this.initPopup();
                    // let htmlDivElement = '<div class="lemosen-popup"><div class="lemosen-popup-body">' +
                    //     '<div class="lemosen-popup-head">' + g + '</div>' +
                    //     '<div class="lemosen-popup-content">' + a + '</div>' +
                    //     '<p class="lemosen-popup-buttons">' +
                    //     // '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.alertSure(' + arguments[1] + ')">确定</span>' +
                    //     // '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.alertCancel(' + arguments[3] + ')">取消</span>' +
                    //     '</p>' +
                    //     '</div>' +
                    //     '</div>';
                    let html='<div>asd</div>'

                    // document.body.insertAdjacentHTML('beforeend', htmlDivElement)
                    document.body.insertAdjacentHTML('beforeend', html)
                },
                /**
                 * mixin
                 * param {Object} to
                 * param {Object} from
                 */
                mixin: function (to, from) {
                    for (var i in from) {
                        to[i] = from[i]
                    }
                },


                /**
                 * get parent Element back function
                 * @param {Object} box element
                 * @param {Object} key tagName id src ...
                 * @param {Object} val tagVal idVal url ...
                 * @param {Object} backcall callbak return box{Dom}
                 */
                getParent: function (box, key, val, backcall) {
                    try {
                        if (box[key] === val && box[key] != void 0) {
                            backcall(box)
                        } else {
                            if (!box || box.tagName == 'BODY') {
                                return false
                            } else {
                                var boxParendNode = box.parentNode
                                    , param = [].slice.call(arguments)

                                param[0] = boxParendNode
                                this.getParent.apply(this, param)
                            }
                        }
                    } catch (e) {
                        //TODO handle the exception
                    }
                },

                /**
                 * defaults config
                 * @param {Object} config
                 */
                config: function () {
                    var lastParam = arguments[arguments.length - 1]
                        , firstParam = arguments[0]
                    if (Object.prototype.toString.call(lastParam) !== "[object Object]") {
                        console.error('Parameters should be objects--xxy\n docs: https://github.com/0123cf/xxy')
                        return false
                    }

                    switch (firstParam) {
                        case lastParam: {
                            this.mixin(defaults.popupui, lastParam)
                            break
                        }
                        case 'toast': {
                            this.mixin(defaults['toastui'], lastParam)
                            break
                        }
                        default: {
                            console.log('XXY -- Config the first param cannot find corresponding module')
                        }
                    }
                },

                /**
                 * void
                 * 关闭弹窗
                 * 定义，在popup里赋值
                 */
                popupClose: function () {
                },
                /**
                 * Two popups
                 * @param {Object} a title text
                 * @param {Object} b inner text
                 * @param {Object} d baclcall
                 */
                popup: function (a, b, d) {
                    var cs = arguments
                        , title = '提示'
                        , inner = ''
                        , deon_text = '确认'
                        , cancal_text = '取消'
                        // If call-back
                        , ifCallBack = false
                        // arguments case
                        , argumentsLength = cs.length
                        /**
                         * default pupup ui
                         */
                        , ui = (function () {
                            return this
                        }.bind(defaults.popupui))()
                        , box_name = 'xxy-popup-box'
                        , id_done = 'xxy-popup-done'
                        , id_cancal = 'xxy-popup-cancal'
                        , anBaseStyle = 'transition: all 100ms;-webkit-transition: all 300ms'

                    /**
                     *    clear to pupup
                     * 删除上一个
                     */
                    if (Boolean(id(box_name))) {
                        id(box_name).parentNode.removeChild(id(box_name))
                    }

                    // PC scroll
                    // 电脑端滚动处理
                    document.documentElement.style.overflow = 'hidden'
                    document.body.style.overflow = 'hidden'


                    /**
                     * callback
                     * @param {Object} a param
                     * @param {Object} b order
                     */
                    function callback(a, b) {
                        for (var i = 0; i < a.length; i++) {
                            if (typeof a[i] == 'function') {
                                a[i](b)
                                break
                            }
                        }
                    }

                    // carry callback
                    // 寻找回调
                    for (var i = 0; i < arguments.length; i++) {
                        typeof arguments[i] == 'function' ? ifCallBack = true : ''
                    }

                    // init parmas
                    switch (ifCallBack ? --argumentsLength : argumentsLength) {
                        case 1:
                            inner = cs[0]
                            break
                        case 2:
                            title = cs[0]
                            inner = cs[1]
                            break
                        case 3:
                            inner = cs[0]
                            deon_text = cs[1]
                            cancal_text = cs[2]
                            break
                        case 4:
                            title = cs[0]
                            inner = cs[1]
                            deon_text = cs[2]
                            cancal_text = cs[3]
                            break
                        default:
                            console.error('Parameter format error！--xxy')
                    }

                    // ios style
                    if (ui.skin == 'ios') {
                        var stylebox = id('xxy-style-popup')

                        if ('styleSheet' in id('xxy-style-popup')) {
                            stylebox.setAttribute('type', 'text/css')
                            stylebox.styleSheet.cssText = iosPopup
                        } else {
                            stylebox.innerHTML = iosPopup
                        }
                    }

                    /*
                     * com _var
                     */
                    // background Color opaqueness
                    var style = {
                        background: 'background: rgba(0,0,0,' + ui.mask + ');'
                    }
                        , c = [
                        '<div style="' + style.background + '" class = "' + box_name + '" id = "' + box_name + '">',
                        '<div class = "inner" style="', anBaseStyle, 'opacity: 0;webkitTransform: scale(1.2,1.2);transform: scale(1.2,1.2)">',
                        '<div class = "inner_box">',
                        '<div class = "xxy-popup-inner">',
                        '<div class = "xxy-popup-title"> <i class = "iconfont icon-tishi"></i> ', title, '</div>',
                        '<div id = "xxy_popup_inner_print" class = "print">', inner, '</div>',
                        '</div>',
                        '<div class = "or">',
                        '<button class = "xxy-popup-done" id = "xxy-popup-done">', deon_text, '</button>',
                        '<button class = "xxy-popup-cancal" id = "xxy-popup-cancal">', cancal_text, '</button>',
                        '</div>',
                        '</div>',
                        '</div>',
                        '</div>'
                    ].join('')

                    // c add to div
                    if (document.body.insertAdjacentHTML) {
                        id(addDomName).insertAdjacentHTML('beforeend', c)
                    } else {
                        id(addDomName).innerHTML += c
                    }

                    // create Dom then _var
                    var box_child = id(box_name)
                        , innerBox = window.parent.document.querySelector("#xxy-popup-box .inner")

                    /**
                     * 恢复
                     */
                    function innerScaleSiza() {
                        innerBox.style.cssText = anBaseStyle + 'opacity: 1;webkitTransform: scale(1,1);transform: scale(1,1)'
                    }

                    // 虽然设置过渡，但是会被浏览过滤，所以相当于没有动画
                    if (!ui.an) innerScaleSiza()

                    // ios an
                    if (ui.an) {
                        window.setTimeout(function () {
                            innerScaleSiza()
                        }, 50)
                    }

                    // innerdiv scroll
                    id('xxy_popup_inner_print').ontouchmove = function (e) {
                        e.stopPropagation()
                    }

                    try {
                        window.parent.document.body.addEventListener('touchmove', preventDefaultEvent, false)
                    } catch (e) {
                        function iexx() {
                            box_child.parentNode.removeChild(box_child)
                            try {
                                window.parent.document.body.removeEventListener('touchmove', preventDefaultEvent, false)
                            } catch (e) {
                            }
                            // ie8 not support initial sorll
                            document.documentElement.style.overflow = 'auto'
                        }

                        /*ie*/
                        id(id_done).onclick = function () {
                            callback(cs, 0)
                            iexx()
                        }
                        id(id_done).onclick = function () {
                            callback(cs, 1)
                            iexx()
                        }
                        return false
                    }

                    /**
                     * commit event,committed transaction
                     * close popup, Callback
                     */
                    id(box_name).addEventListener('click', function (e) {
                        var e = e.target

                        if (e.id == id_done || e.id == id_cancal) {
                            removePopUP()
                            /*
                             * callback
                             * @params cs callback params
                             */
                            e.id == id_done && callback(cs, 0)
                            e.id == id_cancal && callback(cs, 1)
                        }
                    })

                    /**
                     * close Element, recovery State
                     */
                    function removePopUP() {
                        try {
                            box_child.parentNode.removeChild(box_child)
                            window.parent.document.body.removeEventListener('touchmove', preventDefaultEvent, false)
                            document.documentElement.style.overflow = 'initial'
                            document.body.style.overflow = 'initial'
                        } catch (error) {

                        }
                    }

                    this.popupClose = removePopUP

                },

                /**
                 * Alert
                 * @param {Object} a title text
                 * @param {Object} b inner text
                 * @param {Object} d baclcall
                 */
                alert: function () {
                    var params = [].slice.call(arguments)
                        , paramsLen = params.length

                    for (var i = 0; i < arguments.length; i++) {
                        typeof arguments[i] == 'function' ? paramsLen -= 1 : ''
                    }

                    if (paramsLen == 3) {
                        params.push('')
                    }
                    this.popup.apply(this, params)

                    var button_ = window.parent.document.querySelector('#xxy-addDom #xxy-popup-cancal')
                        , button_child2 = window.parent.document.querySelector('#xxy-addDom .xxy-popup-box button')

                    if (paramsLen == 3) {
                        button_.innerText = arguments[2] ? arguments[2] : '确认'
                    } else {
                        button_.innerText = '确认'
                    }
                    button_.style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 100%;border-left-width: 0px;'
                    button_child2.style.display = 'none'
                },

            }
        return _init
    })()

    // window.lemosen = (function () {
    //     var _init = {
    //         // prototype: {
    //         //     // screenWidth: window.screen.width,
    //         //     // screenHeight: window.screen.height,
    //         //     sureCallBackParam: {},
    //         //     cancelCallBackParam: {},
    //         //     modalDismiss: {},
    //         //     modalParam: undefined
    //         // },
    //         // initPopup: function () {
    //         //     lemosen.saveCallBackParam(arguments[2] ? arguments[2] : {}, true);
    //         //     lemosen.saveCallBackParam(arguments[4] ? arguments[4] : {}, false);
    //         //
    //         //
    //         // },
    //         // saveCallBackParam(param, isSure) {
    //         //     if (param && param !== {}) {
    //         //         isSure ? this.prototype.sureCallBackParam = param : this.prototype.cancelCallBackParam = param;
    //         //     }
    //         // },
    //         // createDocument: function (htmlStr) {
    //         // },
    //         //
    //         // alertSure: function (fun) {
    //         //     if (window.lemosen.prototype.sureCallBackParam) {
    //         //         fun(window.lemosen.prototype.sureCallBackParam);
    //         //     }
    //         //     // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
    //         // },
    //         // alertCancel: function (fun) {
    //         //     if (window.lemosen.prototype.cancelCallBackParam) {
    //         //         fun(window.lemosen.prototype.cancelCallBackParam);
    //         //     }
    //         //     // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
    //         // },
    //         // /**
    //         //  * 阻止点击模态框引起关闭事件
    //         //  * @param event
    //         //  */
    //         // popupBodyClick: function (event) {
    //         //     event.stopPropagation();
    //         // },
    //         // modalClose: function () {
    //         //     if (this.prototype.modalParam) {
    //         //         this.prototype.modalDismiss(this.prototype.modalParam);
    //         //     }
    //         //     document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
    //         // },
    //         // modalDismiss: function () {},
    //         // setModalParam: function () {
    //         //     if (arguments.length !== 0) {
    //         //         lemosen.prototype.modalParam = arguments;
    //         //     }
    //         // }
    //         /**
    //          * arguments
    //          * 0 content                require
    //          * 1 sureCallBack           require
    //          * 2 sureCallBackParam
    //          * 3 cancelCallBack
    //          * 4 cancelCallBackParam
    //          * 5 title
    //          */
    //         alert: function (a, b) {
    //             // if (d === undefined) {
    //             //     d = function () {
    //             //     };
    //             // }
    //             // if (g === undefined) {
    //             let g = '提示';
    //             // }
    //
    //             // this.initPopup();
    //             let htmlDivElement = '<div class="lemosen-popup"><div class="lemosen-popup-body">' +
    //                 '<div class="lemosen-popup-head">' + g + '</div>' +
    //                 '<div class="lemosen-popup-content">' + a + '</div>' +
    //                 '<p class="lemosen-popup-buttons">' +
    //                 // '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.alertSure(' + arguments[1] + ')">确定</span>' +
    //                 // '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.alertCancel(' + arguments[3] + ')">取消</span>' +
    //                 '</p>' +
    //                 '</div>' +
    //                 '</div>';
    //
    //             document.body.insertAdjacentHTML('beforeend', htmlDivElement)
    //         },
    //
    //         // toast: function () {
    //         // },
    //         //
    //         // /**
    //         //  * arguments
    //         //  * 0 content                require
    //         //  * 1 dismiss
    //         //  * 2 width      vw
    //         //  */
    //         // modal: function () {
    //         //     if (arguments[1] === undefined) {
    //         //         arguments[1] = function () {};
    //         //     }
    //         //     let width = arguments[2] ? arguments[2] + '%' : 35 + '%';
    //         //     let htmlDivElement = lemosen.initPopup();
    //         //
    //         //     htmlDivElement.addEventListener("click", htmlDivElement.addEventListener("click", function () {
    //         //         lemosen.modalClose();
    //         //     }));
    //         //
    //         //     htmlDivElement.innerHTML = '<div onclick="lemosen.popupBodyClick(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
    //         //         // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
    //         //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' + '</div>';
    //         //     lemosen.createDocument(htmlDivElement);
    //         // }
    //
    //     }
    //     return _init
    //
    // })()
})()
