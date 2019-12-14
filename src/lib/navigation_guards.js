export default function (router, store) {
    router.beforeEach((to, from, next) => {
        store.commit('WRITE_ROUTER', to.path)
        next()
    })
}