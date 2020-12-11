function checkAnswers(answers, key) {
    let kunci = {};

    for (let i = 0; i < key.length; i++) {
        if (kunci[i+1] === undefined) {
            kunci[i+1] = ''
        }
        for (let j = 0; j < key[i].length; j++) {
            if (key[i][j] !== '') {
                kunci[i+1] = key[i][j]
            }
        }
    }

    let counter = 0
    for (let i = 0; i < answers.length; i++) {
        let flag = false
        for (let j = 0; j < answers[i].length; j++) {
            if (kunci[i+1] === answers[i][j]) {
                flag = true
            }
        }
        if (flag) {
            counter++
        }
    }

    let score = counter / key.length * 100
    return score
}

let user1 = [
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
    ['', 'b', '', ''],
]

let key1 = [
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', '', '', 'd'],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['', '', 'c', ''],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['', 'b', '', ''],
    ['a', '', '', ''],
    ['a', '', '', ''],
    ['', '', '', 'd'],
    ['', '', 'c', ''],
    ['', 'b', '', ''],
]

console.log(checkAnswers(user1, key1))