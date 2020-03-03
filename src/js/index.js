var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
//nav_top
getList()
function getList(){
  $.ajax({
    url:"../lib/nav.json",
    dataType:"json",
    success:function(res){
      console.log(res);
      //1.准备一个空字符串
      let str=''
      //2.进行拼接
      //遍历外层数组，先把一级标题写上
    
      res.forEach(item=>{
        str +=`
        <li>
          <h2>${item.title}</h2>
          <ol>
          `
          //遍历里层数组，渲染ol下面的li
          //里层数组有多少项，就渲染几个二级li放在页面中
          item.list.forEach(item1=>{
            str +=`<li><a>${item1.name}</a></li>`

          })
          str +=`
          </ol>
    </li>
        
        `
      })
      //4.3填充到nav_top里面
      $('.nav_top>ol')
        .children('li')        
        .last('li')
        .on({
          mouseenter:()=>$('#mue-bd').stop().slideDown(),
          mouseleave:()=>$('#mue-bd').stop().slideUp()
        })
      //3.渲染到页面
      $('#mue-bd > ul').html(str) 
      $('#mue-bd').on({
          mouseover:function(){$(this).finish().show()},
          mouseout:function(){$(this).finish().slideUp()}
      })
    }
  })
}

