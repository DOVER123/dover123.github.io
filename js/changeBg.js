/*
 * @Author: Dongge
 * @Description: change background
 * @Date: 2019-03-27 18:23:52
 * @LastEditTime: 2019-03-27 19:05:08
 */
(function () {
    var i = localStorage.getItem("bgnum") || 1;
    if(!$('body').attr('class')){
    	$('body').attr('class','bg'+i);
    } 
    $('#side-button2').on('click',function(){
        var i = localStorage.getItem("bgnum") || 1;     
        if(i<3){
            i++;   
        }else{
            i =1;
        }
        localStorage.setItem("bgnum",i); 
        $('body').attr('class','bg'+i);
    })
})();