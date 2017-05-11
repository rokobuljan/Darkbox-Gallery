/**
 * Darkbox - by Roko.CB
 * https://github.com/rokobuljan/Darkbox-Gallery
 */
;(function() {
  jQuery(function($) {

    var $imagesGroup,
        n = 0, // number of images
        c = 0, // current image index (counter 0-based)    

        $prevNext = $("<a id='darkbox_prev'/><a id='darkbox_next'/>").on("touchstart mousedown", function(e) {
          e.preventDefault();
          e.stopPropagation();
          var isNext = this.id === "darkbox_next";
          c = isNext ? ++c : --c;
          showImage();
        }),

        $darkbox = $("<div/>", {
          id: "darkbox",
          append: $prevNext,
          appendTo : "body"
        }),

        $darkboxClose = $("<a/>", {
          id: "darkbox_close",
          appendTo: $darkbox,
          on: {
            "touchstart mousedown" : function(e) {
              e.preventDefault();
              $darkbox.removeClass("show");
            }
          }
        }),

        $darkboxDescription = $("<div/>", {
          id: "darkbox_description",
          appendTo : $darkbox
        }),

        $darkboxStats = $("<div/>", {
          id: "darkbox_stats",
          appendTo : $darkbox
        });

    function showImage() {

      // Prevent counter going out of bounds
      c = c < 0 ? n - 1 : c % n;

      // Get size of window so that we can define if
      // background-size needs to be "contain" or "auto".
      var doc  = document.documentElement,
          docW = Math.max(doc.clientWidth,  window.innerWidth  || 0),
          docH = Math.max(doc.clientHeight, window.innerHeight || 0),
          $cur = $imagesGroup.eq(c),
          description = $cur.data("darkbox-description"),
          src = $cur.data("darkbox");

      $darkbox.addClass("show spinner");
      $darkboxDescription.html(description);
      $darkboxStats.html(n < 2 ? "" : (c+1) +"/"+ n);

      $("<img/>").on("load", function() {
        var bigger = (this.width > docW || this.height > docH);
        $darkbox.removeClass("spinner").css({
          backgroundImage: "url('" + this.src + "')",
          backgroundSize: bigger ? "contain" : "auto"
        });
      }).attr("src", src);

    }

    // Call darkbox
    $(document).on("click", "[data-darkbox],[data-darkbox-group]", function(e) {

      var src = $(this).data("darkbox"),
          isDummy = !src, // (is just a link calling a group)
          groupID = $(this).data("darkbox-group");

      $imagesGroup = !groupID ? $(this) : $('[data-darkbox-group="'+ groupID +'"]').filter("[data-darkbox]");
      n = $imagesGroup.length;
      c = isDummy ? 0 : $imagesGroup.index( this );

      $prevNext.toggle(n>1); // Hide prev/next if we have a single image
      $darkbox.css({backgroundImage:"none"});

      showImage(); // aand, ACTION!
    });

    // Keyboard navigation
    $(document).on("keyup", function (e) {

      var k = e.which;

      if (k === 27) /*ESC */ {
        $darkbox.removeClass("show");
      }
      if (k === 37) /*LEFT*/ {
        --c;
        showImage();
      }
      if (k === 39) /*RIGHT*/ {
        ++c;
        showImage();
      }
    });
    
  });
}());
