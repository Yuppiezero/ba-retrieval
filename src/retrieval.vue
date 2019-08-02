<template>

  <section class="retrievalbox" :style="mainstyle">

    <section class="enterbox" :style="fullstyle">

      <label  :style="lstyle"><span :style="labsize">{{labeltext}}</span></label>

      <input type="text" v-model="tagkey" @focus="getfocus()" @blur="reclamation()" :placeholder='reminder' :style="rstyle">

    </section>

    <ul v-if="datalist.length>0&&mbpanel"  :style="(maxnum!==0&&datalist.length>maxnum)?panelheight:''">

      <li v-for="(item,index) in datalist" :key="index" @click="sniping(item)" :style="liheight"><span :style="subsize" @click.stop="sniping(item)">{{item.name}}</span></li>

    </ul>

  </section>

</template>

<script>

export default {
  name: 'retrieval', 
  props: {
    basedata:{
      type: Array,
      default() {
        return []
      }
    },
    valkey:{
      type: String,
      default:''
    },
    rune:{
      type: Object,
      default() {
        return{
          text:'',
          matching:true
        }
      }
    },
    usermay:{
      type: Boolean,
      default:false
    },
    tips:{
      type: String,
      default:''
    },
    valid:{
      type: String,
      default:''
    },
    correct:{
      type:Array,
      default() {
        return []
      }
    },
    controlstyle:{
      type:Object,
      default:{
        width:'',
        height:'',
        layout:'750',
        color:'',
        backgroundcolor:'',
        subhenight:'',
        labelwidth:'',
        inputwidth:'',
        labelsize:'',
        labcolor:'',
        inputcolor:'',
        inputsize:'',
        listnum:0
      }
    },
    label:{
      type: String,
      default:''
    }
  },
  watch:{
    basedata: {
      handler(nv, ov) {
        this.infodata = nv;
      },
      immediate: true
    },
    valkey: {
      handler(nv, ov) {
        this.datakey = nv;
      },
      immediate: true
    },
    tips:{
      handler(nv, ov) {
        if(nv&&nv!=''){
          this.reminder=nv
        }
      }
    },
    rune:{
      handler(nv, ov) {
        if(nv){
          this.mbpanel=nv.matching
          this.tagkey=nv.text
        }
      }
    },
    valid: {
      handler(nv, ov) {
        this.dataid = nv;
      },
      immediate: true
    },
    label:{
      handler(nv, ov) {
        this.labeltext = nv;
      },
      immediate: true
    },
    correct:{
      handler(nv, ov) {
        if(JSON.stringify(nv)!="[{}]"&&nv.length>1){
          this.clause=nv
        }
      },
      immediate: true
    },
    controlstyle:{
      handler(nv, ov) {
        let s="",l="",r="",c="",base=""
        let devicew=Number(document.documentElement.clientWidth)
        let bs=100/devicew
        if(nv.layout && nv.layout!='' ){
          base=devicew/Number(nv.layout)*100
          this.mainstyle='font-size:'+base+'px;'
          s+='font-size:'+base+'px;'
        }
        if(nv.height && nv.height!=''){
          let ht=Number(nv.height)/base
          let refer='height:'+ht+'em;vertical-align:middle;'
          s+=refer
          l+=refer
          r+='height:'+ht+'em;'
          c+=refer
          this.fullstyle='width:100%;'+refer
        }
        if(nv.width && nv.width!=''){
          let wh='width:'+Number(nv.width)/base+'em;'
          s+=wh
          c+=wh
        }
        if(nv.labelwidth && nv.labelwidth!=''){
          let lw=Number(nv.labelwidth)/base
          l+='width:'+lw+'em;'
        }
        if(nv.subhenight && nv.subhenight!=''){
          let sh=Number(nv.subhenight)/base
          this.liheight='height:'+sh+'em;vertical-align:middle;'
        }
        // if(nv.fontsize && nv.fontsize!=''){
        //   s+='font-size:'+nv.fontsize+'px;'          
        // }
        if(nv.color && nv.color!=''){
          s+='color:'+nv.color+';'
        }
        if(nv.backgroundcolor && nv.backgroundcolor!=''){
          s+='background-color:'+nv.backgroundcolor+';'
        }
        if(nv.labelsize && nv.labelsize!=''){
          let lf=Number(nv.labelsize)*bs
          let lval='font-size:'+lf+'vw;'
          if(nv.height && nv.height!=''){
            let ht=Number(nv.height)*bs
            lval+='height:'+ht+'vw;line-height:'+ht+'vw;'
          }
          this.labsize=lval
        }
        if(nv.inputsize && nv.inputsize!=''){
          let rf=Number(nv.inputsize)*bs
           r+='font-size:'+rf+'vw;'
           this.subsize='font-size:'+rf+'vw;'
          if(nv.inputwidth && nv.inputwidth!=''){
            let rw=Number(nv.inputwidth)*bs
            r+='width:'+rw+'vw;'
          }
          if(nv.height && nv.height!=''){
            let ht=Number(nv.height)*bs
            r+='height:'+ht+'vw;'
          }
        }
        if(nv.listnum!=0){
          let max=Number(nv.subhenight)*Number(nv.listnum)/base
          let ht=Number(nv.height)/base
          this.panelheight='height:'+max+'rem;overflow:hidden;overflow-y: auto;top:'+ht+'em;'
          this.maxnum=nv.listnum
        }
        if(nv.labcolor&&nv.labcolor!=''){
          l+='color:'+nv.labcolor+';'
        }
        if(nv.inputcolor&&nv.inputcolor!=''){
          r+='color:'+nv.inputcolor+';'
        }
        this.lstyle=l
        this.rstyle=r
        this.fullstyle=s
      },
      immediate: true
    },
    tagkey:{
      handler(nv, ov) {
        this.datalist=new Array()
        let t=new Object()
        var v=""
        if(nv!=''){
          if(this.clause.length>0){
            for(let i= 0; i<this.clause.length;i++){
              if(nv==this.clause[i].basekey){
                nv=this.clause[i].newval
              }
            }
          }
          let n=this.infodata.length
          for(var value in this.infodata){
            for(var st in this.infodata[value]){
              if(st==this.datakey){
                v=this.infodata[value][st]
                if(v.indexOf(nv)!=-1){
                  if(this.dataid!=''){
                    t={
                      name:this.infodata[value][st],
                      key:this.infodata[value][this.dataid]
                    }
                  }
                  else{
                    t={
                      name:this.infodata[value][st]
                    }
                  }
                  this.datalist.push(t)
                }
              }
            }
          }
        }
      }
    }
  },
  data () {
    return {
      infodata:[],
      datalist:[],
      reminder:'',
      tagkey:'',
      labeltext:'',
      datakey:'',
      dataid:'',
      maxnum:'0',
      mainstyle:'',
      fullstyle:'',
      sonheight:'',
      liheight:'',
      lstyle:'',
      rstyle:'',
      panelheight:'',
      mbpanel:true,
      devicebase:'',
      subsize:'',
      labsize:'',
      clause:''
    }
  },
  methods: {
    sniping(key){
      this.tagkey=key.name
      this.$emit('sieve',key)
      this.mbpanel=false
      this.datalist=new Array()
    },
    getfocus(){
      this.tagkey=''
      this.datalist=new Array()
      this.mbpanel=true
      this.$emit('getfocus',true)
    },
    reclamation(){
      if(this.tagkey==''){
        let adc={name:'',key:''}
        this.$emit('sieve',adc)
      }
    }
  }
}
</script>
<style  scoped>
.retrievalbox{
  position: relative;
  width:auto;
  height:0.7rem;
  
}
.retrievalbox input{
  border:none;
  background: rgba(255, 255, 255, 0);
  outline: none;
}
.enterbox{
  overflow: hidden;
}
.enterbox,.enterbox >label,.enterbox > input{
  display: block;
  box-sizing:border-box;
}
.enterbox > label{
  float: left;
  text-align: center;
}
.enterbox > input{
  float: right;
}
.retrievalbox > ul{
  position:absolute;
  background: #fff;
  display: block;
  width:100%;
  left:0;
  z-index: 1;
  box-shadow: 0 7px 10px 0 rgba(6, 35, 102, 0.4);
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-bottom: 10px;

}
.retrievalbox > ul > li{
  width:80%;
  padding:0 5%;
  display:block;
  border-bottom:1px dashed rgba(204, 204, 204, 0.5);
  margin:0 auto;
}
.retrievalbox label > span,.retrievalbox > ul > li > span{
  display: block;
  line-height: 250%;
}
</style>


