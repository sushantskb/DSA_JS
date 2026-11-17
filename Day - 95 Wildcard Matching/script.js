
var isMatch = function(s, p) {
    if (p === "*") return true;

    if (s.length === 0 && p.length === 0) return true;

    if (p.length === 0) return false;

    if (s.length === 0) {
        return [...p].every(char => char === "*");
    }

    if (s.length !== p.length && !p.includes("*")) {
        return false;
    }

    let i = 0;
    let j = 0;

    let starIndex = -1;
    let matchIndex = 0;

    while (i < s.length) {
        if (j < p.length && (s[i] === p[j] || p[j] === "?")) {
            i++;
            j++;
        }
        else if (j < p.length && p[j] === "*") {
            starIndex = j;
            matchIndex = i;
            j++;
        }
        else if (starIndex !== -1) {
            j = starIndex + 1;
            matchIndex++;
            i = matchIndex;
        }
        else {
            return false;
        }
    }

    while (j < p.length && p[j] === "*") {
        j++;
    }

    return j === p.length;
};
