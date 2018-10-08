/**
 * Copyright (c) 2018 lemosen
 * email : 28462961@qq.com
 */
(function () {
    'use strict'
    window.lemosen = (function () {
        window.lemosen.prototype = {
            screenWidth: window.screen.width,
            screenHeight: window.screen.height
        };
        return {
            alert: function () {
                alert("test");
            },
            toast: function () {

            }
        }
    })
});