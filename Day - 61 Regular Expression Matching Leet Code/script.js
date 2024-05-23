var isMatch = function (s, p) {
    let cache = {};

    function dfs(i, j) {
        const key = `${i},${j}`;
        if (key in cache) {
            return cache[key];
        }

        if (i >= s.length && j >= p.length) {
            return true;
        }

        if (j >= p.length) {
            return false;
        }

        let isMatch = i < s.length && (s[i] === p[j] || p[j] === ".");

        if ((j + 1) < p.length && p[j + 1] === "*") {
            cache[key] = dfs(i, j + 2) || (isMatch && dfs(i + 1, j));
            return cache[key];
        }

        if (isMatch) {
            cache[key] = dfs(i + 1, j + 1);
            return cache[key];
        }
        
        cache[key] = false;
        return false;
    }

    return dfs(0, 0);
};

console.log(isMatch("aab", "c*a*b"));

// Note: 
// Key changes:

// Use a string representation for the cache keys by concatenating i and j with a comma (e.g., const key = ${i},${j}``).
// Access the cache using this string key.
// This optimization should prevent the "Maximum call stack size exceeded" error by efficiently caching and reusing previously computed results.