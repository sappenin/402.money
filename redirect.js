// This attempts to emulate a 301 redirect behavior for users in a browser, but won't actually work for PayID Clients. :(

var redirects = {
    '?resource=payid:david$402.money': 'https://payid.402.money/users/david',
    '?resource=payid:alice$402.money': 'https://payid.402.money/users/alice',
    '?resource=payid:pay$402.money': 'https://payid.402.money/pay',
};

(function() {
    var s = document.location.search;
    if (s in redirects) {
        window.location.replace('/' + redirects[s]);
    }
})();
