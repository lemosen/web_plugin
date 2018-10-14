(function () {
    window.lemosen.router = (function () {
        return {
            /**
             * isCache 是否启用缓存 默认是
             * routers
             *  path tab1
             *  url https://lemosen.github.io/web_plugin/common/tab1.html
             *  isIndex true
             *  cacheHtml true
             * tabs
             *  name show name
             *  icon './assets/home.svg' './assets/home_on.svg' is on icon
             *  path router path
             */
            routerConfig: {
                noCache: undefined, routers: [], tabs: []
            }
            ,
            init: function (routerConfig) {
                var rc = [], elementsByTagName = document.getElementsByTagName('lemosen:tabs').item(0), tabsHtml = '',
                    content = document.getElementsByTagName('lemosen:content').item(0), main = document.createElement('div'), sub = document.createElement('div'),
                    location = window.location;

                document.getElementsByTagName('html').item(0).setAttribute('xmlns', 'lemosen')
                if (routerConfig.noCache) {
                    lemosen.router.routerConfig.noCache = routerConfig.noCache
                } else {
                    lemosen.router.routerConfig.noCache = false;
                }
                for (var i = 0, leg = routerConfig.routers.length; i < leg; i++) {
                    rc.push({url: routerConfig.routers[i].url, path: routerConfig.routers[i].path, isIndex: routerConfig.routers[i].isIndex, cacheHtml: undefined})
                }
                lemosen.router.routerConfig.routers = rc;
                lemosen.router.routerConfig.tabs = routerConfig.tabs;
                window.addEventListener('hashchange', lemosen.router.match)
                /**
                 * tab 操作
                 * @type {Element}
                 */

                elementsByTagName.classList.add('lemosen-tabs');
                for (var i = 0, leg = routerConfig.tabs.length; i < leg; i++) {
                    tabsHtml += ' <a href="#' + routerConfig.tabs[i].path + '" onclick="lemosen.router.clickTab(event)" class="lemosen-tab">' +
                        '<div class="lemosen-icon">' +
                        '<img src="' + routerConfig.tabs[i].icon + '" type="image/svg+xml"' +
                        '         pluginspage="http://www.adobe.com/svg/viewer/install/"/>' +
                        '</div>' +
                        '<span class="lemosen-tab-name">' + routerConfig.tabs[i].name + '</span>' +
                        '</a>'

                }
                elementsByTagName.innerHTML = tabsHtml;

                /**
                 * lemosen content init
                 * @type {Element}
                 */
                main.classList.add('lemosen-main-content');
                sub.classList.add('lemosen-sub-content');
                main.innerHTML = content.innerHTML;
                content.innerHTML = ''
                content.appendChild(sub);
                content.appendChild(main);

                location.newURL = window.location.href;
                lemosen.router.match(location)
                // window.addEventListener('load', f)
            },
            clickTab: function (event) {
                // var elementsByClassName = document.getElementsByClassName('lemosen-tab');
                // for (var i = 0; i < elementsByClassName.length; i++) {
                //     var htmlImageElement = elementsByClassName[i].getElementsByTagName('img').item(0);
                //     htmlImageElement.setAttribute('src', htmlImageElement.getAttribute('src').replace('_on.svg', '.svg'))
                // }
                // event.target.setAttribute('src', event.target.getAttribute('src').replace('.svg', '_on.svg'));
            },
            match: function (location) {
                var isMain = false, cacheHtml = false, xmlhttp = new XMLHttpRequest(), url = '', routerIndex, isMainf = function (isMain, html) {
                    if (isMain) {
                        document.getElementsByClassName('lemosen-main-content').item(0).style.display = 'block';
                        document.getElementsByClassName('lemosen-sub-content').item(0).style.display = 'none';
                        animation('lemosen-main-content')
                    } else {
                        document.getElementsByClassName('lemosen-sub-content').item(0).innerHTML = html;
                        document.getElementsByClassName('lemosen-main-content').item(0).style.display = 'none';
                        document.getElementsByClassName('lemosen-sub-content').item(0).style.display = 'block';
                        animation('lemosen-sub-content')
                    }
                }, animation = function (target) {
                    document.getElementsByClassName(target).item(0).classList.add('lemosen-slideInLeft');
                    setTimeout(function () {
                        document.getElementsByClassName(target).item(0).classList.remove('lemosen-slideInLeft')
                    }, 500)
                };
                if (location.newURL.split('#')[1] === undefined) {
                    location.newURL += "#"
                }
                for (var i = 0, leg = lemosen.router.routerConfig.routers.length; i < leg; i++) {
                    var e = lemosen.router.routerConfig.routers[i];
                    if (e.path === location.newURL.split('#')[1]) {
                        routerIndex = i;
                        url = e.url;
                        isMain = e.isIndex;
                        if (e.cacheHtml !== undefined) {
                            cacheHtml = true;
                        }
                        break;
                    } else if (e.path === '' && '' === location.newURL.split('#')[1]) {
                        routerIndex = i;
                        url = 'https://lemosen.github.io/web_plugin/common/';
                        isMain = true;
                        if (e.cacheHtml !== undefined) {
                            cacheHtml = true;
                        }
                        break;
                    }
                }

                if (cacheHtml && !lemosen.router.routerConfig.noCache) {
                    isMainf(isMain, lemosen.router.routerConfig.routers[routerIndex].cacheHtml)
                } else {
                    xmlhttp.open("GET", url, true); //第三个参数是同步异步,主线程只能异步
                    xmlhttp.send();
                    xmlhttp.onreadystatechange = function () {//服务器返回值的处理函数，此处使用匿名函数进行实现
                        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                            var responseText = xmlhttp.responseText;
                            lemosen.router.routerConfig.routers[routerIndex].cacheHtml = responseText
                            isMainf(isMain, responseText)
                        }
                    };
                }

            }
        }
    })()
})();
