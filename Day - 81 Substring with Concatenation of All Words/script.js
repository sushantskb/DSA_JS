var findSubstring = function(s, words) {
    const ans = [];
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const need = new Map();

    for(const word of words) {
        need.set(word, (need.get(word) || 0) + 1);
    }

    for (let i = 0; i < s.length - totalLen; i++) {
        const seen = new Map();
        let count = 0;
        while(count < words.length) {
            const word = s.slice( 
                i + count * wordLen,
                i + (count + 1) * wordLen
            )

            if(!need.has(word)) break;

            seen.set(word, (seen.get(word) || 0) + 1);

            if(seen.get(word) > need.get(word)) break;
            
            count++;
        }
        if(count === words.length) {
            ans.push(i);
        }
    }
    return ans;
}

console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))