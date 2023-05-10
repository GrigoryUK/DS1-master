import $ from 'jquery';
import { isTablet, isDesktop } from "../../functions/check-viewport";

// relocation
function relocationLink() {
    if(isTablet() || isDesktop()) {
      const html = document.querySelector('html')
      setTimeout(function () {
         return html.classList.add('page-is-load') ;        
      }, 1);
      $(document).on('click', '[href]', function () {
        if ($(this).attr('target') === '_blank') return;
        if ($(this).attr('target') === 'download') return;
        let href = $(this).attr('href');
        if (href.includes('#')) return;
        if (href.includes('mailto:')) return ;
        if (href.includes('tel:')) return ;
        $('html').addClass('relocation');
        setTimeout(function () {
          return location.href = href;
        }, 400);
        return false;


      });
    }

}

export default relocationLink;
