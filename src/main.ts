
let uneVariableDeTypeString: number|string = "hello";

uneVariableDeTypeString= 2;
console.log(uneVariableDeTypeString);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div> ${uneVariableDeTypeString} </div>
`

