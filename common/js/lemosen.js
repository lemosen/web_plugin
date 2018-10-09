/**
 * Copyright (c) 2018 lemosen
 * email : 28462961@qq.com
 */
(function () {
    // document.documentElement.style.overflow = 'hidden'
    // document.body.style.overflow = 'hidden'
    // window.lemosenCore = function () {
    //     return {
    //         prototype: {
    //             screenWidth: window.screen.width,
    //             screenHeight: window.screen.height,
    //             sureCallBackParam: {},
    //             cancelCallBackParam: {},
    //             modalDismiss: {},
    //             modalParam: undefined
    //         },
    //         initPopup: function () {
    //             lemosenCore.saveCallBackParam(arguments[2] ? arguments[2] : {}, true);
    //             lemosenCore.saveCallBackParam(arguments[4] ? arguments[4] : {}, false);
    //
    //
    //         },
    //         saveCallBackParam(param, isSure) {
    //             if (param && param !== {}) {
    //                 isSure ? window.lemosenCore.prototype.sureCallBackParam = param : window.lemosenCore.prototype.cancelCallBackParam = param;
    //             }
    //         },
    //         createDocument: function (htmlStr) {
    //             document.body.insertAdjacentHTML('beforeend', htmlStr)
    //         },
    //
    //         alertSure: function (fun) {
    //             if (window.lemosenCore.prototype.sureCallBackParam) {
    //                 fun(window.lemosenCore.prototype.sureCallBackParam);
    //             }
    //             // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
    //         },
    //         alertCancel: function (fun) {
    //             if (window.lemosenCore.prototype.cancelCallBackParam) {
    //                 fun(window.lemosenCore.prototype.cancelCallBackParam);
    //             }
    //             // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
    //         },
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
    //         //         lemosenCore.prototype.modalParam = arguments;
    //         //     }
    //         // }
    //     };
    // }();
    // window.lemosen = function () {
    //     return {
    //
    //         /**
    //          * arguments
    //          * 0 content                require
    //          * 1 sureCallBack           require
    //          * 2 sureCallBackParam
    //          * 3 cancelCallBack
    //          * 4 cancelCallBackParam
    //          * 5 title
    //          */
    //         alert: function () {
    //             if (arguments[3] === undefined) {
    //                 arguments[3] = function () {
    //                 };
    //             }
    //             if (arguments[5] === undefined) {
    //                 arguments[5] = '提示';
    //             }
    //
    //             lemosenCore.initPopup();
    //             let htmlDivElement = '<div class="lemosen-popup"><div class="lemosen-popup-body">' + '<div class="lemosen-popup-head">' + arguments[5] + '</div>' + '<div class="lemosen-popup-content">' + arguments[0] + '</div>' + '<p class="lemosen-popup-buttons">' + '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosenCore.alertSure(' + arguments[1] + ')">确定</span>' + '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosenCore.alertCancel(' + arguments[3] + ')">取消</span>' + '</p>' + '</div></div>';
    //             lemosenCore.createDocument(htmlDivElement);
    //         },
    //
    //         toast: function () {
    //         },
    //
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
    //         //     let htmlDivElement = lemosenCore.initPopup();
    //         //
    //         //     htmlDivElement.addEventListener("click", htmlDivElement.addEventListener("click", function () {
    //         //         lemosenCore.modalClose();
    //         //     }));
    //         //
    //         //     htmlDivElement.innerHTML = '<div onclick="lemosenCore.popupBodyClick(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
    //         //         // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosenCore.modalClose()">X</span></div>' +
    //         //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' + '</div>';
    //         //     lemosenCore.createDocument(htmlDivElement);
    //         // }
    //
    //     };
    // }();
})();
