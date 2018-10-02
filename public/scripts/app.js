"use strict";

console.log("It's running.");

//Application object

var appInfo = {
    name: "Indecision App",
    sub: "Useful for making decisions",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = "";
    }
    appRender();
};

var formRemove = function formRemove(e) {
    e.preventDefault();
    appInfo.options = [];
    appRender();
};

var appRoot = document.getElementById('app');

var appRender = function appRender() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appInfo.name
        ),
        appInfo.sub && React.createElement(
            "p",
            null,
            appInfo.sub
        ),
        React.createElement(
            "p",
            null,
            appInfo.options.length > 0 ? 'Your options:' : "No options"
        ),
        React.createElement(
            "p",
            null,
            appInfo.options.length
        ),
        React.createElement(
            "form",
            { onSubmit: formRemove },
            React.createElement(
                "button",
                null,
                "Remove all"
            )
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "Item 1"
            ),
            React.createElement(
                "li",
                null,
                "Item 2"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

appRender();
