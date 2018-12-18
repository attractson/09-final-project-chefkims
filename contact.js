function changeeng() {
  var x = document.getElementById("txt1");
  var y = document.getElementById("txt2");
  var z = document.getElementById("translate");

  if (y.innerHTML === "Basicvision은 같이 협업할 미래의 아티스트를 찾습니다. 저희와 함께 기획하고 싶으신 아티스트분들은 아래로 연락 부탁드립니다."){
        y.innerHTML = "If you wish to work with us, please contact us via email/message.";
      } else {
        y.innerHTML = "Basicvision은 같이 협업할 미래의 아티스트를 찾습니다. 저희와 함께 기획하고 싶으신 아티스트분들은 아래로 연락 부탁드립니다."
  }

  if (x.innerHTML === "페이지를 통해 자신의 길을 소신있게 걸어가는 아티스트들과 창의적인 컨텐츠를 확인해보세요!"){
        x.innerHTML = "Follow this channel for artist content and other artistic creations.";
      } else {
        x.innerHTML = "페이지를 통해 자신의 길을 소신있게 걸어가는 아티스트들과 창의적인 컨텐츠를 확인해보세요!"
  }

    if (z.firstChild.data == "English") {
      z.firstChild.data = "한국어";
    } else {
      z.firstChild.data = "English";
  }



}
