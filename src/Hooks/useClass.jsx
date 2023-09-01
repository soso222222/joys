import React, { useState } from "react";

function useClass() {
    const addClass = (element, className) => {
        const addSingleClass = (el, className) => {
            var oldClassName = el.getAttribute("class");
            var oldClassNameArray =
                oldClassName === null
                    ? [oldClassName]
                    : oldClassName.split(" ");
            var result = "";

            if (oldClassName === null || oldClassName === "") {
                //클래스 자체가 없을 경우
                if (className === "") return false;
                else result = className;
            } else if (
                oldClassNameArray.indexOf(className) > -1 ||
                className.trim() == ""
            ) {
                //기존 클래스가 있거나
                //새 클래스명이 없을 경우
                return false;
            } else if (oldClassName != undefined) {
                if (className.trim() != "") {
                    result = oldClassName + " " + className;
                }
            } else {
                return;
            }
            el.setAttribute("class", result);
        };

        var classNameArray =
            className === null ? [className] : className.split(" ");

        if (element != undefined && element.length > 1) {
            //element가 여러개
            element.forEach(function (element, i) {
                if (classNameArray.length > 1) {
                    //class가 여러개
                    classNameArray.forEach(function (singleClassName, i) {
                        addSingleClass(element, singleClassName);
                    });
                } else {
                    addSingleClass(element, className);
                }
            });
        } else if (classNameArray.length > 1) {
            //class가 여러개
            classNameArray.forEach(function (singleClassName, i) {
                addSingleClass(element, singleClassName);
            });
        } else {
            addSingleClass(element, className);
        }
    };

    const removeClass = (element, className) => {
        function removeSingleClass(el, className) {
            var oldClassName = el.getAttribute("class");
            var result = "";
            if (oldClassName != undefined && oldClassName != "") {
                if (oldClassName.indexOf(" " + className) > -1) {
                    //2번째 이후 class 처리
                    result = oldClassName.replace(" " + className, "");
                } else if (className.trim() != "") {
                    result = oldClassName.replace(className, "");
                }
                el.setAttribute("class", result);
            }
        }

        if (element != undefined && element.length > 1) {
            element.forEach(function (element, i) {
                removeSingleClass(element, className);
            });
        } else {
            removeSingleClass(element, className);
        }
    };

    const hasClass = (el, className) => {
        var str = el.getAttribute("class");
        if (str === null) return true;
        if (str.indexOf(className) > -1) return true;
        else return false;
    };
    //children요소 tag있는지 검색
    const hasTagName = (el, keyword) => {
        var elChildren = el.children;
        var result = false;
        if (elChildren != undefined && elChildren.length > 1) {
            Array.from(elChildren).forEach(function (el, i) {
                if (hasSingleTagName(el, keyword)) return result;
            });
        } else {
            if (hasSingleTagName(el, keyword)) return result;
        }
        return result;

        function hasSingleTagName(el, keyword) {
            if (el.tagName.toLowerCase().indexOf(keyword) > -1) result = true;
        }
    };

    return {
        addClass,
        removeClass,
        hasClass,
        hasTagName,
    };
}

export default useClass;
