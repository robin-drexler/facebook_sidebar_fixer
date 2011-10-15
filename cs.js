$(function() {
    function fixElement($element) {
        var $wnd = $(window),
        $blueBar = $('#blueBar'),
        timer,
        highEnough,
        topPosition = $element.position().top,
        leftPosition = $element.offset().left
        
        $wnd.scroll(function() {
            if (timer) {
                clearTimeout(timer);
            }
            
            timer = setTimeout(function() {
                timer = null;
                highEnough = ($wnd.height() - $blueBar.height() > $element.height());
                    
                if ($wnd.scrollTop() >= topPosition && highEnough) {
                    $element.css({
                        position: 'fixed', 
                        top: $blueBar.height(),
                        left: leftPosition
                    });
                } else {
                    $element.css({
                        position: '', 
                        top: '',
                    });
                }
            }, 15);
        
        
        });
    }
    
    fixElement($('#leftCol'));
});
