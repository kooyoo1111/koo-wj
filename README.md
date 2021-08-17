![wjlogo.png](https://i.loli.net/2019/12/15/sYnuTIrDUwAfGgo.png)

---

这是一个简单的前后端分离项目，主要采用 Vue.js + SpringBoot 技术栈开发。

是在原github开源项目上进行了一些个人风格的diy和功能调整。
https://github.com/kooyoo1111/koo-wj

另外引入了element组件库和iconfont图标库帮助美化界面。

# 整体效果

## 1.首页

作为展示页面，包括开发这个项目的主要参考资料、近期更新和博主个人信息

用element组件库和阿里的iconfont图标库自己做了一下，感觉又学习了一个☝️


## 2.登录页面
使用shiro进行安全认证，（一直以为是跨域的问题来着

![登录页面](https://i.loli.net/2019/04/14/5cb2fd5b78ae7.png)

## 3.后台管理

包含 dashboard、内容管理、用户及权限管理等

将源项目中从后端数据库获取菜单改为前端生成的静态菜单，因为个人所需的功能比较单一不需要根据不同用户的权限展示不同菜单。


# 技术栈

## 1.前端技术栈

1.Vue  
2.ElementUI  
3.axios   

## 2.后端技术栈

1.Spring Boot  
2.Spring Data + JPA 
3.MySQL  ，mybatis
4.Shiro

# 项目部署
选择阿里云服务器centos系统进行部署。
上传文件用filezilla的sftp协议，事先手动搭建ecs服务器上的ftp站点。
在云服务器中使用docker分别部署springboot，mysql，mybatis，
使用nginx部署前端Vue应用。

该命令执行成功之后， `wj-vue` 目录下生成一个 `dist` 文件夹，可以将该文件夹中的两个文件 `static` 和 `index.html` 拷贝到 `wj` 项目中 `resources/static/` 目录下，然后直接运行 `wj` 项目，访问 `http://localhost:8443` ，实际上是把前端打包后作为静态文件，但不推荐使用这种方式。

前后端分离部署的方式详见教程第十篇：[「图片上传与项目的打包部署」](https://learner.blog.csdn.net/article/details/97619312)

# 教程
 

1.[项目简介](https://blog.csdn.net/Neuf_Soleil/article/details/88925013)

2.[使用 CLI 搭建 Vue.js 项目](https://blog.csdn.net/Neuf_Soleil/article/details/88926242)

3.[前后端结合测试（登录页面开发）](https://blog.csdn.net/Neuf_Soleil/article/details/88955387)

4.[数据库的引入](https://blog.csdn.net/Neuf_Soleil/article/details/89294300)

5.[使用 Element 辅助前端开发](https://blog.csdn.net/Neuf_Soleil/article/details/89298717)

6.[前端路由与登录拦截器](https://learner.blog.csdn.net/article/details/89422585)

7.[导航栏与图书页面设计](https://learner.blog.csdn.net/article/details/89853305)

8.[数据库设计与增删改查](https://learner.blog.csdn.net/article/details/92413933)

9.[核心功能的前端实现](https://learner.blog.csdn.net/article/details/95310666)

10.[图片上传与项目的打包部署](https://learner.blog.csdn.net/article/details/97619312)

11.[用户角色权限管理模块设计](https://learner.blog.csdn.net/article/details/100849732)

12.[访问控制及其实现思路](https://learner.blog.csdn.net/article/details/101121899)

13.[使用 Shiro 实现用户信息加密与登录认证](https://learner.blog.csdn.net/article/details/102690035)

14.[用户认证方案与完善的访问拦截](https://learner.blog.csdn.net/article/details/102788866)

15.[动态加载后台菜单](https://learner.blog.csdn.net/article/details/103114893)

16.[功能级访问控制的实现](https://learner.blog.csdn.net/article/details/103250775)

17.[后台角色、权限与菜单分配](https://learner.blog.csdn.net/article/details/103603726)

18.[博客功能开发](https://learner.blog.csdn.net/article/details/104033436)

19.[项目优化解决方案](https://learner.blog.csdn.net/article/details/104763090)

(持续更新中)

# 重要更新

## 2020
04-05 拆分前后端项目  
01-20 利用开源 markdown 编辑器实现文章展示与管理模块
 
---

## 2019 

12-01 实现功能级权限控制  
11-30 利用 vue-elment-admin 项目完善后台界面设计  
11-17 重构项目，完成搭建后台基础界面，实现按角色加载菜单，取消前台访问限制  
04-27 使用前端拦截器，数据库迁移至 mysql 8.0.15，后台管理页面初始化  
04-13 完成图片的上传功能  
04-11 完成图书分类功能  
04-08 完成图书分页功能  
04-06 完成图书查询功能  
04-05 完成图书修改功能  
04-04 完成图书删除功能  
04-03 完成图书新增功能
