define(['jquery', 'jqueryUI'], function ($, $UI) {
  function Window() {
    this.cfg = {
      width: 500,
      height: 300,
      title: '系统消息',
      content: '',
      hasCloseBtn: false,
      hasMask: true,
      skinClassName: null,
      handler4AlertBtn: null,
      text4AlertBtn: '确定',
      handler4CloseBtn: null,
      isDraggable: true
    }
    this.handlers = {};
  }

  Window.prototype = {
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
    alert: function (cfg) {
      var CFG = $.extend(this.cfg, cfg);
      var boundingBox = $(
        '<div class="window_boundingBox">\
          <div class="window_header">'+ CFG.title +'</div>\
          <div class="window_body">'+ CFG.content +'</div>\
          <div class="window_footer"><input type="button" class="window_alertBtn" value="'+ CFG.text4AlertBtn +'" /></div>\
        </div>'
      );
      var btn = boundingBox.find('.window_alertBtn');
      var mask = null;
      var that = this;
      if(CFG.hasMask) {
        mask = $('<div class="window_mask"></div>')
        mask.appendTo('body');
      }

      boundingBox.appendTo('body');
      btn.on('click', function () {
        // CFG.handler4AlertBtn && CFG.handler4AlertBtn();
        boundingBox.remove();
        mask && mask.remove();
        that.fire('alert');
      });

      boundingBox.css({
        width: this.cfg.width + 'px',
        height: this.cfg.height + 'px',
        left: (this.cfg.x || (window.innerWidth - this.cfg.width) / 2) + 'px',
        top: (this.cfg.y || (window.innerHeight - this.cfg.height) / 2) + 'px'
      });

      if(CFG.hasCloseBtn) {
        var closeBtn = $('<span class="window_closeBtn">X</span>');
        closeBtn.appendTo(boundingBox);
        closeBtn.on('click', function () {
          // CFG.handler4CloseBtn && CFG.handler4CloseBtn();
          boundingBox.remove();
          mask && mask.remove();
          that.fire('close');
        })
      }

      if(CFG.handler4AlertBtn) {
        this.on('alert', CFG.handler4AlertBtn);
      }

      if(CFG.handler4CloseBtn) {
        this.on('close', CFG.handler4CloseBtn);
      }

      if(CFG.skinClassName) {
        boundingBox.addClass(CFG.skinClassName);
      }

      if(CFG.isDraggable) {
        if(CFG.dragHandle) {
          boundingBox.draggable({
            handle: CFG.dragHandle
          });
        } else {
          boundingBox.draggable();
        }
      }

      return this;
    },
    confirm: function () {

    },
    prompt: function () {

    }
  }
  return Window;
})
