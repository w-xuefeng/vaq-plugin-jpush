<div style="width:100%;text-align:center">
  <img src="https://vaq.wangxuefeng.com.cn/img/logo.png" height="100" style="margin-right:20px;">
  <img src="./assets/img/jpush.png" height="100">
</div>


# VAQ Plugin JPush
vue-apicloud-quickstart plugin for JPush

[APICloud JPush 模块文档](https://docs.apicloud.com/Client-API/Open-SDK/ajpush)

### 准备工作
- 1.在控制台选择添加 `JPush` 模块
- 2.在 `config.xml` 配置极光推送应用信息

```xml
 <feature name="ajpush">
   <param name="app_key" value="123456789" />
   <param name="channel" value="your channel" />
 </feature>
```
### 字段描述:
+ `app_key`：通过极光推送网站获得
+ `channel`: 渠道号 

### 使用示例

```ts
import JPush from 'vaq-plugin-jpush'

const jpush = new JPush(api.require('ajpush'))
// 创建实例的时候会自动调用 init() 方法进行初始化

// 也可以手动初始化
jpush.init().then(rs => {
  console.log(rs)
  // Todo
})

// 设置推送监听
jpush.setListener(ret => {
  console.log(ret)
  // Todo
})

// 移除消息监听
jpush.removeListener()

// 获取设备的标识 RegistrationID
jpush.getRegistrationId().then(rs => {
  console.log(rs)
  // Todo
})

// 绑定用户别名和标签。服务端可以指定别名和标签进行消息推送
jpush.bindAliasAndTags({
  alias: 'username-alias',
  tags: ['tag1', 'tag2']
}, rs => {
  console.log(rs)
  // Todo
})

// 在Android平台，当通知被点击后
jpush.androidAppintent(rs => {
  console.log(rs)
  // Todo
})

// 在iOS平台，当通知被点击后
jpush.iosNoticeclicked(rs => {
  console.log(rs)
  // Todo
})

// 清除极光推送发送到状态栏的通知,
// 待清除的通知id（等同于消息ID），为 -1 时清除所有，iOS 只支持清除所有，不能为空
jpush.clearNotification({ id: -1 }, rs => {
  console.log(rs)
  // Todo
})

// 设置应用图标右上角数字，只iOS有效
jpush.setBadge({ badge: 1 })

// 部分 Android 手机，如小米和三星的某些型号可以使用如下方法设置 badge， iOS 也生效
api.setAppIconBadge({ badge: 1 })

// apicloud 官方文档中的其他方法可以通过 实列实现
const mypush = jpush.getInstance()

// 通知极光推送SDK当前应用退入到后台
mypush.onPause()

// 通知极光推送SDK当前应用恢复到前台
mypush.onResume()

// 查询当前推送服务是否停止
mypush.isPushStopped()

// 停止Push推送
mypush.stopPush()

// 恢复Push推送
mypush.resumePush()

// 设置允许推送时间，只Android有效
mypush.setPushTime({ days: [1,2], startHour: 8, endHour: 20 })

// 设置通知静默时间，只Android有效
mypush.setSilenceTime({ startHour: 8, startMinute: 0, endHour: 20, endMinute: 59 })

```