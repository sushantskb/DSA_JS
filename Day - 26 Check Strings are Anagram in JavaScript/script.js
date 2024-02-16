function checkAnagram(str1, str2){
    let Str1Obj = {};
    if(str1.length !== str2.length){
        return false;
    }
    for (ch of str1) {
        Str1Obj[ch] = (Str1Obj[ch] || 0) + 1;
    }
    // console.log(Str1Obj);
    for(ch of str2){
        if(!Str1Obj[ch]){
            return false
        }
        Str1Obj[ch] = -1;
    }
    return true
}

if(checkAnagram("listen", "silent")){
    console.log("Bravo!!!..It's an anagram");
} else {
    console.log("Oopps!!!..It's not an anagram");
}