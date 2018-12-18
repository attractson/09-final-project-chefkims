window.open("modal.html","Yooniverse Exhibition","width=380,height=600","menubar=no")

function changeeng() {
  var x = document.getElementById("txt1");
  var y = document.getElementById("txt2");
  var z = document.getElementById("translate");
  if (x.innerHTML === "Basicvision은 아티스트와 함께 만들어 나가는 기획 회사입니다. 저희는 유능한 아티스트들과 그들의 철학을 소개합니다.") {
    x.innerHTML = "Basicvision is a creative marketing agency for artists. We promote talented artists and their philosophy.";
  } else {
    x.innerHTML = "Basicvision은 아티스트와 함께 만들어 나가는 기획 회사입니다. 저희는 유능한 아티스트들과 그들의 철학을 소개합니다.";
  }
  if (y.innerHTML === "Basicvision은 미술과 미디어의 시너지를 통해 미래가치를 창출하고 아티스트와 함께 성장하는 것을 목표로 하고 있습니다.") {
    y.innerHTML = "Basicvision seeks to create positive value through the synergy between art and media, growing with artists.";
  } else {
    y.innerHTML = "Basicvision은 미술과 미디어의 시너지를 통해 미래가치를 창출하고 아티스트와 함께 성장하는 것을 목표로 하고 있습니다.";
  }
  if (z.firstChild.data == "English") {
    z.firstChild.data = "한국어";
  } else {
    z.firstChild.data = "English";
  }

}
