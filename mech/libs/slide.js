
    $( document ).ready(function( $ ) {
        $( '#my-slider' ).sliderPro({
            width: 500,
            height: 375,

            buttons: false,
            waitForLayers: true,
            thumbnailWidth: 128,
            thumbnailHeight: 56,
            thumbnailsPosition:'left',
            thumbnailArrows:true,
            thumbnailPointer: true,
            autoplay: false,
            autoScaleLayers: false,
            breakpoints: {
                500: {
                    thumbnailWidth: 120,
                    thumbnailHeight: 50
                }
            }
        });
    });