require.config({
  paths: {
    jquery: 'http://cdn.bootcss.com/jquery/1.12.4/jquery',
    jqueryUI: 'http://code.jquery.com/ui/1.10.4/jquery-ui'
  }
})


require(['jquery', 'window'], function ($, Window) {
  $('#a').on('click', function () {

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
})
