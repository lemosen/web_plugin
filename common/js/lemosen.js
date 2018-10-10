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
                // let style1 = document.createElement('style');
                // style1.innerHTML = ':root{--primary:#488aff;--secondary:#32db64;--danger:#f53d3d;--light:#f4f4f4;--dark:#222;}.lemosen-popup{position:fixed;overflow:auto;top:0;right:0;bottom:0;left:0;z-index:1000;-webkit-overflow-scrolling:touch;background-color:rgba(8,8,8,0.65);outline:0;}.lemosen-popup-body{font-size:1rem;border-radius:15px;position:relative;top:40%;margin:0 auto;width:35%;background:white;text-align:center;}.lemosen-popup-head{padding:1%;}.lemosen-popup-content{padding:1%;}.lemosen-popup-buttons{height:5%;border-top:2px solid var(--light);}.lemosen-popup-buttons span{height:5%;box-sizing:border-box;display:inline-block;}.lemosen-popup-button{height:5%;padding:1%;}.lemosen-popup-sure-button{color:var(--primary);border-right:2px solid var(--light);padding-right:10px;}.lemosen-popup-cancel-button{color:var(--danger);padding-left:10px;}.lemosen-popup-close{float:right;padding-right:10px;}';
                // document.head.appendChild(style1);
                return document.getElementsByClassName('lemosen-popup').length === 0;
            },
            popupCallback: function (isSuccess) {
                if (isSuccess) {
                    this.prototype.successCallBack()
                }
                document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0))
            },
            stopCloseEvent: function (event) {
                event.stopPropagation();
            },
            /**
             * arguments
             * 0 content                require
             * 1 sureCallBack           require
             * 2 title
             * 3 sureButtonText
             * 4 cancelButtonText
             */
            alert: function () {
                if (!this.isOnlyPopup()) {
                    this.toast();
                    return
                }
                if (arguments[2] === undefined) {
                    arguments[2] = '提示'
                }
                if (arguments[3] === undefined) {
                    arguments[3] = '确定'
                }
                if (arguments[4] === undefined) {
                    arguments[4] = '取消'
                }
                this.prototype.successCallBack = arguments[1]

                document.body.innerHTML +=
                    '<div class="lemosen-popup">' +
                    '<div class="lemosen-popup-body" onclick="lemosen.stopCloseEvent(event)">' +
                    '<div class="lemosen-popup-head">' + arguments[2] + '</div>' +
                    '<div class="lemosen-popup-content">' + arguments[0] + '</div>' +
                    '<p class="lemosen-popup-buttons">' +
                    '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.popupCallback(true)">' + arguments[3] + '</span>' +
                    '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.popupCallback(false)">' + arguments[4] + '</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>'
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })
            },

            toast: function () {
                alert("toast")
            },
            //
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
            //     let htmlDivElement = lemosen.initPopup();
            //
            //     htmlDivElement.addEventListener("click", htmlDivElement.addEventListener("click", function () {
            //         lemosen.modalClose()
            //     }))
            //
            //     htmlDivElement.innerHTML = '<div onclick="lemosen.popupBodyClick(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
            //         // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
            //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' +
            //         '</div>'
            //     lemosen.createDocument(htmlDivElement)
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