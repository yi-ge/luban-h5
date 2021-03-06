简体中文 | [English](./README.en.md)

目录
- [鲁班H5是什么？](#%E9%B2%81%E7%8F%ADh5%E6%98%AF%E4%BB%80%E4%B9%88)
- [Screenshots](#screenshots)
- [Features](#features)
- [安装](#%E5%AE%89%E8%A3%85)
- [更多说明](#%E6%9B%B4%E5%A4%9A%E8%AF%B4%E6%98%8E)
  * [前端组件说明](#%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6%E8%AF%B4%E6%98%8E)
  * [技术栈（当前）](#%E6%8A%80%E6%9C%AF%E6%A0%88%E5%BD%93%E5%89%8D)
- [👨🏻‍💻👩🏻‍💻交流群](#%E4%BA%A4%E6%B5%81%E7%BE%A4)
- [代码目录说明](#代码目录说明)
  * [前端部分](#前端部分)

### 鲁班H5是什么？
鲁班H5是基于Vue2.0开发的，通过拖拽的形式，生成页面的工具，类似[易企秀](http://www.eqxiu.com/)、[百度 H5](https://h5.baidu.com) 等工具


### Screenshots
> [在线访问地址](https://ly525.github.io/luban-h5)

> [更多作品演示图片，点击查看](https://github.com/ly525/luban-h5/issues/15)

![image](https://user-gold-cdn.xitu.io/2019/8/17/16ca02d61136ed30?imageslim)
![image](https://user-images.githubusercontent.com/12668546/63207252-4f367400-c0f5-11e9-952a-9a3f6f72a710.png)



### Features
1. 编辑器
    - [x] 参考线
    - [x] 吸附线、组件对齐
    - [x] 拖拽改变组件形状
    - [x] 元素: 复制（画布）
    - [x] 元素: 删除（画布）
    - [x] 元素: 编辑（画布）
    - [x] 页面：新增
    - [x] 页面：复制
    - [x] 页面：删除
    - [x] 快速预览
    - [x] 撤销、重做

2. 组件系统
    - [x] 文字
    - [x] 普通按钮
    - [x] 表单按钮
    - [x] 表单输入框
    - [x] 普通图片
    - [ ] 背景图
    - [ ] 视频（Iframe形式）

3. 增强功能
    - [ ] 上传 PSD，一键转换为 H5(已经调研，可以实现)
    - [ ] 图片库
    - [ ] 第三方无版权图片搜索
    - [ ] 自定义脚本(已经调研，可以实现)

4. 后端 API
    - [x] 创建、保存、更新作品
    - [x] 表单数据收集
    - [x] 表单数据展示
    - [x] 在线预览
    - [x] 二维码预览

---

### 安装
> 说明：project：项目根目录

1. 前端
    1. 编辑器部分请参照 [`project/front-end/h5/README.md`](https://github.com/ly525/luban-h5/blob/dev/front-end/h5/README.md)

2. 后端
     1. 后端 API 部分请参照 [`project/back-end/h5-api/README.md`](https://github.com/ly525/luban-h5/blob/dev/back-end/h5-api/README.md)

#### Docker 部署

请确保您的`80`端口和`443`端口均打开，如果已经配置了其它项目，请进行手工调整。

1. 修改`yourdomain.tld`为您的前端域名并解析到服务器。
2. 修改`api.yourdomain.tld`为您的后端域名并解析到服务器。
3. 依次执行以下命令。

```bash
# Clone luban-h5
git clone https://github.com/ly525/luban-h5.git
cd luban-h5

# Install require package
docker run --rm -v `pwd`:/root -w /root/back-end/h5-api node:12.8.1 bash -c "yarn && NODE_ENV=production yarn build"

docker run --rm -v `pwd`:/root -w /root/front-end/h5 \
    --env "PUBLIC_PATH=/" \
    --env "PROD_API_ORIGIN=api.yourdomain.tld" \
    node:12.8.1 bash -c "yarn && NODE_ENV=production yarn build && node build/engine.webpack.js"

# Start back-end
docker run --detach \
    --name nginx-proxy \
    --publish 80:80 \
    --publish 443:443 \
    --volume /etc/nginx/certs \
    --volume /etc/nginx/vhost.d \
    --volume /usr/share/nginx/html \
    --volume /var/run/docker.sock:/tmp/docker.sock:ro \
    jwilder/nginx-proxy

docker run --detach \
    --name nginx-proxy-letsencrypt \
    --volumes-from nginx-proxy \
    --volume /var/run/docker.sock:/var/run/docker.sock:ro \
    jrcs/letsencrypt-nginx-proxy-companion

docker run -itd -m 512m \
    --restart=always \
    --name luban-h5-front \
    -v `pwd`/front-end/h5/dist:/usr/share/nginx/html \
    --env "NODE_ENV=production" \
    --env "VIRTUAL_HOST=yourdomain.tld" \
    --env "LETSENCRYPT_HOST=yourdomain.tld" \
    --env "PROD_API_ORIGIN=api.yourdomain.tld" \
    nginx

# Start font-end
docker run -itd -m 1024m \
    --name luban-h5-api \
    --restart=always \
    -v `pwd`:/root -w /root/back-end/h5-api \
    -p 1337:1337 \
    --env "NODE_ENV=production" \
    --env "VIRTUAL_PORT=1337" \
    --env "VIRTUAL_HOST=api.yourdomain.tld" \
    --env "LETSENCRYPT_HOST=api.yourdomain.tld" \
   --restart=always node:12.8.1 \
   yarn start
```

稍等片刻，访问`https://你的域名`，部署完成。

关于Nginx、SSL的配置，可以参考：https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion

### 更多说明
#### 前端组件说明
1. `lbp-` 全称为 `lu-ban-plugin-`, 意思为 `鲁班H5的插件`，位置：`front-end/h5/src/components/plugins`


#### 技术栈（当前）
1. 前端：[Vue.js](https://vuejs.org/v2/guide/)
2. 后端：[Strapi](https://strapi.io/)
3. 存储：[Sqlite](https://mongodb.com)

---

### 交流群
*** 
因为微信群二维码会过期，所以 微信群和QQ群 的二维码请前往查看[鲁班-H5 微信群和QQ群](https://github.com/ly525/luban-h5/issues/57) 查看
***

#### 钉钉讨论组（推荐, 对代码排版相对友好）

> #!en: Scan the DingTalk QR code using [Dingtalk App](https://www.dingtalk.com)

> For users in other languages, please keep using Github issue tracker. 🤟

<img src="https://user-images.githubusercontent.com/12668546/61447488-a379f700-a983-11e9-9956-139352a2585d.png" width="200px">


### 代码目录说明
#### 前端部分
> 推荐先看 router.js, 再从 front-end/h5/src/views/Editor.vue 开始了解，这里是编辑器的入口

    front-end/h5/src                # 前端源码目录：包含编辑器、作品管理、表单统计等部分
    ├── assets
    │   ├── 403.svg
    │   ├── 404.svg
    │   ├── 500.svg
    │   ├── logo.png
    │   ├── placeholder-for-work.svg
    │   └── unauth-page-illustration.svg
    ├── components
    │   ├── core                    # 核心部分
    │   │   ├── editor              # 编辑器模块
    │   │   │   ├── canvas          # 画布：编辑模式 + 快速预览模式
    │   │   │   │   ├── edit.js     # 编辑模式对应画布
    │   │   │   │   └── preview.js  # 快速预览模式对应的画布
    │   │   │   ├── edit-panel      # 编辑器右侧的编辑、配置面板
    │   │   │   │   ├── action.js   #
    │   │   │   │   ├── props.js    # 组件属性编辑面板
    │   │   │   │   └── script.js   # 自定义脚本
    │   │   │   ├── header
    │   │   │   ├── modals
    │   │   │   │   └── preview.vue # 预览弹窗
    │   │   │   ├── shortcuts-panel # 插件列表对应的快捷按钮
    │   │   │   │   ├── index.js
    │   │   │   │   └── shortcut-button.js
    │   │   │   └── index.js
    │   │   ├── models              # 编辑器中的各种 model
    │   │   │   ├── element.js      # 插件在画布中对应的元素
    │   │   │   ├── page.js         # 页面
    │   │   │   └── work.js         # 整个H5作品
    │   │   ├── styles
    │   │   │   └── index.scss
    │   │   └── support             # 辅助支持部分
    │   │       └── shape.js        # 拖拽改变元素形状
    │   ├── plugins                 # 插件列表：按钮、表单(提交按钮+输入框)、文字、图片
    │   │   ├── lbp-button.js
    │   │   ├── lbp-form-button.js
    │   │   ├── lbp-form-input.js
    │   │   ├── lbp-picture-placeholder.jpg
    │   │   ├── lbp-picture.js
    │   │   └── lbp-text.js
    │   └── HelloWorld.vue
    ├── constants                  # 常量配置
    │   └── api.js                 # 后端 API 接口地址等配置
    ├── mixins                     # 加载插件
    │   └── load-plugins.js
    ├── pages
    │   ├── editor                 # 核心编辑器入口
    │   ├── home
    │   └── index
    ├── store
    │   ├── modules
    │   │   ├── editor.js
    │   │   ├── element.js
    │   │   ├── loading.js
    │   │   ├── page.js
    │   │   ├── user.js
    │   │   ├── visible.js
    │   │   └── work.js
    │   ├── plugins               # vuex 插件
    │   │   └── undo-redo         # 撤销、重做
    │   │       ├── History.js
    │   │       └── index.js
    │   └── index.js
    ├── utils
    │   ├── element.js
    │   ├── http.js
    │   └── strapi.js
    ├── views
    │   ├── work-manager
    │   │   ├── form-stat
    │   │   │   ├── column.js
    │   │   │   ├── detail.vue
    │   │   │   └── index.vue
    │   │   ├── index.vue
    │   │   └── list.vue
    │   ├── About.vue
    │   ├── Editor.vue           # 编辑器入口，对核心编辑器做了一层包装，在这里加载插件列表
    │   └── Home.vue
    ├── App.vue
    ├── engine-entry.js          # 用于在手机端预览、查看H5作品的入口
    ├── main.js                  # 编辑器 + work-manager(作品管理页面) 的入口
    ├── registerServiceWorker.js
    └── router.js                # 页面路由
