//REGEX:

//generalni

export const reCapitalLetter = /[A-Z]/g;
export const reNumWithDashesPlus = /[\d -]+/g
export const reNotNumWithDashes = /[^\d -]/g

//iban

export const reIbanInternational = /[A-Z]{2}\d{2}[a-zA-Z0-9]{1,30}/g;
export const reIbanHr = /(HR)\d{19}/g;

//sif namjene

export const reSifNamjene = /[A-Z]{4}/g

//model
 
export const reModel = /HR\d{2}/g;

//pnb

export const rePnb = /\d+( - \d+)+$/g;
export const reDashOneSpace = /(^-)|(- )(?!\s)|(?<!\s)( -)/g; //crtica sa jednim razmakom s lijeve ili desne strane
export const reSpaceOrDashBetweenDigits = /(?<=\d)[-\s](?=$|\d)/g

//iznos

export const reIznos = /\d+,\d{2}/g;
export const reNotNumWithSeparators = /[^\d,.]/g;
export const reNonNumeric = /[^\d,.]/g
export const reShiftDecimalPoint = /([\d.]+),(\d)(\d{2})/g;

//šifra namjene

//nesvrstani
export const REGEX_IP = /\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/g
