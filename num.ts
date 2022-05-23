const fToTen = ['', "One", "Two", "Three", "Four","Five", "Six", "Seven", "Eight", "Nine"];
const tenToHun = ['','Ten', 'Twenty','Thirty', 'Fourty', 'Fifty', 'Sixty','Seventy', 'Eighty','Ninety'];
const mils = ['Thousand', "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion", "Quindecillion", "Sedecillion", "Septendecillion", "Octodecillion", "Novendecillion", "Vigintillion", "Unvigintillion", "Duovigintillion", "Tresvigintillion", "Quattuorvigintillion", "Quinvigintillion", "Sesvigintillion", "Septemvigintillion", "Octovigintillion", "Novemvigintillion", "Trigintillion", "Untrigintillion", "Duotrigintillion", "Trestrigintillion"];

let n: string = '01101010110009090068', mf: number[], a: string[], lastWord: string = '', f: number[];
a = n.split(''); 

let localNum: string = '';
function ftot<T extends string>(num: T): T | string {
    if(num.length === 3){ 
        localNum = fToTen[+num[0]];
        if(localNum) localNum += ' Hundred ';
        ftot(num.substring(1));
    } else {
        localNum += num.length === 2 ? `${tenToHun[+num[0]]} ${fToTen[+num[1]]}` : fToTen[+num[0]];
    } 
    return localNum.trim();
}

function chunk(): void {
    let chunkLength =  n.length / 3;
    if(!(+chunkLength % 1 === 0)) chunkLength++;
    let changableLength = Math.floor(chunkLength);
    for(let i = 0; i < Math.floor(chunkLength); i++) {
        if(changableLength <= 1) lastWord += ftot(n.substring(n.length - 3, n.length));
        else {
            let cal =  n.length - ((changableLength - 1) * 3);
            let ans = ftot(n.substring(cal - 3 < 0 ? 0 : cal - 3, cal));
            if (ans.length > 0) lastWord += ans + ` ${ mils[changableLength - 2] } `;
        }
        --changableLength;
    }
}
chunk()
console.log(lastWord)


