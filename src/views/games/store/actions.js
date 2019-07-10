export default {
    gggetAppURL({ state, commit, rootState }){
        console.log(state)
        console.log(rootState)
        console.log(commit)
        // appDownloadPageUrl({ domain: window.location.host }).then(res=>{
        //     commit('CHANGE_GAME', res.body)
        // })
    },
    aaa(){
        console.log('aaa')
    },
    bbb(){
        console.log('bbb')
    }
}