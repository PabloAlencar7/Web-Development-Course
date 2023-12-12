function countWordText(text) {
    return text.split(" ").length;
}

const text = "And if a double-decker bus, crashes into us, to die by your side, is such a heavenly way to die";
console.log(text);
console.log(countWordText(text));