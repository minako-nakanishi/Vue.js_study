var obj = {
    foo: 'bar'
}

Object.freeze(obj) //objを凍結(on-click等が効かなくなる)

new Vue({
    el: '#app',
    data: obj
})