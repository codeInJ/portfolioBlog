<template>
<div class="position-relative w-100" style="height: 89vh;" id="home"
    >
      <div class="text-center position-absolute top-50 start-50 translate-middle">
        <h1 style="color:white;font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">Where is here?</h1>
        <p style="font-weight:300;color:white;">
안녕하세요, 풀스택 개발자를 지향하는 꼼꼼한 개발자 이민재입니다!<br>
이 사이트는 포트폴리오의 목적으로 만들어졌으나, 개인 창작물 전시 / 간단한 소통이 가능한 블로그의 성격도 같이 띄고 있습니다.<br>
편안하게 구경하다 가셨으면 좋겠습니다 :)
        </p>
         <b-button pill variant="danger" class="my-1 text-white shadow" href="portfolio" >포트폴리오 보러가기</b-button><br>
         <b-button pill variant="success" class="my-1 text-white shadow" href="error" >창작물 보러가기</b-button><br>
         <b-button pill variant="primary" class="my-1 text-white shadow" href="talk" >소통 하러가기</b-button>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#home {
   position: relative;
}
#home:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('https://cdn.pixabay.com/photo/2019/08/14/15/15/macbook-4405973_960_720.jpg'); 
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity : 0.6;
    z-index: -1;
}
</style>
