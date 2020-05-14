import AJPush, {
  RetInit,
  CallbackError,
  RetGetRegistrationId,
  RetAndroidAppintent,
  Callback,
  PushData,
  RetiosNoticeclicked,
  IosPushData,
  RetSetListener,
  BindAliasAndTagsParams,
  RetBindAliasAndTags,
  ClearNotificationParams,
  CallbackResult,
  SetBadgeParams
} from './model'

export default class JPush {
  JP: AJPush;
  constructor (jp: AJPush) {
    this.JP = jp
    this.JP.init()
  }
  init() {
    return new Promise((resolve: (ret?: RetInit) => void, reject: (err?: CallbackError) => void) => {      
      this.JP.init((ret, err) => {
        if (ret && ret.status) {
          resolve(ret)
        } else {
          reject(err)
        }
      })
    })
  }
  getInstance() {
    return this.JP
  }
  getRegistrationId() {
    return new Promise((resolve: (ret?: RetGetRegistrationId) => void, reject: (err?: CallbackError) => void) => {      
      this.JP.getRegistrationId((ret, err) => {
        if (ret.id) {
          resolve(ret)
        } else {
          reject(err)
        }
      })
    })
  }
  setListener(cb?: Callback<RetSetListener, CallbackError>) {
    this.JP.setListener(cb)
  }
  removeListener() {
    this.JP.removeListener()
  }
  bindAliasAndTags(params: BindAliasAndTagsParams, cb?: Callback<RetBindAliasAndTags, CallbackError>)  {
    this.JP.bindAliasAndTags(params, cb)
  }
  clearNotification(params: ClearNotificationParams, cb?: Callback<CallbackResult, CallbackError>) {
    this.JP.clearNotification(params, cb)
  }
  setBadge(params: SetBadgeParams) {
    this.JP.setBadge(params)
  }
  androidAppintent(cb?: Callback<PushData>) {
    api.addEventListener({
      name: 'appintent'
    }, (ret: RetAndroidAppintent, err: CallbackError) => {
        if (ret && ret.appParam.ajpush) {
          cb && cb(ret.appParam.ajpush, err)
        }
    })
  }
  iosNoticeclicked(cb?: Callback<IosPushData>) {
    api.addEventListener({
      name: 'noticeclicked'
    }, (ret: RetiosNoticeclicked, err: CallbackError) => {
        if (ret && ret.value) {
          cb && cb(ret.value, err)
        }
    })
  }
}



