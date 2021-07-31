const input = process.argv[2] ? process.argv[2].split(',') : []

function isAnagram(word = '', comparator = '') {
    const letters = word.split('')
    for (i=0; i<letters.length; i++) {
        if (!comparator.includes(letters[i])) {
            return false
        } 
    }
    return true
}

function isSameLength(word = '', comparator = '') {
    return word.length === comparator.length
}

function groupByAnagram(words = ['']) {
    const groups = []
    words.forEach(function(word) {
        if (groups.length !== 0) {
            let groupToPush = undefined
            for (i=0; i<groups.length; i++) {
                const group = groups[i]
                const comparator = group[group.length - 1]
                if (!group.includes(word) && isSameLength(word, comparator) && isAnagram(word, comparator)) {
                    groupToPush = group
                    break
                }
            }
            groupToPush ? groupToPush.push(word) : groups.push([word])
        } else {
            groups.push([word])
        }
    })
    return groups

}

if (input && input.length > 0) {
    console.log(groupByAnagram(input))
} else {
    console.log(`Please provide the list of words (comma separated)!
    ex: node anagram.js kita,atik,tika,aku,kia,makan,kua`)
}
