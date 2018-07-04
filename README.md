# ts_blockchain

## default option

```
const sayHi = (name:string,age:number,gender:string):string
```

- element에 :type을 지정할 수 있다.
- 반환값을 :type으로 지정할 수 있다.


## interface
- element로 객체 지정시 객체의 타입을 정의해줄 수 있다.

```
interface Human {
    name : string;
    age : number;
    gender : string;
}
const Person={
    name:"nicolas",
    age:22,
    gender:"male"
}
const sayHi = (person:Human):string=>( person.name 으로 접근// )
```

## class
- interface 외 class로 대체 가능하다.
- interface는 js전환시 등록되지 않지만 class로 지정된 것은 코드로 전환된다.
- 다른 프레임워크와 함께 사용할 때는 class가 적절하다
```
class Human {
    public name : string;
    public age : number;
    public gender : string;
    constructor(name:string, age:number, gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender
    }
}
const lynn = new Human('lynn',18,'female');
 ```
 
# 사용한 패키지 
### devDependencies
#### tsc-watch
>yarn add tsc-watch --dev 
- 수정을 바로 적용해 볼 수있게 해줌.

 ```
//tsc-watch 사용전 package.json에 설정된 것
//yarn start를 할때마다 결과를 확인 할 수 있음
"scripts": {
    "start": "node index.js"
    "prestart":"tsc"
}

//packge.json 에 다음으로 설정
//yarn start를 하고나면 수정시 바로 적용
"scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\""
  }

//tsconfig.json에 다음으로 설정되있음
"compilerOptions": {
        ...,
        "outDir":"dist"
},
 ```

### dependencies
#### crypto-js
>yarn add crypto-js
- 암호화에 필요한 패키지이다.
```
//import
import * as CryptoJS from "crypto-js";

//use
CryptoJS.SHA256(string).toString();
```

### tsconfig.json 기본설정
```
{
    "compilerOptions": {
        "module":"commonjs",
        "target":"es2015",
        "sourceMap": true,
        "outDir":"dist"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```
- outDir : 가공후 파일을 저장할 폴더
- include : 가공할 파일이 위치한 곳 현재 src의 모든 폴더와 파일을 포함한다.
- exclude : 가공시 제외할 것 node_modules 폴더는 제외한다. 


## BlockChain 
최종 src/index.ts파일을 확인