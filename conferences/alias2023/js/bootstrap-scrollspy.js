/**
 * Bootstrap.js by @fat & @mdo
 * plugins: bootstrap-scrollspy.js
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function (a) {
    function b(b, c) {
        var d = a.proxy(this.process, this), e = a(b).is("body") ? a(window) : a(b), f;
        this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = e.on("scroll.scroll-spy.data-api", d), this.selector = (this.options.target || (f = a(b).attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
    }

    b.prototype = {constructor: b, refresh: function () {
        var b = this, c;
        this.offsets = a([]), this.targets = a([]), c = this.$body.find(this.selector).map(function () {
            var c = a(this), d = c.data("target") || c.attr("href"), e = /^#\w/.test(d) && a(d);
            return e && e.length && [
                [e.position().top + b.$scrollElement.scrollTop(), d]
            ] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, process: function () {
        var a = this.$scrollElement.scrollTop() + this.options.offset, b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, c = b - this.$scrollElement.height(), d = this.offsets, e = this.targets, f = this.activeTarget, g;
        if (a >= c)return f != (g = e.last()[0]) && this.activate(g);
        for (g = d.length; g--;)f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
    }, activate: function (b) {
        var c, d;
        this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
    }};
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("scrollspy"), f = typeof c == "object" && c;
            e || d.data("scrollspy", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {offset: 10}, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(window.jQuery)