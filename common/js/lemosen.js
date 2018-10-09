/**
 * Copyright (c) 2018 lemosen
 * email : 28462961@qq.com
 */
(function () {
    
    // document.documentElement.style.overflow = 'hidden'
    // document.body.style.overflow = 'hidden'
    window.lemosen = (function () {
        var _init = {
            prototype: {
                // screenWidth: window.screen.width,
                // screenHeight: window.screen.height,
                sureCallBackParam: {},
                cancelCallBackParam: {},
                modalDismiss: {},
                modalParam: undefined
            },
            initPopup: function () {
                lemosen.saveCallBackParam(arguments[2] ? arguments[2] : {}, true);
                lemosen.saveCallBackParam(arguments[4] ? arguments[4] : {}, false);


            },
            saveCallBackParam(param, isSure) {
                if (param && param !== {}) {
                    isSure ? window.lemosen.prototype.sureCallBackParam = param : window.lemosen.prototype.cancelCallBackParam = param;
                }
            },
            createDocument: function (htmlStr) {
                document.body.insertAdjacentHTML('beforeend', htmlStr)
            },
            //
            // alertSure: function (fun) {
            //     if (window.lemosen.prototype.sureCallBackParam) {
            //         fun(window.lemosen.prototype.sureCallBackParam);
            //     }
            //     // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
            // },
            // alertCancel: function (fun) {
            //     if (window.lemosen.prototype.cancelCallBackParam) {
            //         fun(window.lemosen.prototype.cancelCallBackParam);
            //     }
            //     // document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
            // },
            // /**
            //  * 阻止点击模态框引起关闭事件
            //  * @param event
            //  */
            // popupBodyClick: function (event) {
            //     event.stopPropagation();
            // },
            // modalClose: function () {
            //     if (this.prototype.modalParam) {
            //         this.prototype.modalDismiss(this.prototype.modalParam);
            //     }
            //     document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0));
            // },
            // modalDismiss: function () {},
            // setModalParam: function () {
            //     if (arguments.length !== 0) {
            //         lemosen.prototype.modalParam = arguments;
            //     }
            // }
            test:'test',
            /**
             * arguments
             * 0 content                require
             * 1 sureCallBack           require
             * 2 sureCallBackParam
             * 3 cancelCallBack
             * 4 cancelCallBackParam
             * 5 title
             */
            alert: function (a,b) {
                alert("test3")
                // if (d === undefined) {
                //     d = function () {
                //     };
                // }
                // if (g === undefined) {
                let    g = '提示';
                // }

                lemosen.initPopup();
                let htmlDivElement = '<div class="lemosen-popup"><div class="lemosen-popup-body">' +
                    '<div class="lemosen-popup-head">' + g + '</div>' +
                    '<div class="lemosen-popup-content">' + a + '</div>' +
                    '<p class="lemosen-popup-buttons">' +
                    // '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.alertSure(' + arguments[1] + ')">确定</span>' +
                    // '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.alertCancel(' + arguments[3] + ')">取消</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>';
                lemosen.createDocument(htmlDivElement);
            },

            toast: function () {
            },

            // /**
            //  * arguments
            //  * 0 content                require
            //  * 1 dismiss
            //  * 2 width      vw
            //  */
            // modal: function () {
            //     if (arguments[1] === undefined) {
            //         arguments[1] = function () {};
            //     }
            //     let width = arguments[2] ? arguments[2] + '%' : 35 + '%';
            //     let htmlDivElement = lemosen.initPopup();
            //
            //     htmlDivElement.addEventListener("click", htmlDivElement.addEventListener("click", function () {
            //         lemosen.modalClose();
            //     }));
            //
            //     htmlDivElement.innerHTML = '<div onclick="lemosen.popupBodyClick(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
            //         // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
            //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' + '</div>';
            //     lemosen.createDocument(htmlDivElement);
            // }

        };
        return _init

    })();
})();
