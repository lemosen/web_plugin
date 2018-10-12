(function () {
    var obj = new Object();
    Object.defineProperty(obj, 'lemosen1', {
        configurable: false,
        writable: true,
        enumerable: true,
        value: '张三'
    })
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
                var htmlDivElement = document.createElement('div');
                htmlDivElement.classList.add(['lemosen-popup'])

                htmlDivElement.innerHTML =
                    // '<div class="lemosen-popup" >' +
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
                    '</div>'
                // '</div>'
                var documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(htmlDivElement);
                document.body.appendChild(documentFragment)
                document.getElementsByTagName('body').item(0).appendChild(documentFragment);
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })

            },

            toast: function () {
                alert("toast")
            },

            /**
             * arguments
             * 0 content                require
             * 1 dismiss
             * 2 width      vw
             */
            modal: function () {
                if (arguments[1] === undefined) {
                    arguments[1] = function () {
                    }
                }
                var width = arguments[2] ? arguments[2] + '%' : 35 + '%';
                var htmlDivElement = document.createElement('div');
                htmlDivElement.classList.add(['lemosen-popup'])
                htmlDivElement.innerHTML +=
                    // '<div class="lemosen-popup">' +
                    '<div onclick="lemosen.stopCloseEvent(event)" class="lemosen-popup-body" style="width: ' + width + '">' +
                    // '<div class="lemosen-popup-head"><span class="lemosen-popup-close"  onclick="lemosen.modalClose()">X</span></div>' +
                    '<div class="lemosen-popup-content">' + arguments[0] + '</div>' +
                    '</div>'
                // '</div>';
                var documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(htmlDivElement);
                document.body.appendChild(documentFragment)
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })
            },


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
            router: {
                /**
                 * isCache 是否启用缓存 默认是
                 * routers
                 *  path tab1
                 *  url https://lemosen.github.io/web_plugin/common/tab1.html
                 *  isIndex true
                 *  cacheHtml true
                 */
                routerConfig: {noCache: undefined, routers: []},
                init: function (routerConfig) {
                    console.log(window.location.href);

                    if (routerConfig.noCache) {
                        lemosen.router.routerConfig.noCache = routerConfig.noCache
                    } else {
                        lemosen.router.routerConfig.noCache = false;
                    }
                    var rc = [];
                    for (var i = 0; i < routerConfig.routers.length; i++) {
                        rc.push({url: routerConfig.routers[i].url, path: routerConfig.routers[i].path, isIndex: routerConfig.routers[i].isIndex, cacheHtml: undefined})
                    }
                    lemosen.router.routerConfig.routers = rc;

                    window.addEventListener('hashchange', lemosen.router.match)

                    var location = window.location
                    location.newURL = window.location.href
                    lemosen.router.match(location)
                    // window.addEventListener('load', f)
                },
                match: function f(location) {
                    var isMain = false;
                    var cacheHtml = false;
                    var xmlhttp = new XMLHttpRequest();
                    var url = '';
                    var routerIndex
                    for (var i = 0; i < lemosen.router.routerConfig.routers.length; i++) {
                        var e = lemosen.router.routerConfig.routers[i]
                        if (e.path === location.newURL.split('#')[1]) {
                            routerIndex = i
                            url = e.url;
                            isMain = e.isIndex;
                            if (e.cacheHtml !== undefined) {
                                cacheHtml = true;
                            }
                        }
                    }
                    var isMainf = function (isMain, html) {
                        if (isMain) {
                            document.getElementById('main-content').style.display = 'block';
                            document.getElementById('sub-content').style.display = 'none';
                        } else {
                            document.getElementById('sub-content').innerHTML = html;
                            document.getElementById('main-content').style.display = 'none';
                            document.getElementById('sub-content').style.display = 'block';
                        }
                    }
                    if (cacheHtml && !lemosen.router.routerConfig.noCache) {
                        isMainf(isMain, lemosen.router.routerConfig.routers[routerIndex].cacheHtml)
                    } else {
                        xmlhttp.open("GET", url, true); //第三个参数是同步异步,主线程只能异步
                        xmlhttp.send();
                        xmlhttp.onreadystatechange = function () {//服务器返回值的处理函数，此处使用匿名函数进行实现
                            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                                lemosen.router.routerConfig.routers[routerIndex].cacheHtml = xmlhttp.responseText
                                var responseText = xmlhttp.responseText;
                                isMainf(isMain, responseText)

                            }
                        };
                    }

                }
            }
        }
    })()

})();