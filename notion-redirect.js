// ==UserScript==
// @name         Notion redirect to desktop app
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.notion.so/*
// @icon         https://www.google.com/s2/favicons?domain=notion.so
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let href = window.location.href;

    href = href = href.replace("https","notion");

    const redirector = ()=>{
        window.location = href;
    };

    const hider = () =>{
        document.querySelector('#redirectBar').setAttribute("class","hide-redirect-bar");
    };

    const csstyle = `<style>
        #redirectBar{
            display: flex;
            justify-content: center;
            height: 50px;
            background-color: #f0cc00;
            align-items: center;
        }
        #redirectBtn{
            height: fit-content;
            background-color: #d23228;
            color: #fff;
            border: none;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 1.2em;
            border-bottom: 3px solid #6b1a14;
        }
        #redirectBar span{
            position: absolute;
            right: 22px; display: inline-block;
            background-color: #002b2b; color: #f0cc00;
            padding: 6px; border-radius: 30px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 700;
            height: 35px;
            width: 35px;
            text-align: center; opacity: 0.65;
        }
        #redirectBar.hide-redirect-bar{
            animation-duration: .5s;
            animation-name: collapse;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
        }
        @keyframes collapse{
        100%{height:0;}
        }
    </style>`;

    const htmlements = `
    <div id="redirectBar">
        <button id="redirectBtn" type="button" onclick="redirector" >
            Open in App
        </button>
        <span>
            —
        </span>
    </div>`

    document.querySelector('#notion-app').insertAdjacentHTML('afterbegin',htmlements)
    document.querySelector('head').insertAdjacentHTML('beforeend',csstyle)
    document.querySelector('#redirectBtn').addEventListener("click", redirector);
    document.querySelector('#redirectBar span').addEventListener("click", hider);

})();
