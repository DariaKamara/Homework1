// ////////////////////TASCK1--
// function tasck1(){
// const user = {
//     username: 'testuser1',
//     preferences: {
//       sound: {
//         maxValue: 50,
//         value: 30,
//       },
//     },
//   };
//   const randomValue = Math.random();
//   const nullValue = null;

//   function pluck(obj,keys){
    
//     let result = "";

//     for(keys in obj){
//             if((Object.hasOwn(obj,keys)) == true){
//                 result +=obj[keys]
//                 break;
//             }
           
//         }
//      return result
//   }

//   function fun(obj,key){
    
  
//    return obj?.one?.two?.three // undefined
    
//   }
//   console.log(fun(user, 'preferences.sound.value')); // 30
// //   console.log(pluck(user, 'unknown.key')); // null
// //   console.log(pluck(randomValue, 'unknown.key')); // null
// //   console.log(pluck(nullValue, 'unknown.key')); // null
// };
// tasck1();


//////////////////////// TASCK 2++
function tasck2(){
  const users = {
    username: 'testuser1',
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
        enumerable: true ,
      },
    },
  };
 // console.log(users,'maxValue')
  const clonedUser = structuredClone(users)
 // console.log(clonedUser)
  clonedUser.preferences.sound.maxValue = 70;
  console.log(
    users.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
    ); // false
};
tasck2();

//////////////// TASCK3++
function tasck3(){
    var a={1:'1',2:'2',3:'3'},
    b={3:'4',5:'6',6:'7',7:'8'},
    c={5:'9',8:'9',6:'12',23:'35'}
    o=[a,b,c];
    
    let coup = Object.assign(a,b,c);
    console.log(coup)
    console.log(o)
//     let objConcat=(o)=> {
//   return a.concat(b).concat(c) //?
// }

//should return the following
// { '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }
//key 3 exist in both a and b, so in the final result above we keep {3:'4'} because that is most recent seen
// key 5 exist in both b and c, so we keep {5:'9'} from c
// key 6 exist in both b and c so we keep {6:'12'} from c
}
tasck3()

/// TASCK4 --
// function tasck4(){

//   function partialKeys(obj){
//     console.log(obj)

//     const obj1 = new Object()
//     obj1.param = obj
//     console.log(obj1.param)

//     // for(let keys in obj1){
//     //   if(keys == obj1.param)
//     // }
    

//   }
  
//   let o = partialKeys({ abcd: 1 })

//    o.abcd === 1 // true
//   // o.abc === 1 // true
//   // o.ab === 1 // true
//   // o.a === 1 // true
  
//   // o.b === 1 // false!
  
//   // Object.keys(o) // ['abcd']
// }
// tasck4()


//////////////TASCK5 +-
function TASCK5(){
  function NamedOne(first,last){
    let fullname = first + " " + last
    
    const named= {
      firstName : first,
      lastName : last,
      fullName : fullname,
    }
    Object.defineProperty(named, "fullName", {
      get : function () {return this.firstName + " " + this.lastName;}
    }); 
    
    // Object.defineProperty(named, "firstName", {
    //   get : function () {return arrFull[0] }
    // }); 
    // Object.defineProperty(named, "lastName", {
    //   get : function () {return arrFull[1] }
    // }); 
   
    return named
  }
 let namedOne = new NamedOne("Naomi","Wang")
  console.log(namedOne.firstName)  // -> "Naomi"
  console.log(namedOne.lastName ) // -> "Wang"
  console.log(namedOne.fullName ) // -> "Naomi Wang"
 
  namedOne.firstName = "John"
  namedOne.lastName  = "Doe"
  console.log(namedOne.fullName)// -> "John Doe"
  // -- And :
  namedOne.fullName = "Bill Smith"
  // ...then...
  console.log(namedOne.firstName)// -> "Bill"
  console.log(namedOne.lastName)  // -> "Smith"
  // -- But :
  namedOne.fullName = "Tom" // -> no : lastName missing
  namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
  console.log(namedOne.fullName) // -> "Bill Smith" (unchanged)
}
TASCK5()

//////////////TASCK6++
function TASCK6(){
  function OnceNamedOne(first, last){
    let fullname1 = first + " " + last
    
    const named1= {
      firstName : first,
      lastName : last,
      fullName : fullname1,
    }
    Object.freeze(named1);
    return named1
  }
  var onceNamed = new OnceNamedOne("Naomi","Wang")
  console.log("Tasck6:")
  // ...then...
  console.log(onceNamed.firstName) // -> "Naomi"
  console.log(onceNamed.lastName) // -> "Wang"
  console.log(onceNamed.fullName) // -> "Naomi Wang"
  
  // ...if you try : ...
  onceNamed.firstName = "Bill"
  // ...or...
  onceNamed['lastName'] = "Smith"
  
  // ...then...
  console.log(onceNamed['firstName']) // -> "Naomi"
  console.log(onceNamed['lastName']) // -> "Wang"
  console.log(onceNamed['fullName']) // -> "Naomi Wang"
  
  // ..but you can still create other instances..
  var otherOne = new OnceNamedOne("Don","Jones")
  console.log(otherOne.fullName )// -> "Don Jones"
    
}
TASCK6()
//////////////////TASCK7++
function TASCK7(){
    function offset(days){
      let now1 = new Date('2021-02-23T14:00:00')
      let end = new Date(Date.parse (days))
     
      let diffYear = now1.getFullYear() -end.getFullYear()
      let diffMonth = now1.getMonth() - end.getMonth()
      let diffDay =  now1.getDate() - end.getDate()
      let diffHours = now1.getHours() - end.getHours()
      let diffMin = now1.getMinutes() - end.getMinutes()
      let diffSec = now1.getSeconds() - end.getSeconds()
      
      if(diffMonth <0 || diffMin < 0){
        diffMonth *= -1
        diffMin *= -1
      }
      if(diffYear == 1){
        diffYear == 0
        diffDay == 366
      }
      
      if(diffHours==1 && diffMin < 0 ){
        diffHours = 0
        diffHours =0
      }
      let dateObj ={year : diffYear, month : diffMonth, day : diffDay, hours : diffHours, min : diffMin,sec : diffSec}
      // Вопрос. Почему неудается удлить свойство объекта?
      // for(let i in dateObj){
      //   if(i == 0)
      //     delete dateObj.i
      // }
      return dateObj
    }
    // Today is Tue 23, 14:00:00
  
    console.log(offset('2021-02-23T13:30:00','DD/MM/YYYY hh:mm:ss'));
    // 30 minutes ago
     console.log(offset('2021-02-23T13:00:00'));
    // 1 hour ago
    console.log(offset('2021-02-23T11:30:00'));
    // 2 hours 30 minutes ago
    console.log(offset('2021-02-22T14:00:00'));
    // 1 day ago
    console.log(offset('2020-02-23T10:00:00'));
    // 366 days ago
}
TASCK7()

//////////////TASCK8 ++
function TASCK8(){
    // function fun(Sec){
  //   let arr = []
  //     arr[0] = Sec / 86400
  //     arr[1] = (Sec % 86400) / 3600
  //     arr[2] = (Sec % 3600) / 60
  //     arr[3] = Sec % 60
  //     console.log( Math.floor(arr[0])  + Math.floor(arr[1]) + ':' +Math.floor( arr[2]) + ':' + Math.floor(arr[3]))
  // }
  // fun(989)
  function ReturnDate(sec){
    console.log(new Date(sec*1000).toUTCString().split(/ /)[4])
  }
  ReturnDate(989)
}
TASCK8()

////////////// TASCK9++
// функции, которая задает случайную дату между датами
// import moment from 'moment';a
function TASCK9(){
  function GenerateDate(day1,day2){
    let dateStart = new Date(Date.parse (day1))
    let dateEnd = new Date(Date.parse (day2))
    let dateArr = []
    dateArr[0] = Math.random() * (dateStart.getUTCFullYear() - dateEnd.getUTCFullYear()) + dateEnd.getUTCFullYear();
    dateArr[1] = Math.random() * (dateStart.getMonth() - dateEnd.getMonth()) + dateEnd.getMonth();
    dateArr[2] = Math.random() * (dateStart.getDay() - dateEnd.getDay()) + dateEnd.getDay();
    let result = Math.ceil(dateArr[2]) + '/' + Math.ceil(dateArr[1]) + '/' +dateArr[0]
    return result
  }
  console.log(GenerateDate('2021-01-23', '2021-02-23'));
  // 20/02/2021
}
TASCK9()

