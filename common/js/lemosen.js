(function () {

    window.lemosen = (function () {
        return {
            /**
             * arguments
             * 0 content                require
             * 1 sureCallBack           require
             * 2 sureCallBackParam
             * 3 cancelCallBack
             * 4 cancelCallBackParam
             * 5 title
             */
            alert1: function () {
                arguments[5] = '提示'
                // document.body.innerHTML += "<div class=\"lemosen-popup-body\"><div class=\"lemosen-popup-head\">提示</div><div class=\"lemosen-popup-content\">" + arguments[0] + "</div></div>"
                document.body.innerHTML += '<div class="lemosen-popup-body" onclick="lemosen.alert2('+arguments[1]+')"><div class="lemosen-popup-head">' + arguments[5] + '</div><div class="lemosen-popup-content">' + arguments[0] + '</div></div>'
                this.alert2()
            },
            alert2:function(e){
                e()
                alert("Asd")
            },
            // alert: function () {
            //     if (arguments[3] === undefined) {
            //         arguments[3] = function () {
            //         }
            //     }
            //     if (arguments[5] === undefined) {
            //         arguments[5] = '提示'
            //     }
            //
            //     let htmlDivElement = lemosen.initPopup()
            //
            //     htmlDivElement.innerHTML = '<div class="lemosen-popup-body">' +
            //         '<div class="lemosen-popup-head">' + arguments[5] + '</div>' +
            //         '<div class="lemosen-popup-content">' + arguments[0] + '</div>' +
            //         '<p class="lemosen-popup-buttons">' +
            //         '<span class="lemosen-popup-button lemosen-popup-sure-button" onclick="lemosen.alertSure(' + arguments[1] + ')">确定</span>' +
            //         '<span class="lemosen-popup-button lemosen-popup-cancel-button" onclick="lemosen.alertCancel(' + arguments[3] + ')">取消</span>' +
            //         '</p>' +
            //         '</div>'
            //     lemosen.createDocument(htmlDivElement)
            // },
            //
            // toast: function () {
            //
            // },
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
            // prototype: {
            //     screenWidth: window.screen.width,
            //     screenHeight: window.screen.height,
            //     sureCallBackParam: {},
            //     cancelCallBackParam: {},
            //     modalDismiss: {},
            //     modalParam: undefined
            // },
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
            // initPopup: function () {
            //     lemosen.saveCallBackParam(arguments[2] ? arguments[2] : {}, true);
            //     lemosen.saveCallBackParam(arguments[4] ? arguments[4] : {}, false);
            //
            //     let htmlDivElement = document.createElement('div');
            //     htmlDivElement.classList.add(['lemosen-popup'])
            //     return htmlDivElement
            // },
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