export default (router, store) => {
    router.beforeEach((to, from, next) => {
        store.commit('writeRouter', to.path)
        next()
    })
}