document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-event]').forEach(function(el) {
        el.addEventListener('click', function() {
            var eventName = this.getAttribute('data-event');
            var params = {};
            for (var i = 0; i < this.attributes.length; i++) {
                var attr = this.attributes[i];
                if (attr.name.startsWith('data-') && attr.name !== 'data-event') {
                    var key = attr.name.replace('data-', '').replace(/-/g, '_');
                    params[key] = attr.value;
                }
            }
            if (typeof gtag === 'function') {
                gtag('event', eventName, params);
            }
        });
    });
});