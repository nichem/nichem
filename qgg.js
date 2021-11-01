// ==UserScript==
// @name         去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http*://www.baidu.com/*
// @include http*://www.bilibili.com/*
// @include http*://www.csdn.net/*
// @grant        none
// @run-at document-end
// ==/UserScript==


(function() {
    'use strict';
    function qgg(){
        var rule = [
            '#container #content_right',
            '.s_form_wrapper #s-hotsearch-wrapper',
            '.international-home .contact-help',
            '.first-screen #reportFirst2',
            '#csdn-toolbar .toolbar-advert',
        ]
        rule.forEach(element => {
            document.querySelectorAll(element).forEach(element => {
                element.remove()
            })
        });
    }
    setInterval(qgg,100)

    // Your code here...
})();