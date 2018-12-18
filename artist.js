function changeeng() {
  var x = document.getElementById("txt1");
  var z = document.getElementById("translate");

  if (x.innerHTML === "이돈아 작가는 전통미술의 새로운 가능성을 탐구하며 현대미술과의 조화를 시도해온 작가라는 평가를 들으며 국내외에서 꾸준히 활동해 오고 있는 작가이다. 2000년 초부터 조선시대의 민화, 길상화를 재해석하고 초기의 비구상에서 현재의 구상작품으로 화풍을 발전시켜 오면서 시간과 공간, 그리고 존재에 대한 관심을 표현하고 있다. 작가는 ‘현재의 실존’은 과거의 존재에서 비롯된다고 본다. 어떤 의도에 의해 다뤄졌던 전통적 소재와 형태들이 작가에 의해 재구성 되는데 여기서 과거 그림의 형태는 다른 재료와 작업방식으로 활용되고, 기하학적인 도형은 작가의 현재 모습을 의미하는 것으로 사용된다. 그리고 소망이 담긴 미래는 과거와 현재의 조화와 새롭게 적용되는 색과 배경으로 표시된다. 이돈아 작가가 다루는 전통적 소재는 전통미술의 새로운 가능성을 탐구하며 다양한 미디어 작품으로도 변환되어 왔는데 3D 영상작품과 렌티큘러를 이용한 이미지 작업 등이 그러한 시도이다.전통민화와 길상화의 요소들인 연꽃, 목단, 매화 또는 십장생 등을 현대적이고 세련된 색상으로 배치, 본인의 화폭에 담아내며 진부함을 느낄 수 없는 새로운 스타일을 구현하였다."){
        x.innerHTML = "The artist sees that ‘present existence’ comes from the existence of the past. Traditional materials and shapes which had the certain meaning in the past are now reconstructed with old painting characters recreated with contemporary materials and methods while geometrical figures stand for the artist herself in the present. The future is filled with hope and is represented by blending the harmony of the past and present with innovative colors in the background. The traditional materials have been transformed into various media art genres by Donah Lee.";
  } else {
    x.innerHTML = "이돈아 작가는 전통미술의 새로운 가능성을 탐구하며 현대미술과의 조화를 시도해온 작가라는 평가를 들으며 국내외에서 꾸준히 활동해 오고 있는 작가이다. 2000년 초부터 조선시대의 민화, 길상화를 재해석하고 초기의 비구상에서 현재의 구상작품으로 화풍을 발전시켜 오면서 시간과 공간, 그리고 존재에 대한 관심을 표현하고 있다. 작가는 ‘현재의 실존’은 과거의 존재에서 비롯된다고 본다. 어떤 의도에 의해 다뤄졌던 전통적 소재와 형태들이 작가에 의해 재구성 되는데 여기서 과거 그림의 형태는 다른 재료와 작업방식으로 활용되고, 기하학적인 도형은 작가의 현재 모습을 의미하는 것으로 사용된다. 그리고 소망이 담긴 미래는 과거와 현재의 조화와 새롭게 적용되는 색과 배경으로 표시된다. 이돈아 작가가 다루는 전통적 소재는 전통미술의 새로운 가능성을 탐구하며 다양한 미디어 작품으로도 변환되어 왔는데 3D 영상작품과 렌티큘러를 이용한 이미지 작업 등이 그러한 시도이다.전통민화와 길상화의 요소들인 연꽃, 목단, 매화 또는 십장생 등을 현대적이고 세련된 색상으로 배치, 본인의 화폭에 담아내며 진부함을 느낄 수 없는 새로운 스타일을 구현하였다.";
  }

  if (z.firstChild.data == "English") {
    z.firstChild.data = "한국어";
  } else {
    z.firstChild.data = "English";
}

}
