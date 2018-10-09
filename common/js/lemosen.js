(function () {

    window.lemosen = (function () {
        return {
            alert1: function () {
                arguments[5] = '提示'
                // document.body.innerHTML += "<div class=\"lemosen-popup-body\"><div class=\"lemosen-popup-head\">提示</div><div class=\"lemosen-popup-content\">" + arguments[0] + "</div></div>"
                document.body.innerHTML += '<div class="lemosen-popup-body"><div class="lemosen-popup-head">'+arguments[5]+'</div><div class="lemosen-popup-content">' + arguments[0] + '</div></div>'
            }
        }
    })()
})()