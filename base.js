//导航条初始化
var navStr = `
    <!-- 导航栏 -->
    <ul class="layui-nav layui-nav-left" id="nav">
        <li class="layui-nav-item"><a href="index.html">项慕吧</a></li>
        <li class="layui-nav-item">
          <a href="javascript:;">项目</a>
          <dl class="layui-nav-child">
            <dd><a href="index.html">所有</a></dd>
            <dd><a href="index.html?cate=1">竞赛</a></dd>
            <dd><a href="index.html?cate=2">外包</a></dd>
            <dd><a href="index.html?cate=3">创业</a></dd>
            <dd><a href="index.html?cate=4">实验</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;">人才</a>
          <dl class="layui-nav-child">
            <dd><a href="partner.html">所有</a></dd>
            <dd><a href="partner.html?role=1">开发</a></dd>
            <dd><a href="partner.html?role=2">产品</a></dd>
            <dd><a href="partner.html?role=3">设计</a></dd>
            <dd><a href="partner.html?role=4">运营</a></dd>
          </dl>
        </li>
    </ul>
    `;
$("body").prepend(navStr);
footerStr = `
<div class="layui-col-md12 layui-fluid-container" style="margin-top: 30px;;background: #383838; height: 160px;">
    <div class="footer-info">
        <br />
        2018 - 项慕吧<br />
        ProjBar
    </div>
</div>
`;
$("body").append(footerStr);
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: BASEURL + "public/loginCheck",
        xhrFields: { withCredentials: true},
        success: function(result, status) {
            if (result.code == 0) {
                appendStr = `
                <ul class="layui-nav layui-layout-right">
                    <li class="layui-nav-item">
                    <a href="release.html">发布项目</a>
                    </li>
                    <li class="layui-nav-item"> 
                    <a href="center.html">个人中心</a>
                    </li>
                    <li class="layui-nav-item">
                    <a href="javascript:;" id="logout">注销</a>
                    </li>
                </ul>
                `;
            }else{
                appendStr = `
                <ul class="layui-nav layui-layout-right">
                    <li class="layui-nav-item">
                    <a href="login.html">登录</a>
                    </li>
                    <li class="layui-nav-item">
                    <a href="register.html">注册</a>
                    </li>
                </ul>
                `;
            }
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