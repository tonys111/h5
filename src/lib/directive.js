import Vue from "vue"
Vue.directive('border1px', {
    bind(el, arg) {
        console.log(el)
        console.log(arg)
        el.setAttribute(
            'style', 
            `
            width: 100px;
            `
        )
        // if(process.env.NODE_ENV === 'production' && window.isSupportWebp){
        //     const replaceURL = (oldURL) => {
        //         let newURL = ''
        //         let arrURL = oldURL.split('.')
        //         const len = arrURL.length
        //         arrURL[len - 1] = 'webp'
        //         arrURL.forEach((elm, index) => {
        //             if(index < len-1) {
        //                 newURL += elm + '.'
        //             } else {
        //                 newURL += elm
        //             }
        //         });
        //         return newURL
        //     }
        //     if(el.tagName === 'IMG'){
        //         el.setAttribute("src", replaceURL(el.src));
        //     } else {
        //         el.setAttribute('style', `background-image:url(${replaceURL(val.value)})`);
        //     }
        // }
    }
})