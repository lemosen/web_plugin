/**
 * Copyright (c) 2018 lemosen
 * email : 28462961@qq.com
 */
(function () {
    window.lemosen = (function () {
        return {
            prototype: {
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                sureCallBackParam: {},
                cancelCallBackParam: {}
            },
            /**
             * arguments
             * 0 content                require
             * 1 sureCallBack           require
             * 2 sureCallBackParam
             * 3 cancelCallBack
             * 4 cancelCallBackParam
             * 5 title
             * 6
             */
            alert: function () {

                if (arguments[3] === undefined) {
                    arguments[3] = function () {
                    }
                }
                if (arguments[5] === undefined) {
                    arguments[5] = '提示'
                }

                lemosen.saveCallBackParam(arguments[2] ? arguments[2] : {});
                lemosen.saveCallBackParam(arguments[4] ? arguments[4] : {});

                let htmlDivElement = document.createElement('div');
                htmlDivElement.classList.add(['lemosen-alert'])
                htmlDivElement.innerHTML = '<div class="lemosen-alert-body">' +
                    '<div class="lemosen-alert-head">' + arguments[5] + '</div>' +
                    '<div class="lemosen-alert-content">' + arguments[0] + '</div>' +
                    '<p class="lemosen-alert-buttons">' +
                    '<span class="lemosen-alert-button lemosen-alert-sure-button" onclick="lemosen.alertSure(' + arguments[1] + ')">确定</span>' +
                    '<span class="lemosen-alert-button lemosen-alert-cancel-button" onclick="lemosen.alertCancel(' + arguments[3] + ')">取消</span>' +
                    '</p>' +
                    '</div>'
                lemosen.createDocument(htmlDivElement)
            },
            alertSure: function (fun) {
                if (window.lemosen.prototype.sureCallBackParam) {
                    fun(window.lemosen.prototype.sureCallBackParam)
                }
                document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-alert').item(0))
            },
            alertCancel: function (fun) {
                document.getElementsByTagName('body').item(0).removeChild(document.getElementsByClassName('lemosen-alert').item(0))
            },
            toast: function () {

            },
            saveCallBackParam(param, isSure) {
                if (param && param !== {}) {
                    isSure ? window.lemosen.prototype.sureCallBackParam = param
                        : window.lemosen.prototype.cancelCallBackParam = param
                }
            },
            createDocument: function (htmlDivElement) {
                let documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(htmlDivElement);
                document.body.appendChild(documentFragment)
            },
        };
    })()
})();
