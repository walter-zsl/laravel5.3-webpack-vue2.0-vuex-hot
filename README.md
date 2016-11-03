# laravel5.3-webpack-vue2.0-vuex-element-ui-hot
laravel5.3-webpack-vue2.0-vuex-element-ui-hot

start:
npm install 

watch: 
npm run dev  

（如果需要本地虚拟域名映射端口，需要修改根目录下server.js里面的proxy配置信息）

update server.js proxy

URL：http://localhost:8080/

build:
npm run build

URL：http://test.app/

主要整合了laravel5.3, vue2.0, vuex, element-ui, 文件修改无需刷新页面（热更新使用的是webpack-dev-middleware, webpack-hot-middleware）

支持vuex的...mapActions写法

