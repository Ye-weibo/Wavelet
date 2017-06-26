function loginbox() {
    layer.open({
        type: 1,
        title: "登录窗口",
        area: ["400px", "270px"],
        content: $("#loginbox")
    });
}
function Login() {
    var username = $.trim($("#txtUserName").val());
    var pwd = $.trim($("#txtpwd").val());
    if (username == "" && pwd == "") {
        layer.msg("请输入用户名或者密码", {
            icon: 5,
            time:2000
        });
    } else {
        $.post("/Handler1.ashx", { "username": username, "pwd": pwd }, function (data) {
            if (data == "ok") {
                layer.msg("登录成功", {
                            icon: 6,
                            time: 2000
                        }, function () {
                            layer.close(),
                            location.href="http://www.ruanmou.net"
                        });
            } else {
                layer.msg("用户名或密码错误", {
                            icon: 5,
                            time: 2000
                        });
            }
        });

        //if(txtUsername=="admin"&&txtpwd=="123"){
        //    layer.msg("登录成功", {
        //        icon: 6,
        //        time: 2000
        //    }, function () {
        //        layer.close(),
        //        location.href="http://www.ruanmou.net"
        //    });
        //} else {
        //    layer.msg("用户名或密码错误", {
        //        icon: 5,
        //        time: 2000
        //    });
        //}
    }
}