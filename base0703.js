//导航条判断渲染
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: BASEURL + "public/loginCheck",
        xhrFields: { withCredentials: true},
        success: function(result, status) {
            if (result.code == 0) {
                appendStr = `
                <li class="layui-nav-item">
                <a href="login.html">个人中心</a>
                </li>
                <li class="layui-nav-item">
                <a id="logout">注销</a>
                </li>
                `;
            }else{
                appendStr = `
                <li class="layui-nav-item">
                <a href="login.html">登录</a>
                </li>
                <li class="layui-nav-item">
                <a href="register.html">注册</a>
                </li>
                `;
            }
            console.log(appendStr);
            $(".layui-nav").append(appendStr);
            $("#logout").on('click',function(){
                $.ajax({
                    type: "GET",
                    url: BASEURL + "public/logout",
                    xhrFields: { withCredentials: true},
                    success: function(result, status) {
                        if (result.code == 0) 
                            window.location.href = "index.html";
                    }
                });
            });
        }
    });
});
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}