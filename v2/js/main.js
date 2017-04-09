require.config({
  paths: {
    jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery',
    jqueryUI: 'http://code.jquery.com/ui/1.10.4/jquery-ui'
  }
})


require(['jquery', 'window'], function ($, Window) {

  $('#j-alert').on('click', function () {
    var win = new Window();
    win.alert({
      title: '提示',
      content: 'welcome!',
      handler: function () {
        alert('you click the button');
      },
      width: 300,
      height: 150,
      y: 50,
      hasCloseBtn: true,
      text4AlertBtn: 'OK',
      dragHandle: '.window_header',
      // skinClassName: 'window_skin_a',
      handler4AlertBtn: function () {
        alert('you click the alert button');
      },
      handler4CloseBtn: function () {
        alert('you click the close button');
      }
    })
    .on('alert', function () {
      alert('the second alert handler');
    })
    .on('alert', function () {
      alert('the third alert handler');
    })
    .on('close', function () {
      alert('the second close handler');
    })
  })

  $('#j-comfirm').on('click', function () {
    var win = new Window();
    win.confirm({
      title: '系统消息',
      content: '您确定要删这个文件吗',
      width: 300,
      height: 100,
      y: 50,
      text4ConfirmBtn: '是',
      text4CancelBtn: '否',
      dragHandle: '.window_header',
    })
    .on('confirm', function () {
      alert('确定');
    })
    .on('cancel', function () {
      alert('取消');
    })
  });

  
  $('#j-prompt').on('click', function () {
    var win = new Window();
    win.prompt({
      title: '请输入名字',
      content: '您输入的信息保密',
      width: 300,
      height: 150,
      y: 50,
      text4PromptBtn: '输入',
      defaultValue4PromptInput: '张三',
      dragHandle: '.window_header',
      handler4PromptBtn: function (inputValue) {
        alert('您输入的内容是：' + inputValue);
      },
      handler4CancelBtn: function () {
        alert('取消');
      }
    })
  })

  $('#j-common').on('click', function () {
    var win = new Window();

    win.common({
      content: '我是一个通用弹窗',
      width: 300,
      height: 150,
      y: 50,
      hasCloseBtn: true
    })
  })
})
