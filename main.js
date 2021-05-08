'use strict'

const str = `
010-1234-5678
thepthkjr2771@naver.com 
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown Fox jumps over we the lazy dog.
abbcccdddd
dddddddddddd
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
동해물과_백두산이 마르고 닳도록
`
const strSecond = `   the hello world

`
console.log(strSecond.replace(/\s/g, ''))
// const regexp = new RegExp('the', 'gi')
const regexp = 

console.log(str.match(/d$/gm)) 
console.log(str.match(/^t/gim)) 
console.log(str.match(/ .. /g)) 
console.log(str.match(/fox|dog/gi)) 
console.log(str.match(/https?/gi)) 
console.log(str.match(/d{2,}/g)) 
console.log(str.match(/\b\w{2,3}\b/g)) 
console.log(str.match(/[fox]/g)) 
console.log(str.match(/[0-9]{1,}/g)) 
console.log(str.match(/[가-힣]{1,}/g)) 
console.log(str.match(/\bf\w{1,}\b/g)) 
console.log(str.match(/\d{1,}\b/g)) 
console.log(str.match(/\s\b/g)) 
console.log(str.match(/.{1,}(?=@)/g)) 
console.log(str.match(/(?<=@).{1,}/g)) 

// \(eecape): 특정한 기능을 무시 $: 문장이 끝나는 부분
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))  //원본 데이터에 영향을 끼치지 않음
// console.log(str)