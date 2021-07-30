var $container = $('.container-main');
inView.offset(10);
inView('section.page-row').on('enter',function(el){
     var $bg = $(el).attr('data-background');
     $container.css('background-color', $bg);
});