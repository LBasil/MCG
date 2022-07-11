//Modal pour MCG

"use strict";
!function () {
    function a(t) {
        t.style.display = "block", setTimeout(function () {
            t.classList.add("active"), document.body.classList.add("modal-active")
        }, e)
    } function i(t) {
        t.classList.remove("active"), setTimeout(function () {
            t.style.display = "none", document.body.classList.remove("modal-active")
        }, e)
    } function c(t, e) {
        if (e(t)) return t;
        for (; t && t.parentNode !== document;)
            if (e(t = t.parentNode))
                return t
    }
    var e = 250;
    document.addEventListener("keyup", function (t) {
        27 === t.keyCode && [].slice.call(document.querySelectorAll(".modal.active")).forEach(function (t) {
            i(t)
        })
    }), document.addEventListener("click", function (t) {
        var e = t.target;
        if (e.classList.contains("modal"))
            return i(e);
        if (e.classList.contains("modal-close"))
            return i(c(e, function (t) {
                return t.classList.contains("modal")
            }));
        var o = c(e, function (t) {
            if (t) return t.hasAttribute("data-toggle") && "modal" === t.getAttribute("data-toggle")
        });
        if (o) {
            var n = o.getAttribute("data-target");
            a(document.querySelector(n))
        }
    }),
        "function" != typeof window.modal && (window.modal = function (t) {
            "string" == typeof t && (t = document.querySelector(t)), t ? t.classList.contains("active") ? i(t) : a(t) : console.error("Modal target not found!")
        })
}();

// Modal pour ID

"use strict";
!function () {
    function a(t) {
        t.style.display = "block", setTimeout(function () {
            t.classList.add("active"), document.body.classList.add("modalID-active")
        }, e)
    } function i(t) {
        t.classList.remove("active"), setTimeout(function () {
            t.style.display = "none", document.body.classList.remove("modalID-active")
        }, e)
    } function c(t, e) {
        if (e(t)) return t;
        for (; t && t.parentNode !== document;)
            if (e(t = t.parentNode))
                return t
    }
    var e = 250;
    document.addEventListener("keyup", function (t) {
        27 === t.keyCode && [].slice.call(document.querySelectorAll(".modalID.active")).forEach(function (t) {
            i(t)
        })
    }), document.addEventListener("click", function (t) {
        var e = t.target;
        if (e.classList.contains("modalID"))
            return i(e);
        if (e.classList.contains("modalID-close"))
            return i(c(e, function (t) {
                return t.classList.contains("modalID")
            }));
        var o = c(e, function (t) {
            if (t) return t.hasAttribute("data-toggle") && "modalID" === t.getAttribute("data-toggle")
        });
        if (o) {
            var n = o.getAttribute("data-target");
            a(document.querySelector(n))
        }
    }),
        "function" != typeof window.modalID && (window.modalID = function (t) {
            "string" == typeof t && (t = document.querySelector(t)), t ? t.classList.contains("active") ? i(t) : a(t) : console.error("Modal target not found!")
        })
}();


//Modal pour SMC

"use strict";
!function () {
    function a(t) {
        t.style.display = "block", setTimeout(function () {
            t.classList.add("active"), document.body.classList.add("modalSMC-active")
        }, e)
    } function i(t) {
        t.classList.remove("active"), setTimeout(function () {
            t.style.display = "none", document.body.classList.remove("modalSMC-active")
        }, e)
    } function c(t, e) {
        if (e(t)) return t;
        for (; t && t.parentNode !== document;)
            if (e(t = t.parentNode))
                return t
    }
    var e = 250;
    document.addEventListener("keyup", function (t) {
        27 === t.keyCode && [].slice.call(document.querySelectorAll(".modalSMC.active")).forEach(function (t) {
            i(t)
        })
    }), document.addEventListener("click", function (t) {
        var e = t.target;
        if (e.classList.contains("modalSMC"))
            return i(e);
        if (e.classList.contains("modalSMC-close"))
            return i(c(e, function (t) {
                return t.classList.contains("modalSMC")
            }));
        var o = c(e, function (t) {
            if (t) return t.hasAttribute("data-toggle") && "modalSMC" === t.getAttribute("data-toggle")
        });
        if (o) {
            var n = o.getAttribute("data-target");
            a(document.querySelector(n))
        }
    }),
        "function" != typeof window.modalSMC && (window.modalSMC = function (t) {
            "string" == typeof t && (t = document.querySelector(t)), t ? t.classList.contains("active") ? i(t) : a(t) : console.error("Modal target not found!")
        })
}();

//Modal pour EI 

"use strict";
!function () {
    function a(t) {
        t.style.display = "block", setTimeout(function () {
            t.classList.add("active"), document.body.classList.add("modalEI-active")
        }, e)
    } function i(t) {
        t.classList.remove("active"), setTimeout(function () {
            t.style.display = "none", document.body.classList.remove("modalEI-active")
        }, e)
    } function c(t, e) {
        if (e(t)) return t;
        for (; t && t.parentNode !== document;)
            if (e(t = t.parentNode))
                return t
    }
    var e = 250;
    document.addEventListener("keyup", function (t) {
        27 === t.keyCode && [].slice.call(document.querySelectorAll(".modalEI.active")).forEach(function (t) {
            i(t)
        })
    }), document.addEventListener("click", function (t) {
        var e = t.target;
        if (e.classList.contains("modalEI"))
            return i(e);
        if (e.classList.contains("modalEI-close"))
            return i(c(e, function (t) {
                return t.classList.contains("modalEI")
            }));
        var o = c(e, function (t) {
            if (t) return t.hasAttribute("data-toggle") && "modalEI" === t.getAttribute("data-toggle")
        });
        if (o) {
            var n = o.getAttribute("data-target");
            a(document.querySelector(n))
        }
    }),
        "function" != typeof window.modalEI && (window.modalEI = function (t) {
            "string" == typeof t && (t = document.querySelector(t)), t ? t.classList.contains("active") ? i(t) : a(t) : console.error("Modal target not found!")
        })
}();













