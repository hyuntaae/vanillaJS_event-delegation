/*

****** 🚀 기능 정의 🚀 ******

전에 만든 tab 기능은 이벤트리스너를 3개 부착해서 썼다.
이벤트리스너는 쓸때마다 램용량을 차지하는데 최대한 이를 줄이는게 성능개선에 이점이 있다.
따라서 이벤트 리스너를 1개만 써서 tab 기능을 구현해보려고 한다.

이벤트 버블링을 이용할거임
- 지난번에는 버튼에 모두 하나씩 이벤트리스너를 부착해서 클릭 시 이벤트가 일어나도록 제작했다.
- 이번에는 버튼의 상위요소에 이벤트리스너를 부착해 하위요소의 이벤트들을 제어하는 방식으로 이벤트 버블링을 이용해 제작해본다.
- 이 방식을 이벤트 위임 (event-delegation) 이라고 한다.

버튼의 상위요소에 이벤트 리스너를 부착하고
버튼 클릭 시
지금 이벤트가 발생한 (버튼을 클릭한) 곳이 0번 버튼이면
전체 버튼과 컨텐츠 박스에 클래스를 제거하고
0번 버튼과 컨텐츠 박스에 클래스를 부착해라.

*/

// ****** 🕹 1차 기능 구현 🕹 ******

const list = document.querySelector('.list');
const tabBtn = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

/*
list.addEventListener('click', function(e){
  if(e.target == tabBtn[0]) {
    for(let x = 0; x < 3; x++) {
      tabBtn[x].classList.remove('active')
      tabContent[x].classList.remove('show')
    }
      tabBtn[0].classList.add('active')
      tabContent[0].classList.add('show')
  } else if (e.target == tabBtn[1]) {
    for(let x = 0; x < 3; x++) {
      tabBtn[x].classList.remove('active')
      tabContent[x].classList.remove('show')
    }
      tabBtn[1].classList.add('active')
      tabContent[1].classList.add('show')
  } else if (e.target == tabBtn[2]) {
    for(let x = 0; x < 3; x++) {
      tabBtn[x].classList.remove('active')
      tabContent[x].classList.remove('show')
    }
      tabBtn[2].classList.add('active')
      tabContent[2].classList.add('show')
  }
})
*/

// ****** 🕹 2차 코드 재정비 및 간략화 🕹 ******

// tab이 열리는 기능 (모든 클래스 초기화 후 해당 버튼에 클래스 부착) 함수화

function openTab(i) {
  for(let x = 0; x < tabCount; x++) {
    tabBtn[x].classList.remove('active')
    tabContent[x].classList.remove('show')
  }
    tabBtn[i].classList.add('active')
    tabContent[i].classList.add('show')
}

// 현재 이벤트가 발생한 곳의 버튼 번호를 찾아서 탭을 여는 방식으로 코드가 반복하고 있음.
// 따라서 버튼 번호를 변수로 활용해 반복문으로 코드를 줄일 수 있음.

/*
list.addEventListener('click', function(e){
  for (let i = 0; i < 3; i++) {
    if(e.target == tabBtn[i]) {
      openTab(i);
    }
  }
})
*/


/*

****** 🕹 코드 확장성 고려 🕹 ******

- 현재 클릭 이벤트가 발생한 버튼의 번호를 찾아서 그에 맞게 탭 기능이 열리도록 코드 제작
- 그런데 탭의 개수가 늘어난다면 지금은 3번만 반복하고 있으므로 다음 탭은 작동하지 않을거임
- 그럼 반복되는 횟수를 3으로 지정하지 않고 탭의 개수를 찾아서 그 개수에 맞게 반복하라고 코드 짜면 될듯
- 여기서 핵심은 탭의 갯수가 몇개인지 알아내는 것
- 클래스를 모두 찾아주는 셀렉터 getElementsByClassName 뒤에 .length를 붙이면 갯수를 세어줍니다.

*/ 

let tabCount = document.getElementsByClassName('tab-btn').length;

list.addEventListener('click', function(e){
  for (let i = 0; i < tabCount; i++) {
    if(e.target == tabBtn[i]) {
      openTab(i);
    }
  }
})

