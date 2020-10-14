[TOC]

# SCSS

### 1. SCSS는 무엇인가 

#### 1) CSS Preprocessor

> CSS 문서의 작성에 도움을 주는 도구이다. 우리가 흔히 CSS 문서 작성할 때는 많은 반복적인 작업을 요구하고 Color 값을 찾는 일, tag를 닫는 일 등 번거로운 작업 역시 포함되어있다. 그뿐만 아니라 클래스의 상속과 같은 사항으로 점점 CSS 문서는 양이 많아지고 이로 인해서 이후 유지관리에 많은 영향을 준다. 이런 CSS의 문제점들을 Programmatically 한 방식. 즉 변수, 함수, 상속 등 일반적인 프로그래밍 개념을 사용하여 해결해 나갈 수 있다.
>
> EX ) Sass, Less, Stylus



#### 2) CSS Preprocessor 장점

> - 재사용성 - 공통 요소 또는 반복적인 항목을 변수 또는 함수로 대체
> - 시간적 비용 감소 - 임의 함수 및 Built-in 함수로 인해 개발 시간적 비용 절약
> - 유지 관리 - 중첩, 상속과 같은 요소로 인해 구조화된 코드로 유지 및 관리가 용이



Ex ) 원래는 같은 색깔을 사용해도 hex code or rgb를 계속해서 지정해주어야 하는데, scss를 사용하면 이렇게 반복적으로 사용되는 부분을 변수로 처리할 수 있다. 

 ```scss
$primary-color: #fff

.class-A {
    background-color: $primary-color
}

.class-B {
    background-color: $primary-color
}
 ```



#### 3) SCSS

> Sass(Syntactically Awesome Style Sheets)의 3버전에서 새롭게 등장한 SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위집합(Superset) 입니다.
> 즉, SCSS는 CSS와 거의 같은 문법으로 Sass 기능을 지원한다는 말입니다.

```sass
# sass

.list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px
```

```scss
# scss

.list {
  width: 100px;
  float: left;
  li {
    color: red;
    background: url("./image.jpg");
    &:last-child {
      margin-right: -10px;
    }
  }
}
```



### 2. Vscode에서 Scss 사용하기

>1) Live Sass Compiler 설치 
>
>2) test.scss 파일을 만들고 아래에 Watch Sass 클릭하면 Compile 
>
>3) html에 link, href="test.css" 



#### * Sass compiler format 종류

##### 1) nested

-  // 주석 출력 안함, /**/ 주석 출력

- 중첩 스타일은 Sass 기본 출력 스타일, CSS 스타일과 HTML 문서의 구조 잘 보여줌

- 각 속성은 한 줄에 작성, 각 규칙은 중첩 정도에 따라 들여쓰기 한다

  ```scss
  #main {
  	color: #fff;
      background-color: #000;}
  	#main P {
      	width: 10em;}
  
  .huge {
      font-size : 10em;
      font-weight: bold;
      text-decoration: underline;}
  ```



##### 2) expanded 

- // 주석 출력 안함, /**/ 주석 출력

- 확장 스타일은 사람이 작성한 CSS 스타일과 거의 같음 

- 속성은 규칙 안에서 들여쓰기, 한 줄에 작성, 규칙은 들여쓰기 하지 않음.

  ```scss
  #main {
      color: #fff;
      background-color: #000;
  }
  #main P {
      width: 10em;
  }
  
  .huge{
      font-size: 10em;
      font-weight: bold;
      text-decoration: underline;
  }
  ```



##### 3) compact

- // 주석 출력 안함, /**/ 주석 출력하지만 한 줄로 출력

- 축약 스타일은 중첩 스타일이나 확장 스타일보다 공간을 덜 차지

- 각 CSS 규칙을 한 줄에 표시하며 속한 모든 속성도 같은 줄에 작성 (여러 줄로 작성한 주석도 한 줄에 표시)

- 줄마다 선택자가 앞에 있어서 속성보다 선택에 집중할 수 있음

  ```scss
  #main { color: #fff, background-color: #000;}
  #main P { width: 10em; }
  .huge { font-size: 10em; font-weight: boold; text-decoration: underline;}
  ```

  

##### 4) compressed 

- // 주석 출력 안함, /**/ 주석 출력 안하지만 !로 시작할 경우엔 출력

- 압축 스타일은 최소한의 공간을 차지하도록 압축한 형태, 사람이 읽는 상황 고려 안함

- 선택자를 구분하는 공백처럼 꼭 필요한 공백이나, 파일 끝에 하나의 새 줄 밖의 공백은 모두 삭제

- 색상 값을 최소 표현으로 변경 

  ```SCSS
  #main{color:#fff,backgound-color:#000}#main P{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
  ```




### 3. Vue에서 SCSS 사용하기

#### 1) 필요한 컴포넌트마다 로컬 단위로 적용

```vue
<script>
export default {
  name: '',
  data: {}
  // ...
}
</script>

<style scoped lang="scss">
label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>
```



#### 2) vue.config.js에서 global scsss 적용

```js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  }
}
```



#### 3) 루트 컴포넌트에서 global scss 적용

```vue
<script>
  export default {
    name: '',
    //..
  }
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
```



#### 4) JS로 로드하기

```js
# main.js에 로드 

require('@/assets/scss/main.scss')
```



> 4번 방법을 사용해보자 ! ! 
>
> 1) npm install --save-dev node-sass sass-loader
>
> 2) main.js에 require('@/assets/scss/main.scss') 작성
>
> 3) 근데 이렇게 하면 각 컴포넌트 별로 적용하기 힘들다



코드를 깔끔하게 보기 위해 각각의 scss 파일을 따로 만들어서 작성할 것이기 때문에 import 방식을 사용하자! ! 

>/*
>
>*/





### 4. SCSS 문법 

##### 1) data type

![image-20200910142146566](SCSS.assets/image-20200910142146566.png)

> 각 type별 특이사항 
>
> - Numbers: 숫자에 단위가 있거나 없습니다.
> - Strings: 문자에 따옴표가 있거나 없습니다.
> - Nulls: 속성값으로 `null`이 사용되면 컴파일하지 않습니다.
> - Lists: `()`를 붙이거나 붙이지 않습니다.
> - Maps: `()`를 꼭 붙여야 합니다.



##### 2) 중첩 (Nesting)

​	상위 선택자의 반복을 피하고 좀 더 편리하게 복잡한 구조 작성

```scss
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```



##### 3) Ampersand (상위 선택자 참조)

​	중첩 안에서 `&` 키워드는 상위(부모) 선택자 참조해서 치환

```scss
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}
```



##### 4) @at-root (중첩 벗어나기)

​	중첩 안에서 생성하되 중첩 밖에서 사용해야 경유에 유용 

```scss
.list {
  $w: 100px;
  $h: 50px;
  li {
    width: $w;
    height: $h;
  }
  @at-root .box {
    width: $w;
    height: $h;
  }
}
```

```css
.list li {
  width: 100px;
  height: 50px;
}
.box {
  width: 100px;
  height: 50px;
}
```



##### 5) 변수

​	반복적으로 사용되는 값을 변수로 지정, 변수 이름 앞에는 항상 `$`

```scss
$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.box {
  width: $w;
  margin-left: $w;
  background: $color-primary url($url-images + "bg.jpg");
}
```

> 변수는 선언된 블록 {} 내에서만 유효범위 가진다 



##### 6)  전역 설정

`!global` 플래그를 사용하면 변수의 유효범위를 전역으로 설정 할 수 있음

```scss
.box1 {
  $color: #111 !global;
  background: $color;
}
.box2 {
  background: $color;
}
```



##### 7) 초기값 설정

​	`!default` 플래그는 할당되지 않는 변수의 초기값 설정 

##### 1) mixin & include

> => mixin은 내가 자주 쓸 것 같다, 계속 반복해서 넣을 수 있는 코드들이다 할 때 만들어서 사용
>
> ```scss
> @mixin test {
>     width: 100px; height: 100px; border: 1px solid white;
> }
> 
> @mixin clear {
>     &:after { content: ""; display:block; clear: both; }
> }
> 
> p { float: left; @include test();}
> div { border: 3px solid blue; @include clear;}
> ```
>
> ```scss
> // mixin에 매개변수 넣기 
> @mixin border($color){
>     border: 1px solid $color;
> }
> 
> div { @include border(red); }
> p { @include border(pink); }
> span { @include border(green); }
> ```
>
> ```scss
> @mixin box($w, $h){
>     width: $w; height: $h;
> }
> 
> // px 필수
> div{ @include box(300px,200px); border: 2px solid red;}
> ```



##### 2) 문자보간(문자열)

```scss
@mixin bx(){
    border-right: 1px solid red;
    border-#{$position}: $wid solid $color;
}

div { @include bx(right, 2px, red)}
p { @include bx(bottom, 5px, grey)}
```



##### 3) @for 반복문

```scss
<body>
	<ol class="List">
		<li class="ico1">텍스트1</li>
		<li class="ico2">텍스트2</li>
		<li class="ico3">텍스트3</li>
		<li class="ico4">텍스트4</li>
	</ol>
</body>

// 변수는 문자열 형태로 넣어주어야 한다. 
// 1번 부터 5번 미만 => 즉 1번부터 4번까지 
// from to 는 숫자만 넣을 수 있다 
// (0, 0)은 이미지 넣는 위치 ? 

.list li { background: no-repeat 0 0 / 20px auto; text-indent: 30px; }
@for $i from 1 to 5 {
    .list li.ico#{$i} { background-image: url(ico#{$i}.png) no-repeat }
    // i번째 자식들 앞에 content
    .list li:nth-child(#{$i}):before { content : "제목 #{$i}"; }
}
```



![image-20200909155732559](SCSS.assets/image-20200909155732559.png)



##### 4) @each 반복문

```scss
<body>
	<h1 class="ico_book">제목1</h1>
	<h2 class="ico_zoom">제목2</h2>
	<h3 class="ico_phone">제목3</h3>
</body>

// book, zoom, phone 차례대로 var 변수에 담겨서 돈다
@each $var in book, zoom, phone {
    .ico_#{$var}{
        background: url(images/#{$var}.gif) no-repeat;
    }
}

$heading :(
	h1: 30px,
    h2: 20px,
    h3: 15px
);

@each $ele, $fs in $heading {
    #{$ele} {
        // 값으로 들어갈때는 문자 보간 안해줘도 되나 ? 
        font-size: $fs;
    }
}
```



##### 5) @extend

```scss
<body>
	<div class="a">abc</div>
	<div class="b">def</div>
	<div class="c">ghi</div>
</body>

// extend는 여러개에 똑같은 값 넣어줄때 쓰면 편할 것 같다
%name { font-size:14px; color:blue;}
.fs20 { font-size: 20px; }

// 클래스명으로 넣어줄 수도 있다? 
.a { @extend %name;}
.b { @extend .fs20;}
.c { @extend %name;}

```

```scss
<body>
	<div class="visual">
		<div></div>
	</div>
	<div class="main">
		<div></div>
	</div>
	<div class="footer">
		<div></div>
	</div>
</body>

// 특정 반복되는 영역만 구분해서 사용하자
.visual { background: pink; height: 300px;
    div { @extend %m0auto; background: rgba(0,0,0,.5); height: 300px;}
}
.main { background: purple; height: 500px;
	div { @extend %m0auto; background: rgba(0,0,0,.5); height: 500px;}
}
.footer { background: violet; height: 150px;
	div { @extend %m0auto; background: rgba(0,0,0,.5); height: 150px;}
}

%m0auto { width: 1200px; margin: 0 auto;}
```

![image-20200909163911467](SCSS.assets/image-20200909163911467.png)



##### 6) 조건문

```scss
<a href="" class="btn">버튼</a>

@mixin btn_radius($h, $radius:true){
    padding: 0 20px; height: $h; line-height: $h; text-align: center;
    background: #000; color: #fff;
    @if $radius {
        border-radius: $h / 2;
    }
}

.btn { @include btn_radius(30px, true);}
```

