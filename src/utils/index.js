/********************** 数据存储 **********************/

// localStorage
export const setLocal = (key, value) => {
    if (key && value) {
        const val = JSON.stringify(value)
        localStorage.setItem(key, val)
    } else {
        throw new Error(`Missing 'key' or 'value'`)
    }
}
export const getLocal = key => JSON.parse(localStorage.getItem(key))
export const RemoveLocal = key => { localStorage.removeItem(key) }

// sessionStorage
export const setSession = (key, value) => {
    if (key && value) {
        const val = JSON.stringify(value)
        sessionStorage.setItem(key, val)
    } else {
        throw new Error(`Missing 'key' or 'value'`)
    }
}
export const getSession = key => JSON.parse(sessionStorage.getItem(key))
export const RemoveSession = key => { sessionStorage.removeItem(key) }

/********************** 数据存储 end **********************/

/********************** 判断数据类型 **********************/

export const isObj = obj => Object.prototype.toString.call(obj) === "[object Object]"

export const isArr = obj => Object.prototype.toString.call(obj) === "[object Array]"

export const isNull = obj => Object.prototype.toString.call(obj) === "[object Null]"

export const isUndefined = obj => Object.prototype.toString.call(obj) === "[object Undefined]"

/********************** 判断数据类型 END **********************/

/********************** 验证类 **********************/
    /**
     * 判断中国电话号码
     * @param  {nuber} val 号码   
     * @return {[type]}     [description]
     */
    // isPhoneNum(val) {
    //     if (/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(val)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // },

    // specialWord(value) {
    //     const regEn = /[ `~=!@#$%^&*()\-_+<>?:"{},.\/;'[\]]/im,
    //         regCn = /[ ·！=#￥（——）：；“”‘、，|《。》？、【】[\]]/im
    //     if (regEn.test(value) || regCn.test(value)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // },

    // isChinese(val) {
    //     const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    //     if (reg.test(val)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // },

    // chinese(val) {
    //     const re = /[^\u4e00-\u9fa5]/
    //     if (re.test(val)) {
    //         return false
    //     } else {
    //         return true
    //     }
    // },

    // abc123(val) {
    //     const re = /^[a-zA-Z\d]+$/
    //     if (re.test(val)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // },
    // /**
    //  * 判断是否未纯数字
    //  * @param  {all} val
    //  * @return {boolean}
    //  */
    // isNumber(val) {
    //     if ((/^[1-9]+[0-9]*]*$/.test(val))) {
    //         return true
    //     } else {
    //         return false
    //     }
    // },
    /********************** 验证类 END **********************/

    //区分设备
    // isClients() {
    //     const u = navigator.userAgent, app = navigator.appVersion;
    //     const isAndroidH5 = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;//android终端或者uc浏览器
    //     const isiOSH5 = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);//ios终端
    //     const isAndroidApp = window.native;//安卓APP
    //     const isIosApp = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);//苹果APP
    //     if (isAndroidApp){
    //         return '安卓APP'
    //     } else if (isIosApp){
    //         return '苹果APP'
    //     } else if (isAndroidH5){
    //         return '安卓H5'
    //     } else if (isiOSH5) {
    //         return '苹果H5'
    //     } else {
    //         return '未知设备'
    //     }
    // },