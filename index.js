import ClipboardJS from 'clipboard/dist/clipboard.min'
new ClipboardJS('.btn')

const textarea = document.querySelector('[name=textarea]');
const output = document.querySelector('#output')

const makeStringSarcastic = str => {
  // split the string into an array
  const arr = [... str];

  // Get every second letter
  const uppercaseEverySecondLetter = arr.map( (letter, index) => {
    // If number is divisable by 2 make it uppercase
    // Else make it lowecase
    return ( index % 2 ) ? letter.toUpperCase() : letter.toLowerCase();
  })

  // Join the text back together again
  return uppercaseEverySecondLetter.join('')
}

textarea.addEventListener('input', e => output.textContent = makeStringSarcastic(e.target.value) )

