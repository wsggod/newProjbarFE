// const BASEURL = "http://123.206.87.13:8081/";
const BASEURL = "http://localhost:8081/";
$(document).ready(function(){
    $.get(BASEURL + "public/loginCheck", function(result, status){
        var appendStr = "";
        console.log(result);
        if (result.code == 0) {
            appendStr = `
            <li class="layui-nav-item">
                <a href="javascript:;">${result.data}</a>
                <dl class="layui-nav-child">
                <dd><a href="">个人资料</a></dd>
                <dd><a href="">我的项目</a></dd>
                <dd><a href="">通知消息</a></dd>
                <dd><a href="">注销</a></dd>
                </dl>
            </li>
            `;
        }else {
            appendStr = `
            <li class="layui-nav-item">
              <a href="login.html">登录</a>
            </li>
            <li class="layui-nav-item">
              <a href="register.html">注册</a>
            </li>
            `;
        }
        $(".layui-nav").append(appendStr);
    });
});