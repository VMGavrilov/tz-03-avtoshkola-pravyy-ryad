(function() {
    var params = new URLSearchParams(window.location.search);
    var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
    utmKeys.forEach(function(key) {
        if (params.has(key)) {
            sessionStorage.setItem(key, params.get(key));
        }
    });
})();