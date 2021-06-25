import $ from 'jquery'

var jsonpUtil = {
    get(url,wd){
        $.ajax({
            url,//"//sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            async: false,
            timeout: 5000, //请求超时
            data: {
              wd,
              cb: "keydata",
            },
            success: function (json) {
              console.log("success", json);
            },
            error: function (xhr) {
              console.log("error", xhr);
              return;
            },
          });
    }
}

export default jsonpUtil;