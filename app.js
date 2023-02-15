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

const list = document.querySelector('.list');
const tabBtn = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

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