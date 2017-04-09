define(['jquery'], function ($) {
  function Widget() {
    this.boundingBox = null;  //属性：最外层容器
  }

  Widget.prototype = {
    on: function (type, handler) {
      if(typeof this.handlers[type] == 'undefined') {
        this.handlers[type] = [];
      }
      this.handlers[type].push(handler);
      return this;
    },
    fire: function (type, data) {
      if(this.handlers[type] instanceof Array) {
        var handlers = this.handlers[type];
        for (var i = 0, len = handlers.length; i < len; i++) {
          handlers[i](data);
        }
      }
    },
    //方法： 渲染组件（ 创建节点，绑定事件，初始化UI ）
    render: function (container) {
      this.renderUI();
      this.handlers = {};
      this.bindUI();
      this.syncUI();
      $(container || document.body).append(this.boundingBox);
    },
    //方法： 销毁组件
    destroy: function () {
      this.destructor();
      this.boundingBox.off(); //移除在 boundingBox 上绑定的事件
      this.boundingBox.remove();
    },
    //接口：添加DOM节点
    renderUI: function () {

    },
    //接口：监听事件
    bindUI: function () {

    },
    //接口： 初始化组件属性
    syncUI: function () {

    },
    //接口： 销毁前的处理函数
    destructor: function () {

    }
  }

  return Widget;
})
