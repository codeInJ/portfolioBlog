<template>
    <div class="text-center w-100 padding-section" id="skills">
        <h1 class="mp-title" style="font-family: 'Black Han Sans','Noto Sans KR', sans-serif;">
            Skills
        </h1>
        <b-row style="min-width:560px;max-width:894px;margin:0 auto;">


<div class="skillsArcodian">
    <b-button
    class="skillsArcodianHeader rounded-top"
      :class="frontendArcodian ? null : 'collapsed'"
      :aria-expanded="frontendArcodian ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="frontendArcodian = !frontendArcodian"
    >
      Front-end
    </b-button>
    <b-collapse id="collapse-4" v-model="frontendArcodian" class="p-0">
        <b-card class="skillsArcodianBody rounded-bottom">
            <img src="@/assets/skills/html.png" class="skillsIcon"/>
            <img src="@/assets/skills/css.png" class="skillsIcon"/>
            <img src="@/assets/skills/js.png" class="skillsIcon"/>
            <img src="@/assets/skills/vue.png" class="skillsIcon"/>
            <img src="@/assets/skills/bootstrap.png" class="skillsIcon"/>
<!--
HTML
CSS
JS
BootStrap
VUE
-->
        </b-card>
    </b-collapse>
</div>

<div class="skillsArcodian">
    <b-button
    class="skillsArcodianHeader rounded-top"
      :class="backendArcodian ? null : 'collapsed'"
      :aria-expanded="backendArcodian ? 'true' : 'false'"
      aria-controls="backendArcodian"
      @click="backendArcodian = !backendArcodian"
    >
      Back-end
    </b-button>
    <b-collapse id="backendArcodian" v-model="backendArcodian" class="p-0">
      <b-card class="skillsArcodianBody rounded-bottom">
            <img src="@/assets/skills/java.png" class="skillsIcon"/>
            <img src="@/assets/skills/springBoot.png" class="skillsIcon"/>
<!--
Java
Spring Boot
-->
      </b-card>
    </b-collapse>
</div>

<div class="skillsArcodian">
    <b-button
    class="skillsArcodianHeader rounded-top"
      :class="othersArcodian ? null : 'collapsed'"
      :aria-expanded="othersArcodian ? 'true' : 'false'"
      aria-controls="othersArcodian"
      @click="othersArcodian = !othersArcodian"
    >
      Others
    </b-button>
    <b-collapse id="othersArcodian" v-model="othersArcodian" class="p-0">
      <b-card class="skillsArcodianBody rounded-bottom">
            <img src="@/assets/skills/mysql.png" class="skillsIcon"/>
            <img src="@/assets/skills/oracle.png" class="skillsIcon"/>
            <img src="@/assets/skills/git.png" class="skillsIcon"/>
            <img src="@/assets/skills/github.png" id="githubIcon" class="skillsIcon"/>

  <b-popover target="githubIcon" triggers="hover" placement="bottom">
    <template #title>깃허브</template>
    실험
    <!--https://bootstrap-vue.org/docs/components/popover 팝오버 참고용-->
  </b-popover>
<!--
mySQL
Oracle
Git
Github
(VSC, IntelliJ, Ecllipse)
-->
      </b-card>
    </b-collapse>
</div>
        </b-row>
    </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
      return {
        frontendArcodian: true,
        backendArcodian: true,
        othersArcodian: true
        
      }
    }
  }
</script>

<style>
#backEnd{
    background:lightcoral;
}
.skillsArcodian{
    margin-top: 20px!important;
    padding: 0px!important;
    background: white!important;
    border-color: white!important;
    border-radius: .25rem!important;
    box-shadow: rgb(0 0 0 / 20%) 5px 5px 20px 0px!important;
}
.skillsArcodian:hover{
    box-shadow: rgb(0 0 0 / 20%) 5px 5px 20px 6px!important;
}
button[aria-expanded]:focus{
    box-shadow: none!important;
}
.skillsArcodianHeader{
    width: 100%!important;
    color:black!important;
    background: white!important;
    border-color: white!important;
    border-radius: 0px!important;
}
.skillsArcodianBody{
    border-radius: 0px!important;
}
.skillsIcon{
    height: 72px;
}
.popover{
  /* border:0px!important; */
}
</style>
