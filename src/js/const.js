const blockType = [ 
                    [[0, 0], [1, 0], [2, 0], [3, 0]],
                    [[0, 0], [0, 1], [1, 0], [1, 1]],
                    [[0, 1], [1, 0], [1, 1], [2, 1]],
                    [[0, 0], [0, 1], [1, 1], [2, 1]],
                    [[0, 1], [1, 1], [2, 0], [2, 1]],
                    [[0, 0], [1, 0], [1, 1], [2, 1]],
                    [[0, 1], [1, 0], [1, 1], [2, 0]],
]

// button_bindings : contains [keyCode, sel] pairs
// sel             : the id of related button
const btnBindings = [
                        [38, '#rotate_btn'], // arrow up
                        [40,   '#down_btn'], // arrow down
                        [37,   '#left_btn'], // arrow left
                        [39,  '#right_btn'], // arrow right
                        [32,   '#drop_btn'], // space
                        [80,  '#pause_btn'], // p
                        [82,  '#reset_btn'], // r
]

const btnDownState = 'pressed'
const btnUpState = ''

const pauseState = 'paused'
const unpauseState = 'unpaused'

const tikState = 'tik'
const tokState = 'tok'

const defaultColor = 'rgb(135, 147, 100)'    // 方块没有被占据时的颜色
const occupiedColor = 'rgb(0, 0, 0)'         // 方块被占据时的颜色
const indicateColor = 'rgb(180, 0, 0)'       // 高亮显示方块时的颜色

export {
    blockType,
    btnBindings,
    btnDownState,
    btnUpState,
    pauseState,
    unpauseState,
    tikState,
    tokState,
    defaultColor,
    occupiedColor,
    indicateColor,
}