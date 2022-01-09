window.dom = {
    // find(selector){
    //     return document.querySelectorAll(selector);
    // },

    //指定范围查找
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },

    //样式是节点，对象
    // style(node,object){
    //     for(let key in object){
    //         node.style[key]=object[key]
    //     }
    // },

    //样式是节点，属性，值
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments, length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    }
};