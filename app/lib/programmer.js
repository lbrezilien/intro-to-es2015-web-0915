
export var bestLanguages = ["Ruby", "Elixir"];

export function addJavaScript(arrayLanguage){
     var newArray = [];
     if (arrayLanguage.indexOf('JavaScript') > 0){
       debugger
       newArray = arrayLanguage
     } else {
       arrayLanguage.forEach(function(i){
         newArray.push(i)
       })
       newArray.push('JavaScript')
     }
     return newArray
   }


export  default class Programmer {

  constructor(name, language = 'Ruby'){
    this.name = name;
    this.language = language;
  }
  evangelize(){
      return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`
    }


}
