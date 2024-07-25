let app = new Vue({
    // options object
    el: "#app",
    data: {
        title: 'Deirdre\'s Portfolio',
        titleHTML: "Deirdre\'s <span class='badge'>Portfolio</span>",
        projects: [
            {title: "portfolio", desc: "description"},
            {title: "Twitter clone", desc: "clone description"}
        ]
    }
})