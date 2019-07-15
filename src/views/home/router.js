export default [
    {
        path: 'article',
        component: () => ({ component: import(/* webpackChunkName: "home" */ './article') }),
    },
]