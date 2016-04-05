// JavaScript source code



$(document).ready(function () {
    $(".fancybox").fancybox({
        type: 'image',
        width: '930px',
        height: '600px',
        transitionIn: 'none',
        transitionOut: 'none',
        type: 'iframe',
        padding: 0,
        title: null,
        helpers: {
            overlay: { 'closeClick': false
        }},

        keys: {
            close: null //prevent ESC from closing it
        },
        afterShow: function () {
            $(".fancybox-close").unbind();
            $(".fancybox-close").click(function () { // create own click event
                sweetAlert({
                    title: "Are You Sure You want to Close?",
                    text: "All your data will be lost.",
                    confirmButtonText: "Yes, Exit.",
                    showCancelButton: true,
                    type: "warning",
                },
                   function () {
                       $.fancybox.close();
                   });
            });
        }
    });
});

// JavaScript source code
$(document).ready(function () {
    $(".fancybox2").fancybox({
        type: 'image',
        width: '930px',
        height: '700px',
        transitionIn: 'none',
        transitionOut: 'none',
        type: 'iframe',
        padding: 0,
        title: null,
        wrapCSS: 'fancybox2', 
        helpers: {
            overlay: { 'closeClick': false
        }},

        keys: {
            close: null //prevent ESC from closing it
        },
        afterShow: function () {
            $(".fancybox2-close").unbind();
            $(".fancybox2-close").click(function () { // create own click event
                sweetAlert({
                    title: "Are You Sure You want to Close?",
                    text: "All your data will be lost.",
                    confirmButtonText: "Yes, Exit.",
                    showCancelButton: true,
                    type: "warning",
                },
                   function () {
                       $.fancybox2.close();
                   });
            });
        }
    });
});

/*$(".fancybox_TFSA").fancybox({
    //type: 'image',
    width: "520",
    height: "725",
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'iframe',
    padding: 0,
    title: null,
    helpers: {
        overlay: { 'closeClick': false }
    },
    keys: {
        close: null //prevent ESC from closing it
    },
    afterShow: function () {
        $(".fancybox-close").unbind();
        $(".fancybox-close").click(function () { // create own click event
            sweetAlert({
                title: "Are You Sure You want to Close?",
                text: "All your data will be lost.",
                confirmButtonText: "Yes, Exit.",
                showCancelButton: true,
                type: "warning",
            },
               function () {
                   $.fancybox.close();
               });
        });
    }
});*/

$(".fancybox_FuelSavings").fancybox({
    //type: 'image',
    width: "900",
    height: "810",
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'iframe',
    padding: 1,
    title: null,
    helpers: {
        overlay: { 'closeClick': false }
    },
    keys: {
        close: null //prevent ESC from closing it
    },
    afterShow: function () {
        $(".fancybox-close").unbind();
        $(".fancybox-close").click(function () { // create own click event
            sweetAlert({
                title: "Are You Sure You want to Close?",
                text: "All your data will be lost.",
                confirmButtonText: "Yes, Exit.",
                showCancelButton: true,
                type: "warning",
            },
               function () {
                   $.fancybox.close();
               });
        });
    }
});

$(".fancybox_ContactUs").fancybox({
    height: '400px',
    width: '450px',
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'iframe',
    padding: 1,
    title: null,
    wrapCSS: 'fancybox_ContactUs',
    helpers: {
        overlay: { 'closeClick': false }
    },
    keys: {
        close: null //prevent ESC from closing it
    },
    afterShow: function () {
        $(".fancybox-close").unbind();
        $(".fancybox-close").click(function () { // create own click event
            sweetAlert({
                title: "Are You Sure You want to Close?",
                text: "All your data will be lost.",
                confirmButtonText: "Yes, Exit.",
                showCancelButton: true,
                type: "warning",
            },
               function () {
                   $.fancybox.close();
               });
        });
    }
});

$(".fancybox_offer").fancybox({
    autoDimensions: false,
    padding      : 0,
    width        : '90%',
    height       : '90%',
    autoScale     : false,
    fitToView : false,
    autoSize : false,
    transitionIn  : 'none',
    transitionOut : 'none',
    type: 'iframe',
//    padding: 1,
    title: null,
    helpers: {
        overlay: { 'closeClick': false }
    },
    keys: {
        close: null //prevent ESC from closing it
    },
    afterShow: function () {
        $(".fancybox-close").unbind();
        $(".fancybox-close").click(function () { // create own click event
            sweetAlert({
                title: "Are You Sure You want to Close?",
                text: "All your data will be lost.",
                confirmButtonText: "Yes, Exit.",
                showCancelButton: true,
                type: "warning",
            },
               function () {
                   $.fancybox.close();
               });
        });
    }
});


$(".fancybox_tfsa").fancybox({
    autoDimensions: false,
    padding      : 0,
    width        : '90%',
    height       : '90%',
	   maxHeight   : 800,
    autoScale     : false,
    fitToView : false,
    autoSize : false,
    transitionIn  : 'none',
    transitionOut : 'none',
    type: 'iframe',
//    padding: 1,
    title: null,
    helpers: {
        overlay: { 'closeClick': false }
    },
    keys: {
        close: null //prevent ESC from closing it
    },
    afterShow: function () {
        $(".fancybox-close").unbind();
        $(".fancybox-close").click(function () { // create own click event
            sweetAlert({
                title: "Are You Sure You want to Close?",
                text: "All your data will be lost.",
                confirmButtonText: "Yes, Exit.",
                showCancelButton: true,
                type: "warning",
            },
               function () {
                   $.fancybox.close();
               });
        });
    }
});
