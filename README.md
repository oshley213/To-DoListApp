# To-DoListApp

## 서술 과제 문제 1 답
onClickItem 변수 안에서 setList(list) 부분이 잘못 되었습니다. JavaScript는 'pass by reference (참조에 의한 전달)'방법을 사용하기 때문에 새로운 reference를 만들기 위해서는 clone(복제)를 해야합니다. 따라서, setList를 할때 새로운 list를 만들기 위해서는 setList(list)가 아닌 setList([...list])를 사용해야 합니다. 

## 서술 과제 문제 2 답
문제에서 clickedItem은 dictionary object입니다. 따라서, alert(clickedItem)을 실행하면 object object라고 alert가 생길 것입니다. 해당 문제에서 그냥 object가 아닌 'mbti 퀴즈', '호불호 월드컵', 'mbti 서베이'와 같은 text로 이루어진 alert를 만들기 위해서는 alert(clickedItem.text)를 실행해야 합니다. 
