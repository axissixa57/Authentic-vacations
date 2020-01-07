if (window.innerWidth < 1113) {
  const contentToShow = $(".intro__form .content.content--right");
  const contentToClick = $(".intro__form .content.content--left");
  const content = $('.intro__form .content');

  contentToClick.click(() => {
    if (contentToShow.height() === 0) {
      autoHeightAnimate(contentToShow);
    }
  });

  $(document).mouseup(function(e){
    if (content.has(e.target).length === 0){
        contentToShow.stop().animate({ height: '0' }, 500);
    } 
});
}

const autoHeightAnimate = element => {
  const curHeight = element.height();
  const autoHeight = element.css("height", "auto").height();
  element.height(curHeight);
  element.stop().animate({ height: autoHeight }, 500);
};
