
**数据源需要是一个多维数组集合，然后选择绑定的需要检索的数组里的对象的键值，然后输入内容即可自行检索，点击返回object**

**新增输入内容纠正功能参数 correct，扭转一些不好转化的词，例如 用户 输入 浦发  无法 搜索匹配浦东发展银行的问题**

**感谢反馈，有问题可以https://github.com/Yuppiezero/ba-retrieval/issues 交流~**

**安装说明:**

`          npm install ba-retrieval  --save          `

**全局引用或在使用页面引入**

    import retrieval from 'ba-retrieval'
    Vue.use(retrieval) 


**在页面注册使用**

    import retrieval from 'ba-retrieval'
      export default {
        components: { 
          retrieval 
        }, 
        data () { 
          return { 
            
          }
        } 
      } 

**这样可以在页面中添加HTML 标签 **
```html
<retrieval :basedata="banklist" :controlstyle='retstyle' :label="'标签名'"  :correct="correct" :valkey="'bankNameView'" @getfocus="focusEvent" @sieve="getval" :valid="'bankNo'"></retrieval>
```
**事件说明**

- basedata:一个数据源，必须是数组 ， 详见下面的完整demo

- valkey:需要从数据源里检索哪个key里面的值

- valid：点击下拉列表之后需要从数据源返回的数据

- label：定义左侧label需要显示的文字内容

- tips：定义placeholder显示的提示文字内容

- correct：需要扭转的数组，例如浦东发展银行输入浦发不好匹配的，所以只能来扭转用户的输入变成浦东；

basekey可能会输入但不能匹配的值，newval近义词能正确搜索匹配的词，格式如下↓

```
correct:[
  {basekey:'工行',newval:'工商'},
  {basekey:'建行',newval:'建设'},
  {basekey:'浦发',newval:'浦东'},
  {basekey:'农行',newval:'农业'},
  {basekey:'招行',newval:'招商'}
]
```

- rune：Object对象，一般不需要设置;text定义输入框内需要显示的值，设置的同时还需要设置 matching 是否需要用户手动进行确认 默认值true

```
rune:{
  text:'我是一条直接的结果，不需要用手动点下拉列表击确认结果'，
  matching:false
}

```
- controlstyle：控件的样式，是个对象集合 需要在data中定义一个对象变量 具体如下

```javascript
controlstyle：{

  layout：设计稿的尺寸(一般值为640或者750，也有可能是375),
  
  width:组件的宽度,
  
  height:组件的高度(输入区域的高度),
  
  color:控件内字体的颜色，可以为空或不设置,
  
  backgroundcolor:控件整体的背景颜色，可以为空或不设置,
  
  subhenight:显示的检索条每条的高度,
  
  labelwidth:左侧文字区域宽度,
  
  inputwidth:右侧输入区域的宽度,
  
  labelsize:左侧label文字字号大小,可以为空或不设置,
  
  inputsize:右侧输入文字区域的字体大小,可以为空或不设置,
  
  labcolor：左侧label文字的颜色,可以为空或不设置,
  
  inputcolor:右侧输入区域内文字的字体颜色,可以为空或不设置
  
  listnum:输入值之后最多显示多少条数据
}
```

- @sieve：点击下拉列表之后返回数据对象传给前面调用后自定义的函数 例如 @sieve="getval" 便可以在getval 函数里取值

```javascript
//在methods: 中定义获取函数事件 
getval(value){
   console.log(value)//value 为一个对象包括一个 name  和 一个 id
} 
```
- @getfocus: 如果需要知道组件是否获得了焦点 可以使用 @getfocus="focusEvent" 便可以在focusEvent 里判断是否获取了焦点 回传参数 true

```javascript
//在methods: 中定义获取函数事件 
focusEvent(value){
   console.log(value)//value 为true 及已经获取了焦点 做焦点事件处理
} 
```

**完整的demo**

    <template>
      <div class="hello">
        <retrieval :basedata="banklist" :controlstyle='retstyle' :label="'标签名'"  :correct="correct" :valkey="'bankNameView'" @getfocus="focusEvent" @sieve="getval" :valid="'bankNo'"></retrieval>
      </div>
    </template>
    
    <script>
    import retrieval from 'ba-retrieval'
    export default {
      components: { 
        retrieval 
      },
      data () {
        return {
          banklist:[
            {"bankName":"乌鲁木齐银行","bankNameView":"乌鲁木齐银行股份有限公司","keyWord":"乌鲁木齐银行股份","keyTag":"","bankNo":"313881000002","bankLevel":null,"acceptType":5,"acceptTypeName":"其他银行"},
            {"bankName":"甘肃银行","bankNameView":"甘肃银行股份有限公司","keyWord":"甘肃银行股份","keyTag":"","bankNo":"313821050016","bankLevel":null,"acceptType":5,"acceptTypeName":"其他银行"},
            {"bankName":"兰州银行","bankNameView":"兰州银行股份有限公司","keyWord":"兰州银行股份","keyTag":"","bankNo":"313821001016","bankLevel":null,"acceptType":5,"acceptTypeName":"其他银行"},
            {"bankName":"海南银行","bankNameView":"海南银行股份有限公司","keyWord":"海南银行股份","keyTag":"","bankNo":"313641099995","bankLevel":null,"acceptType":5,"acceptTypeName":"其他银行"},
            {"bankName":"柳州银行","bankNameView":"柳州银行股份有限公司","keyWord":"柳州银行股份","keyTag":"","bankNo":"313614000012","bankLevel":null,"acceptType":5,"acceptTypeName":"其他银行"},
            {"bankName":"广西北部湾银行","bankNameView":"广西北部湾银行股份有限公司","keyWord":"广西北部湾银行股份","keyTag":"","bankNo":"313611001018","bankLevel":null,"acceptType":5,"acceptTypeName":"其他银行"},
            {"bankName":"瑞穗银行","bankNameView":"瑞穗银行(中国)有限公司","keyWord":"瑞穗银行(中国)","keyTag":"","bankNo":"564290000010","bankLevel":null,"acceptType":4,"acceptTypeName":"小城商/外贸/农商"},
            {"bankName":"中国铁建财务有限公司","bankNameView":"中国铁建财务有限公司","keyWord":"中国铁建财务有限公司","keyTag":"","bankNo":"907521000017","bankLevel":null,"acceptType":1,"acceptTypeName":"一类财票"}
          ],
		      correct:[{basekey:'工行',newval:'工商'},{basekey:'建行',newval:'建设'},{basekey:'浦发',newval:'浦东'},{basekey:'农行',newval:'农业'},{basekey:'招行',newval:'招商'}],
          retstyle:{
            width:'345',//整体宽度
            height:'40',//整体高度
            layout:'750',//整体字号改成画稿尺寸了  这个注意
            color:'#333',//整体字体颜色
            backgroundcolor:'#fff',//组件的背景颜色
            subhenight:'40',//显示的检索条每条的高度
            labelwidth:'70',//label 的宽度
            inputwidth:'275',//输入框的宽度
            inputsize:'15',//输入框的字号
            labelsize:'16',//label框的字号
            labcolor:'#111',//label的字体颜色
            inputcolor:'#999',// 输入框的字体颜色
            listnum:10
          }
        }
      },
      methods: {
    
        getval(value){
    
          console.log(value) // 当点击了下拉列表菜单后 会返回一个valve{name:'',key:''} 具体输出可以自行console
    
        },
        focusEvent(value){
          console.log(value)// 吐出值为true 只要点击空间之后 输入框就会获得焦点 吐出 true
        }
      }
    </script>
    <style scoped>
    </style>


