// 用来管理 状态指示器
export default class GameIndicator {
    constructor(sel) {
        this.component = document.querySelector(sel)
    }
    
    static new(...args) {
        return new this(...args)
    }

    setState(state) {
        this.component.className = state
    }
}
