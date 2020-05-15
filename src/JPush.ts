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
  init(): Promise<RetInit> {
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
  getInstance(): AJPush {
    return this.JP
  }
  getRegistrationId(): Promise<RetGetRegistrationId> {
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
  setListener(cb?: Callback<RetSetListener, CallbackError>): void {
    this.JP.setListener(cb)
  }
  removeListener(): void {
    this.JP.removeListener()
  }
  bindAliasAndTags(params: BindAliasAndTagsParams, cb?: Callback<RetBindAliasAndTags, CallbackError>): void  {
    this.JP.bindAliasAndTags(params, cb)
  }
  clearNotification(params: ClearNotificationParams, cb?: Callback<CallbackResult, CallbackError>): void {
    this.JP.clearNotification(params, cb)
  }
  setBadge(params: SetBadgeParams): void {
    this.JP.setBadge(params)
  }
  androidAppintent(cb?: Callback<PushData>): void {
    api.addEventListener({
      name: 'appintent'
    }, (ret: RetAndroidAppintent, err: CallbackError) => {
        if (ret && ret.appParam.ajpush) {
          cb && cb(ret.appParam.ajpush, err)
        }
    })
  }
  iosNoticeclicked(cb?: Callback<IosPushData>): void {
    api.addEventListener({
      name: 'noticeclicked'
    }, (ret: RetiosNoticeclicked, err: CallbackError) => {
        if (ret && ret.value) {
          cb && cb(ret.value, err)
        }
    })
  }
}



