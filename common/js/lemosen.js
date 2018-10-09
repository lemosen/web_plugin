(function () {

    window.lemosen = (function () {
        return {
            alert1: function () {
                document.body.innerHTML += "<div class=\"lemosen-popup-body\"><div class=\"lemosen-popup-head\">提示</div><div class=\"lemosen-popup-content\">" + arguments[0] + "</div></div>"
            }
        }
    })()
})()