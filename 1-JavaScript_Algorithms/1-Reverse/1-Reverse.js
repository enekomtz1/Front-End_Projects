function reverse(text) {
  let reversedText = "";

  for (let i = 0; i < text.length; i++) {
    reversedText = text[i] + reversedText;
  }

  return reversedText;
}

console.log(reverse("Hello world!")); //Output: !dlrow olleH
