export default (router, store) => {
    router.beforeEach((to, from, next) => {
        store.commit('writeRouter', to.path)
        console.log(store.state)
        next()
    })
}