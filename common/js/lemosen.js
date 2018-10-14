(function () {
    window.lemosen = (function () {
        return {
            prototype: {
                delay: 1,
                position: 'bottom',
                animationIn: 'lemosen-bounceIn',
                animationOut: 'lemosen-bounceOut',
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                successCallBack: {},
                modalParam: undefined
            },
            /**
             * 只允许唯一弹窗
             * @returns {boolean}
             */
            isOnlyPopup: function () {
                return document.getElementsByClassName('lemosen-popup').length === 0;
            },
            /**
             * 统一回调
             * @param isSuccess
             */
            popupCallback: function (isSuccess) {
                if (isSuccess) {
                    lemosen.prototype.modalParam !== undefined ? this.prototype.successCallBack(lemosen.prototype.modalParam)
                        : this.prototype.successCallBack()

                }
                if (lemosen.prototype.modalParam !== undefined) {
                    this.prototype.successCallBack(lemosen.prototype.modalParam)
                }
                document.getElementsByClassName('lemosen-popup-body').item(0).classList.add(lemosen.prototype.animationOut)
                setTimeout(function () {
                    document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-popup').item(0))
                }, lemosen.prototype.delay * 1000 - 100);

            },
            /**
             * 阻止事件触发
             * @param event
             */
            stopCloseEvent: function (event) {
                event.stopPropagation();
            },
            /**
             * 数据格式
             * {
             *  top:100, //框里顶部的距离
             *  title: "tip",
             *  content: "alert test ",
             *  okText: "ok",
             *  cancelText: "cancel",
             *  callback: function (e) {
             *      alert("i am callback")
             *  }
             *  delay: 1,
             *  animationIn: 'bounceIn',
             *  animationOut: 'bounceOut',
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
                lemosen.animationConfig(arguments[0]);
                this.prototype.successCallBack = arguments[0].callback;
                var htmlDivElement = document.createElement('div'),documentFragment = document.createDocumentFragment();
                htmlDivElement.classList.add('lemosen-popup')
                htmlDivElement.innerHTML =
                    '<div class="lemosen-popup-body ' + lemosen.prototype.animationIn + '" onclick="lemosen.stopCloseEvent(event)">' +
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
                    '</div>'
                documentFragment.appendChild(htmlDivElement);
                document.body.appendChild(documentFragment)
                document.getElementsByTagName('body').item(0).appendChild(documentFragment);
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })

            },
            /**
             * delay
             * position middle|top|bottom
             * msg
             * animationIn: 'fadeIn',
             * animationOut: 'fadeOut',
             */
            toast: function () {
                if (arguments[0].animationIn === undefined) {
                    arguments[0].animationIn = 'lemosen-bounceInUp'
                }
                if (arguments[0].animationOut === undefined) {
                    arguments[0].animationOut = 'lemosen-bounceOutDown'
                }
                if (arguments[0].delay === undefined) {
                    arguments[0].delay = 1.5
                }
                lemosen.animationConfig(arguments[0]);
                var htmlDivElement = document.createElement('div');
                htmlDivElement.classList.add('lemosen-toast')
                if (lemosen.prototype.position === 'top') {
                    htmlDivElement.style.top = '10px'
                }
                if (lemosen.prototype.position === 'bottom') {
                    htmlDivElement.style.bottom = '10px'
                }
                if (lemosen.prototype.position === 'middle') {
                    htmlDivElement.style.top = '50%'
                }
                htmlDivElement.classList.add(lemosen.prototype.animationIn)
                htmlDivElement.innerHTML =
                    '<div>' + arguments[0].msg + '</div>'
                var documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(htmlDivElement);
                document.getElementsByTagName('body').item(0).appendChild(documentFragment);
                setTimeout(function () {
                    document.getElementsByClassName('lemosen-toast').item(0).classList.add(lemosen.prototype.animationOut)
                    setTimeout(function () {
                        document.body.removeChild(document.getElementsByClassName('lemosen-toast').item(0))
                    }, 400)
                }, lemosen.prototype.delay * 1000)
            },

            /**
             * arguments
             * html
             * url
             * callback
             */
            modal: function () {
                if (arguments[0].callback === undefined) {
                    arguments[0].callback = function () {
                    }
                }
                lemosen.animationConfig(arguments[0]);
                this.prototype.successCallBack = arguments[0].callback;
                var htmlDivElement = document.createElement('div');
                htmlDivElement.classList.add('lemosen-popup');
                htmlDivElement.innerHTML +=
                    '<div onclick="lemosen.stopCloseEvent(event)" class="lemosen-popup-body ' + lemosen.prototype.animationIn + '" >' +
                    // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
                    '<div class="lemosen-popup-content">' + arguments[0].html + '</div>' +
                    '</div>';
                var documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(htmlDivElement);
                document.body.appendChild(documentFragment)
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })
            },
            /**
             * modal回调参数设置
             * @param modalParam
             */
            setModalCallBackParam: function (modalParam) {
                lemosen.prototype.modalParam = modalParam
            },
            /**
             * 动画设置
             * @param config
             */
            animationConfig: function (config) {
                config.delay ? lemosen.prototype.delay = config.delay : lemosen.prototype.delay = 1
                config.position ? lemosen.prototype.position = config.position : lemosen.prototype.position = 'bottom'
                config.animationIn ? lemosen.prototype.animationIn = config.animationIn : lemosen.prototype.animationIn = 'lemosen-bounceIn'
                config.animationOut ? lemosen.prototype.animationOut = config.animationOut : lemosen.prototype.animationOut = 'lemosen-bounceOut'
            }
        }
    })()

})();