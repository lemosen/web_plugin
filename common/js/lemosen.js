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
                modalParam: undefined
            },
            isOnlyPopup: function () {
                return document.getElementsByClassName('lemosen-popup').length === 0;
            },
            popupCallback: function (isSuccess) {
                if (isSuccess) {
                    lemosen.prototype.modalParam !== undefined ? this.prototype.successCallBack(lemosen.prototype.modalParam)
                        : this.prototype.successCallBack()

                }
                if (lemosen.prototype.modalParam !== undefined) {
                    this.prototype.successCallBack(lemosen.prototype.modalParam)
                }
                document.getElementsByClassName('lemosen-popup-body').item(0).classList.add('lemosen-fadeOut')
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
                htmlDivElement.classList.add('lemosen-popup')
                htmlDivElement.innerHTML =
                    '<div class="lemosen-popup-body lemosen-bounce" onclick="lemosen.stopCloseEvent(event)">' +
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
                var documentFragment = document.createDocumentFragment();
                documentFragment.appendChild(htmlDivElement);
                document.body.appendChild(documentFragment)
                document.getElementsByTagName('body').item(0).appendChild(documentFragment);
                document.getElementsByClassName('lemosen-popup').item(0).addEventListener("click", function () {
                    lemosen.popupCallback(false)
                })

            },
            /**
             * delay
             * position
             * msg
             */
            toast: function () {
                // arguments[0].delay
                // arguments[0].position
                // arguments[0].msg
                alert("toast")
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
                this.prototype.successCallBack = arguments[0].callback;
                var htmlDivElement = document.createElement('div');
                htmlDivElement.classList.add('lemosen-popup');
                htmlDivElement.innerHTML +=
                    '<div onclick="lemosen.stopCloseEvent(event)" class="lemosen-popup-body  lemosen-bounce" >' +
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
            setModalCallBackParam: function (modalParam) {
                lemosen.prototype.modalParam = modalParam
            },

            router: {
                /**
                 * isCache 是否启用缓存 默认是
                 * routers
                 *  path tab1
                 *  url https://lemosen.github.io/web_plugin/common/tab1.html
                 *  isIndex true
                 *  cacheHtml true
                 * tabs
                 */
                routerConfig: {noCache: undefined, routers: [], tabs: []},
                init: function (routerConfig) {
                    // document.getElementsByTagName('html').item(0).setAttribute('xmlns','lemosen')
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
                    lemosen.router.routerConfig.tabs = routerConfig.tabs;
                    window.addEventListener('hashchange', lemosen.router.match)
                    /**
                     * tab 操作
                     * @type {Element}
                     */
                    var elementsByTagName = document.getElementsByTagName('lemosen:tabs').item(0);

                    elementsByTagName.classList.add('lemosen-tabs');
                    var tabsHtml = ''
                    for (var i = 0; i < routerConfig.tabs.length; i++) {
                        tabsHtml += ' <a href="#' + routerConfig.tabs[i].path + '" class="lemosen-tab">' +
                            '<div class="lemosen-icon">' +
                            '<img src="' + routerConfig.tabs[i].icon + '" width="30" height="30" type="image/svg+xml"' +
                            '         pluginspage="http://www.adobe.com/svg/viewer/install/"/>' +
                            '</div>' +
                            '<span class="lemosen-tab-name">' + routerConfig.tabs[i].name + '</span>' +
                            '</a>'

                    }
                    elementsByTagName.innerHTML = tabsHtml;
                    var location = window.location;
                    location.newURL = window.location.href;
                    lemosen.router.match(location)
                    // window.addEventListener('load', f)
                },
                match: function f(location) {
                    var isMain = false;
                    var cacheHtml = false;
                    var xmlhttp = new XMLHttpRequest();
                    var url = '';
                    var routerIndex;
                    for (var i = 0; i < lemosen.router.routerConfig.routers.length; i++) {
                        var e = lemosen.router.routerConfig.routers[i]
                        if (e.path === location.newURL.split('#')[1]) {
                            routerIndex = i;
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
                            animation('main-content')
                        } else {
                            document.getElementById('sub-content').innerHTML = html;
                            document.getElementById('main-content').style.display = 'none';
                            document.getElementById('sub-content').style.display = 'block';
                            animation('sub-content')
                        }
                    };
                    var animation = function (target) {
                        document.getElementById(target).classList.add('lemosen-slideInLeft');
                        setTimeout(function () {
                            document.getElementById(target).classList.remove('lemosen-slideInLeft')
                        }, 500)
                    };

                    if (cacheHtml && !lemosen.router.routerConfig.noCache) {
                        isMainf(isMain, lemosen.router.routerConfig.routers[routerIndex].cacheHtml)
                    } else {
                        xmlhttp.open("GET", url, true); //第三个参数是同步异步,主线程只能异步
                        xmlhttp.send();
                        xmlhttp.onreadystatechange = function () {//服务器返回值的处理函数，此处使用匿名函数进行实现
                            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                                lemosen.router.routerConfig.routers[routerIndex].cacheHtml = xmlhttp.responseText
                                isMainf(isMain, xmlhttp.responseText)
                            }
                        };
                    }

                }
            }
        }
    })()

})();