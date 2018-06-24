# Web工程大作业-项慕吧指南 by wxj
> 采用现代的前后端分离开发模式，前端与后端通过接口以JSON的数据形式进行通讯和交互，前后端隔离开发保证了异步工作的高效

## 前后端代码仓库地址
- 前端：https://github.com/wxjackie/newProjbarFE
- 后端：https://github.com/wxjackie/newProjbarBE

## 基本技术栈

前端
- HTML5
- CSS3
- jQuery
- Layui

后端
- Spring Boot
- MySQL

## 部署流程
1. 提交自己的代码前最好先git pull一下，防止出现大范围的冲突
2. 修改代码后，首先`git add .`提交所有修改的文件到暂存区，然后`git commit -m "do something" `，然后推送到远程仓库`git push origin master`
3. 登录到服务器并pull最新的代码，`ssh root@123.206.87.13`，建议自己在hosts里面加个方便的别名，前端需要进入前端代码主目录`cd /usr/share/nginx/html/projbar`，然后进行`git pull`即可；
后端代码`/root/projbar`，同样`git pull`，注意拉下最新的代码后需要杀死之前的java项目进程，重新打jar包，并运行jar包。
4. 杀死之前的Spring Boot进程：首先`netstat -anp | grep 8081`看pid是多少，然后直接`kill pid`就可以
5. 后台打包并运行jar包：首先在根目录进行`mvn package`，然后进入`target`目录下，进行`java -jar projbar-0.0.1-SNAPSHOT.jar 1>log 2>&1 &`，jar包后面的命令意思是将标准输出和错误输出都重定向至log文件并后台运行。
