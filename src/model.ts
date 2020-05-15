export interface CallbackResult {
  status: 0 | 1;
}

export interface RetInit {
  status: 0 | 1;
}

export interface RetSetListener {
  id: string | number;
  title: string;
  content: string ;
  extra: object;
  isNotification?: boolean;
}

export interface RetBindAliasAndTags {
  statusCode: number;
}

export interface RetIsPushStopped {
  isStopped: 0 | 1;
}

export interface RetGetRegistrationId {
  id: number | string;
}

export type CallbackError = object

export interface BindAliasAndTagsParams {
  alias: string;
  tags: string[];
}

export interface ClearNotificationParams {
  id: number;
}

export interface SetPushTimeParams {
  days: (0|1|2|3|4|5|6)[];
  startHour: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23;
  endHour: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23;
}

export interface SetSilenceTimeParams {
  startHour: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23;
  startMinute: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59;
  endHour: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23;
  endMinute: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59;
}

export interface SetBadgeParams {
  badge: number;
}

export type Callback<T = CallbackResult, E = CallbackError> = (ret: T, err: E) => void

export default interface AJPush {
  init: (cb?: Callback<RetInit>) => void;
  setListener: (cb?: Callback<RetSetListener>) => void;
  removeListener: () => void;
  bindAliasAndTags: (params: BindAliasAndTagsParams, cb?: Callback<RetBindAliasAndTags>) => void;
  onResume: () => void;
  onPause: () => void;
  clearNotification: (params: ClearNotificationParams, cb?: Callback) => void;
  setPushTime: (params: SetPushTimeParams, cb?: Callback) => void;
  setSilenceTime: (params: SetSilenceTimeParams, cb?: Callback) => void;
  stopPush: (cb?: Callback) => void;
  resumePush: (cb?: Callback) => void;
  isPushStopped: (cb?: Callback<RetIsPushStopped>) => void;
  setBadge: (params: SetBadgeParams) => void;
  getRegistrationId: (cb?: Callback<RetGetRegistrationId>) => void;
}

export interface PushData {
  id: string | number;
  title: string;
  content: string;
  extra: object;
}

export type AppParam = { ajpush: PushData }

export type RetAndroidAppintent = { appParam: AppParam }

export type RetiosNoticeclicked = { value: IosPushData }

export type IosPushData = { content: string; extra: object }
