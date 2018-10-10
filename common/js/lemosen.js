(function () {

    window.lemosen = (function () {
        return {
            prototype: {
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                successCallBack: {},
                cancelCallBackParam: {},
                modalDismiss: {},
                modalParam: undefined
            },
            isOnlyPopup: function () {
                return document.getElementsByClassName('lemosen-popup').length === 0;
            },
            popupCallback: function (isSuccess) {
                if (isSuccess) {
                    this.prototype.successCallBack()
                }
                document.getElementsByClassName('lemosen-popup').item(0).classList.add('lemosen-fadeOut')
                setTimeout(function () {
                    document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0))
                }, 900)

            },
            stopCloseEvent: function (event) {
                event.stopPropagation();
            },
            /**
             * 数据格式
             * {
             * top:100, //框里顶部的距离
             * title: "tip",
             * content: "alert test ",
             * okText: "ok",
             * cancelText: "cancel",
             * callback: function (e) {
             *     alert("i am callback")
             * }
             * }
             */
            alert: function () {
                if (!this.isOnlyPopup()) {
                    this.toast();
                    return
                }
                if (arguments[0].callback === undefined) {
                    arguments[0].callback = function () {

                    }
                }
                if (arguments[0].title === undefined) {
                    arguments[0].title = '提示'
                }
                if (arguments[0].content === undefined) {
                    arguments[0].content = '无内容'
                }
                if (arguments[0].okText === undefined) {
                    arguments[0].okText = '确定'
                }
                if (arguments[0].cancelText === undefined) {
                    arguments[0].cancelText = '取消'
                }
                this.prototype.successCallBack = arguments[0].callback
                document.body.innerHTML +=
                    '<div class="lemosen-popup" >' +
                    '<div class="lemosen-popup-body" onclick="lemosen.stopCloseEvent(event)">' +
                    '<div class="lemosen-popup-head">' + arguments[0].title + '</div>' +
                    '<div class="lemosen-popup-content">' + arguments[0].content + '</div>' +
                    '<div class="lemosen-popup-buttons">' +
                    '<button class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.popupCallback(true)">' +
                    '<span class="lemosen-popup-sure-text lemosen-popup-text">' + arguments[0].okText + '</span>' +
                    '</button>' +
                    '<button class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.popupCallback(false)">' +
                    '<span class="lemosen-popup-cancel-text lemosen-popup-text">' + arguments[0].cancelText + '</span>' +
                    '</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })
            },

            toast: function () {
                alert("toast")
            },

            // /**
            //  * arguments
            //  * 0 content                require
            //  * 1 dismiss
            //  * 2 width      vw
            //  */
            // modal: function () {
            //     if (arguments[1] === undefined) {
            //         arguments[1] = function () {
            //         }
            //     }
            //     let width = arguments[2] ? arguments[2] + '%' : 35 + '%';
            //
            //     document.body.innerHTML +=
            //         '<div class="lemosen-popup">' +
            //         '<div onclick="lemosen.stopCloseEvent(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
            //         // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
            //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' +
            //         '</div>' +
            //         '</div>';
            //     document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
            //         lemosen.popupCallback(false)
            //     })
            // },
            //

            // saveCallBackParam(param, isSure) {
            //     if (param && param !== {}) {
            //         isSure ? window.lemosen.prototype.sureCallBackParam = param
            //             : window.lemosen.prototype.cancelCallBackParam = param
            //     }
            // },
            // createDocument: function (htmlDivElement) {
            //     let documentFragment = document.createDocumentFragment();
            //     documentFragment.appendChild(htmlDivElement);
            //     document.body.appendChild(documentFragment)
            // },
            initPopup: function () {
                lemosen.saveCallBackParam(arguments[2] ? arguments[2] : {}, true);
                lemosen.saveCallBackParam(arguments[4] ? arguments[4] : {}, false);
            },
            // alertSure: function (fun) {
            //     if (window.lemosen.prototype.sureCallBackParam) {
            //         fun(window.lemosen.prototype.sureCallBackParam)
            //     }
            //     document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0))
            // },
            // alertCancel: function (fun) {
            //     if (window.lemosen.prototype.cancelCallBackParam) {
            //         fun(window.lemosen.prototype.cancelCallBackParam)
            //     }
            //     document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0))
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
            //         this.prototype.modalDismiss(this.prototype.modalParam)
            //     }
            //     document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0))
            // },
            // modalDismiss: function () {
            //
            // },
            // setModalParam: function () {
            //     if (arguments.length !== 0) {
            //         lemosen.prototype.modalParam = arguments
            //     }
            // }
        }
    })()
})()