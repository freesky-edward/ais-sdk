/**
 * 图像内容检测服务token请求方式的使用示例
 */
var content = require("./ais_sdk/image_moderation");
var token = require("./ais_sdk/gettoken");
var utils = require("./ais_sdk/utils");

// 初始化服务的区域信息，目前支持华北-北京一(cn-north-1)、亚太-香港(ap-southeast-1)等区域信息
utils.initRegion("cn-north-1");

var username = "*******";        // 配置用户名
var domain_name = "*******";     // 配置用户名
var password = "*******";        // 密码

var filepath = "./data/moderation-terrorism.jpg";
var data = utils.changeFileToBase64(filepath);

// obs链接需要和region区域一致，不同的region的obs资源不共享
demo_data_url = "https://ais-sample-data.obs.cn-north-1.myhuaweicloud.com/terrorism.jpg";

token.getToken(username, domain_name, password, function (token) {

    content.image_content(token, data, "", ["politics"], "", function (result) {
        console.log(result);
    });

    content.image_content(token, "", demo_data_url, ["politics"], "", function (result) {
        console.log(result);
    })
});