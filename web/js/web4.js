$(function(){
   setInterval(function(){
       $('.slide').first().animate({'margin-left':'-800px'},function(){
           $(this).detach().appendTo('.slide-waiper').removeAttr('styel')
       })
   },1000)
})