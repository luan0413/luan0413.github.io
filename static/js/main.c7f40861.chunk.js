(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},157:function(e,t,a){e.exports=a(336)},162:function(e,t,a){},165:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),s=(a(162),a(11)),i=a(12),m=a(15),o=a(13),u=a(16),p=a(346),d=a(339),E=a(345),h=a(145),y=a.n(h),b=(a(165),a(337)),f=a(14),k=a(348),g=a(338),v=a(342),x=a(77),I=a(340),j=a(31),N=a.n(j),O=a(78),w=a.n(O),S=[{title:"ID",dataIndex:"aid",key:"aid"},{title:"dateline",dataIndex:"dateline",key:"dateline",render:function(e){return l.a.createElement(k.a,{color:"blue"},e)}},{title:"\u8def\u5f84",dataIndex:"pic",key:"pic"},{title:"\u8be6\u60c5",dataIndex:"title",key:"title"},{title:"Action",key:"action",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(k.a,{color:"yellow"},"Invite ",t.name),l.a.createElement(g.a,{type:"vertical"}),l.a.createElement(k.a,{color:"red"},"Delete"))}}],C=[{title:"\u4ee3\u7801\u7c7b\u522b",dataIndex:"dmlb",key:"dmlb"},{title:"\u4ee3\u7801",dataIndex:"dm",key:"dm",render:function(e){return l.a.createElement(k.a,{color:"blue"},e)}},{title:"\u4ee3\u7801\u8bf4\u660e",dataIndex:"dmsm",key:"dmsm"},{title:"\u6587\u4e2d\u8bf4\u660e",dataIndex:"dmsmsm",key:"dmsmsm"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(k.a,{color:"yellow"},"Invite ",t.name),l.a.createElement(g.a,{type:"vertical"}),l.a.createElement(k.a,{color:"red"},"Delete"))}}],D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).getAxiosData=function(){N.a.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20").then(function(e){console.log(e.data.result),a.setState({ListAxiosData:e.data.result})}).catch(function(e){console.log(e)})},a.getFetchJsonpData=function(){w()("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20").then(function(e){return e.json()}).then(function(e){a.setState({ListFetchJsonpData:e.result})}).catch(function(e){console.log(e)})},a.state={ListAxiosData:[],ListFetchJsonpData:[],dataSource:[],dataSourceUser:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;N.a.post("http://61.50.100.22:60000/bana_fvs/code/getCodes.do",{pageNum:1,pageSize:10}).then(function(t){console.log(t.data),e.setState({dataSourceUser:t.data.datas})}).catch(function(e){console.log(e)});N.a.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20").then(function(t){e.setState({dataSource:t.data.result})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"EquipmentHome main"},l.a.createElement("div",{className:"searchBox"},l.a.createElement("ul",null,l.a.createElement("li",{className:"searchList"},l.a.createElement("label",null,"ID:"),l.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165"})),l.a.createElement("li",{className:"searchList"},l.a.createElement("label",null,"dateline:"),l.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165"})),l.a.createElement("li",{className:"searchBtn"},l.a.createElement(x.a,{type:"primary",icon:"search"},"\u67e5\u8be2")))),l.a.createElement("div",{className:"btnBox"},l.a.createElement(x.a,{type:"primary",onClick:this.getAxiosData},"axios"),l.a.createElement(x.a,{type:"primary",onClick:this.getFetchJsonpData,style:{marginLeft:"5px"}},"fetch-jsonp"),l.a.createElement("div",{className:"listBox",style:{background:"#fff",marginTop:"10px",overflow:"auto"}},l.a.createElement("ul",{style:{float:"left"}},this.state.ListAxiosData.map(function(e,t){return l.a.createElement("li",{key:t},e.aid)})),l.a.createElement("ul",{style:{float:"left",marginLeft:"20px"}},this.state.ListFetchJsonpData.map(function(e,t){return l.a.createElement("li",{key:t},e.title)})))),l.a.createElement("div",{className:"gridBox"},l.a.createElement(I.a,{dataSource:this.state.dataSource,columns:S,rowKey:"aid"}),l.a.createElement(I.a,{dataSource:this.state.dataSourceUser,columns:C,rowKey:"dmsm"})))}}]),t}(n.Component),_=a(341),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).getAxiosData=function(){N.a.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20").then(function(e){console.log(e.data.result),a.setState({ListAxiosData:e.data.result})}).catch(function(e){console.log(e)})},a.getFetchJsonpData=function(){w()("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20").then(function(e){return e.json()}).then(function(e){a.setState({ListFetchJsonpData:e.result})}).catch(function(e){console.log(e)})},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({loading:!0}),setTimeout(function(){a.setState({loading:!1,visible:!1})},3e3)},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a.showDeleteConfirm=function(e){_.a.confirm({title:"\u63d0\u793a",content:"\u662f\u5426\u786e\u5b9a\u5220\u9664\uff1f",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})},a.state={ListAxiosData:[],ListFetchJsonpData:[],visible:!1,loading:!1,title:"\u7f16\u8f91",columns:[{title:"\u8bbe\u5907\u7f16\u53f7",dataIndex:"sbbh",key:"sbbh"},{title:"\u8bbe\u5907\u540d\u79f0",dataIndex:"sbmc",key:"sbmc"},{title:"\u8bbe\u5907\u578b\u53f7",dataIndex:"sbxh",key:"sbxh"},{title:"IP\u5730\u5740",dataIndex:"ipdz",key:"ipdz"},{title:"\u7aef\u53e3\u53f7",dataIndex:"dk",key:"dk"},{title:"\u5b89\u88c5\u65f6\u95f4",dataIndex:"azrqsm",key:"azrqsm"},{title:"\u7ba1\u7406\u673a\u6784",dataIndex:"jgmc",key:"jgmc"},{title:"\u5236\u9020\u5546",dataIndex:"zzssm",key:"zzssm"},{title:"\u4f9b\u5e94\u5546",dataIndex:"gyssm",key:"gyssm"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return l.a.createElement("span",null,l.a.createElement(k.a,{color:"green",onClick:a.showModal},"Update"),l.a.createElement(g.a,{type:"vertical"}),l.a.createElement(k.a,{color:"red",onClick:a.showDeleteConfirm},"Delete"))}}],dataSource:[{azdd:null,azrq:"2018-10-17",azrqsm:"2018-10-17",bz:null,children:null,cjs:1,cjssm:"\u767e\u7eb3\u53cb\u4e3a",dk:8100,files:[{fileName:"20181114092926638.jpg",id:"000100000307",name:"074517lRA.jpg"}],gddwlxfs:null,gddwmc:null,gljg:52,gys:1,gyssm:"\u767e\u7eb3\u53cb\u4e3a",id:"000100000307",ipdz:"10.1.1.194",item:[{dzbm:6,dzfx:1,dzfxsm:"\u4e1c",xhbm:307}],jgmc:"\u4e0a\u8857\u5927\u961f",key:307,leaf:!0,name:"\u4fe1\u53f7194",qdfs:3,qdfssm:"\u4fe1\u53f7\u706f",sbbh:"001",sbbm:307,sblx:1,sblxsm:"\u4fe1\u53f7",sbmc:"\u4fe1\u53f7194",sbxh:"XH01",sbzt:1,sbztsm:"\u6b63\u5e38",sfbz:2,sfbzsm:"\u5df2\u6807\u6ce8",shape:"POINT(12647081.968740754 4132444.921471809)",txfs:0,txfssm:null,txyys:0,txyyssm:null,type:1,wbgs:1,wbgslxdh:"15215236253",wbgslxr:"\u4f55\u5fd7\u8fdc",wbgssm:"\u767e\u7eb3\u53cb\u4e3a",ysrq:null,ysrqsm:null,zbrq:null,zbrqsm:null,zzs:1,zzssm:"\u767e\u7eb3\u53cb\u4e3a"}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.post("http://10.1.1.109:8080/bana_oms/device/getDevices.do",{token:"YWRtaW58MHy53MDt1LF8MTgwMTIzNDU2Nzh8MHzWo9bdytC5q7Cyvta9u82ovq%2By7NanttN8MTU0NDUwOTc4MjkxNw%3D%3D",data:{pageNum:1,pageSize:10}}).then(function(t){console.log(t.data),e.setState({dataSource:t.data.datas})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"SignalSafeguard main"},l.a.createElement("div",{className:"searchBox"},l.a.createElement("ul",null,l.a.createElement("li",{className:"searchList"},l.a.createElement("label",null,"\u8bbe\u5907\u7f16\u53f7:"),l.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165"})),l.a.createElement("li",{className:"searchList"},l.a.createElement("label",null,"\u8bbe\u5907\u540d\u79f0:"),l.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165"})),l.a.createElement("li",{className:"searchList"},l.a.createElement("label",null,"\u7ba1\u7406\u673a\u6784:"),l.a.createElement(v.a,{placeholder:"\u8bf7\u8f93\u5165"})),l.a.createElement("li",{className:"searchBtn"},l.a.createElement(x.a,{type:"primary",icon:"reload"},"\u91cd\u7f6e"),l.a.createElement(x.a,{type:"primary",icon:"search",style:{marginLeft:"5px"}},"\u67e5\u8be2")))),l.a.createElement("div",{className:"btnBox"},l.a.createElement(x.a,{type:"primary",onClick:this.getAxiosData,style:{marginLeft:"5px"}},"axios"),l.a.createElement(x.a,{type:"primary",onClick:this.getFetchJsonpData,style:{marginLeft:"5px"}},"fetch-jsonp"),l.a.createElement("div",{className:"listBox",style:{background:"#fff",marginTop:"10px",overflow:"auto"}},l.a.createElement("ul",{style:{float:"left"}},this.state.ListAxiosData.map(function(e,t){return l.a.createElement("li",{key:t},e.aid)})),l.a.createElement("ul",{style:{float:"left",marginLeft:"20px"}},this.state.ListFetchJsonpData.map(function(e,t){return l.a.createElement("li",{key:t},e.title)})))),l.a.createElement("div",{className:"gridBox"},l.a.createElement(I.a,{dataSource:this.state.dataSource,columns:this.state.columns,rowKey:"sbbh"})),l.a.createElement(_.a,{title:this.state.title,visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,width:1e3,centered:!0,footer:[l.a.createElement(x.a,{key:"back",onClick:this.handleCancel},"\u53d6\u6d88"),l.a.createElement(x.a,{key:"submit",type:"primary",loading:this.state.loading,onClick:this.handleOk},"\u786e\u5b9a(3s\u5173\u95ed)")]},l.a.createElement("div",{className:"basicInfoBox infoBox"},l.a.createElement("div",{className:"infoBoxTitle"},"\u57fa\u672c\u4fe1\u606f")),l.a.createElement("div",{className:"installInfoBox infoBox"},l.a.createElement("div",{className:"infoBoxTitle"},"\u5b89\u88c5\u4fe1\u606f")),l.a.createElement("div",{className:"maintenanceInfoBox infoBox"},l.a.createElement("div",{className:"infoBoxTitle"},"\u7ef4\u4fdd\u4fe1\u606f"))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={list:[{list:[{cate_id:"5ac0896ca880f20358495508",catename:"\u7cbe\u9009\u70ed\u83dc",img_url:"../assets/img/1.jpg",price:"2",title:"\u5a03\u5a03\u83dc\u7096\u8c46\u8150",_id:"5ac1a22011f48140d0002955"},{cate_id:"5ac0896ca880f20358495508",catename:"\u7cbe\u9009\u70ed\u83dc",img_url:"../assets/img/2.jpg",price:"22",title:"\u9999\u9165\u9ec4\u91d1\u9c7c",_id:"5ac1eb591a6b2f48fcb06210"},{cate_id:"5ac0896ca880f20358495508",catename:"\u7cbe\u9009\u70ed\u83dc",img_url:"../assets/img/3.jpg",price:"25",title:"\u732a\u8089\u767d\u83dc",_id:"5ac1f04bd1bef433a42614cd"},{cate_id:"5ac0896ca880f20358495508",catename:"\u7cbe\u9009\u70ed\u83dc",img_url:"../assets/img/4.jpg",price:"21",title:"\u9c9c\u852c\u83cc\u83c7\u7ca5",_id:"5ad5ee4018644907b8dd58fa"}],pid:"0",title:"\u7cbe\u9009\u70ed\u83dc",_id:"5ac0896ca880f20358495508"}],domain:"http://a.itying.com/"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.domain+"api/productlist";N.a.get(t).then(function(t){console.log(t.data.result),e.setState({list:t.data.result})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SignalLabel"},l.a.createElement("h2",null,"\u901a\u8fc7\u8def\u7531\u4f20\u503c"),l.a.createElement("div",{className:"list"},this.state.list.map(function(t,a){return l.a.createElement("div",{className:"item",key:a},l.a.createElement("h3",{className:"item_cate"},t.title),l.a.createElement("ul",{className:"item_list"},t.list.map(function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(d.a,{to:"/equipment/detail/".concat(t._id)},l.a.createElement("div",{className:"inner"},l.a.createElement("img",{src:"".concat(e.state.domain).concat(t.img_url)}),l.a.createElement("p",{className:"title"},t.title),l.a.createElement("p",{className:"price"},t.price,"\u5143"))))})))})),l.a.createElement("h2",null,"\u901a\u8fc7get\u4f20\u503c"),l.a.createElement("ul",null,this.state.list.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(d.a,{to:"/equipment/detailget/?aid=".concat(e.aid)},e.title))})))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={list:[{cate_id:"5ac0896ca880f20358495508",catename:"\u7cbe\u9009\u70ed\u83dc",content:"<p>\u9999\u9165\u9ec4\u91d1\u9c7c</p>",description:"\u8fd9\u662f\u5546\u54c1\u63cf\u8ff0",img_url:"../assets/img/1.jpg",is_best:"1",is_hot:"1",num:"1",price:"22",product_bar_code:"324235",shop_id:0,sort:"",status:"1",title:"\u9999\u9165\u9ec4\u91d1\u9c7c",type:"2",_id:"5ac1eb591a6b2f48fcb06210"}],domain:"http://a.itying.com/"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var t=this.props.match.params.id,a=this.state.domain+"api/productcontent?id="+t;console.log(a),N.a.get(a).then(function(t){console.log(t.data.result),e.setState({list:t.data.result[0]})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"pcontent"},l.a.createElement("div",{className:"back"},"  ",l.a.createElement(d.a,{to:"/equipment/signallabel"},"\u8fd4\u56de")),l.a.createElement("div",{className:"p_content"},l.a.createElement("div",{className:"p_info"},l.a.createElement("img",{src:"".concat(this.state.domain).concat(this.state.list.img_url)}),l.a.createElement("h2",null,this.state.list.title),l.a.createElement("p",{className:"price"},this.state.list.price,"/\u4efd")),l.a.createElement("div",{className:"p_detial"},l.a.createElement("h3",null,"\u5546\u54c1\u8be6\u60c5"),l.a.createElement("div",{className:"p_content",dangerouslySetInnerHTML:{__html:this.state.list.content}}))),l.a.createElement("footer",{className:"pfooter"},l.a.createElement("div",{className:"cart"},l.a.createElement("strong",null,"\u6570\u91cf:"),l.a.createElement("div",{className:"cart_num"},l.a.createElement("div",{className:"input_left"},"-"),l.a.createElement("div",{className:"input_center"},l.a.createElement("input",{type:"text",readOnly:"readonly",value:"1",name:"num",id:"num"})),l.a.createElement("div",{className:"input_right"},"+"))),l.a.createElement("button",{className:"addcart"},"\u52a0\u5165\u8d2d\u7269\u8f66")))}}]),t}(n.Component),B=a(110),M=a.n(B),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=M.a.parse(this.props.location.search,!0).query;console.log(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"DetailGet"},"\u8be6\u60c5",M.a.parse(this.props.location.search,!0).query.aid)}}]),t}(n.Component),T=b.a.SubMenu,F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){console.log("click",e)}},{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"Equipment"},l.a.createElement("div",{className:"leftMenu"},l.a.createElement(b.a,{onClick:this.handleClick,style:{width:200},mode:"vertical"},l.a.createElement(T,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"home"}),l.a.createElement("span",null,l.a.createElement(d.a,{to:"/equipment/equipmenthome"},"\u9996\u9875")))}),l.a.createElement(T,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"money-collect"}),l.a.createElement("span",null,"\u8d44\u4ea7\u7ba1\u7406"))},l.a.createElement(T,{key:"sub21",title:"\u4fe1\u53f7"},l.a.createElement(b.a.Item,{key:"1"},l.a.createElement(d.a,{to:"/"},"\u8bbe\u5907\u7ef4\u62a4")),l.a.createElement(b.a.Item,{key:"2"},l.a.createElement(d.a,{to:"/equipment/signallabel"},"\u8bbe\u5907\u6807\u6ce8"))),l.a.createElement(T,{key:"sub22",title:"\u5361\u53e3"},l.a.createElement(b.a.Item,{key:"3"},"\u8bbe\u5907\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"4"},"\u8bbe\u5907\u6807\u6ce8")),l.a.createElement(T,{key:"sub23",title:"\u89c6\u9891"},l.a.createElement(b.a.Item,{key:"5"},"\u8bbe\u5907\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"6"},"\u8bbe\u5907\u6807\u6ce8")),l.a.createElement(T,{key:"sub24",title:"\u8bf1\u5bfc\u5c4f"},l.a.createElement(b.a.Item,{key:"7"},"\u8bbe\u5907\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"8"},"\u8bbe\u5907\u6807\u6ce8")),l.a.createElement(T,{key:"sub25",title:"\u68c0\u6d4b\u5668"},l.a.createElement(b.a.Item,{key:"9"},"\u8bbe\u5907\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"10"},"\u8bbe\u5907\u6807\u6ce8")),l.a.createElement(T,{key:"sub26",title:"\u8fd0\u7ef4\u4e00\u4f53\u673a"},l.a.createElement(b.a.Item,{key:"11"},"\u8bbe\u5907\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"12"},"\u8bbe\u5907\u6807\u6ce8"))),l.a.createElement(T,{key:"sub3",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"desktop"}),l.a.createElement("span",null,"\u96c6\u4e2d\u76d1\u6d4b"))},l.a.createElement(b.a.Item,{key:"sub31"},"\u8bbe\u5907\u76d1\u6d4b")),l.a.createElement(T,{key:"sub4",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"setting"}),l.a.createElement("span",null,"\u7edf\u8ba1\u5206\u6790"))},l.a.createElement(T,{key:"sub41",title:"\u8bbe\u5907\u8d28\u91cf\u5206\u6790"},l.a.createElement(b.a.Item,{key:"sub411"},"\u8bbe\u5907\u6545\u969c\u8d8b\u52bf\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub412"},"\u8bbe\u5907\u72b6\u6001\u5bf9\u6bd4\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub413"},"\u8bbe\u5907\u6545\u969c\u539f\u56e0\u5bf9\u6bd4\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub414"},"\u8bbe\u5907\u8fd0\u884c\u60c5\u51b5\u5206\u6790")),l.a.createElement(T,{key:"sub42",title:"\u670d\u52a1\u8d28\u91cf\u5206\u6790"},l.a.createElement(b.a.Item,{key:"sub421"},"\u8fd0\u7ef4\u8d39\u7528\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub422"},"\u8fd0\u7ef4\u6548\u7387\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub423"},"\u8fd0\u7ef4\u6d41\u7a0b\u5206\u6790"))),l.a.createElement(T,{key:"sub5",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"tool"}),l.a.createElement("span",null,"\u8fd0\u7ef4\u670d\u52a1"))},l.a.createElement(b.a.Item,{key:"sub51"},"\u4eba\u5de5\u62a5\u969c"),l.a.createElement(b.a.Item,{key:"sub52"},"\u62a5\u969c\u5904\u7406"),l.a.createElement(b.a.Item,{key:"sub53"},"\u62a5\u969c\u5386\u53f2")))),l.a.createElement("div",{className:"content"},l.a.createElement(E.a,{path:"/equipment/equipmenthome",component:D}),l.a.createElement(E.a,{exact:!0,path:"/",component:z}),l.a.createElement(E.a,{path:"/equipment/signallabel",component:L}),l.a.createElement(E.a,{path:"/equipment/detail/:id",component:q}),l.a.createElement(E.a,{path:"/equipment/detailget",component:A}))))}}]),t}(n.Component),J=a(343),P=a(347),H=J.a.Content,U=J.a.Sider,K=b.a.SubMenu,W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!1},a.onCollapse=function(e){console.log(e),a.setState({collapsed:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(J.a,{style:{minHeight:"90vh"}},l.a.createElement(U,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},l.a.createElement("div",{className:"logo"}),l.a.createElement(b.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement(b.a.Item,{key:"sub1"},l.a.createElement(f.a,{type:"home"}),l.a.createElement("span",null,"\u9996\u9875")),l.a.createElement(K,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"money-collect"}),l.a.createElement("span",null,"\u8d44\u4ea7\u7ba1\u7406"))},l.a.createElement(K,{key:"sub21",title:"\u6807\u5fd7\u6807\u724c"},l.a.createElement(b.a.Item,{key:"sub211"},"\u6807\u5fd7\u6807\u724c\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"sub212"},"\u6807\u5fd7\u6807\u724c\u5f55\u5165"),l.a.createElement(b.a.Item,{key:"sub213"},"\u6807\u5fd7\u6807\u724c\u6807\u6ce8"),l.a.createElement(b.a.Item,{key:"sub214"},"\u6807\u5fd7\u6807\u724c\u67e5\u8be2")),l.a.createElement(K,{key:"sub22",title:"\u9694\u79bb\u8bbe\u65bd"},l.a.createElement(b.a.Item,{key:"sub221"},"\u9694\u79bb\u8bbe\u65bd\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"sub223"},"\u9694\u79bb\u8bbe\u65bd\u6807\u6ce8"),l.a.createElement(b.a.Item,{key:"sub224"},"\u9694\u79bb\u8bbe\u65bd\u67e5\u8be2")),l.a.createElement(K,{key:"sub23",title:"\u706f\u6746"},l.a.createElement(b.a.Item,{key:"sub231"},"\u706f\u6746\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"sub233"},"\u706f\u6746\u6807\u6ce8"),l.a.createElement(b.a.Item,{key:"sub234"},"\u706f\u6746\u67e5\u8be2")),l.a.createElement(K,{key:"sub24",title:"\u6807\u7ebf"},l.a.createElement(b.a.Item,{key:"sub241"},"\u6807\u7ebf\u67e5\u8be2"))),l.a.createElement(K,{key:"sub3",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"setting"}),l.a.createElement("span",null,"\u7edf\u8ba1\u5206\u6790"))},l.a.createElement(K,{key:"sub31",title:"\u8bbe\u65bd\u8d28\u91cf\u5206\u6790"},l.a.createElement(b.a.Item,{key:"sub311"},"\u8bbe\u65bd\u635f\u6bc1\u60c5\u51b5\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub312"},"\u8bbe\u65bd\u72b6\u6001\u5bf9\u6bd4\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub313"},"\u8bbe\u65bd\u7ef4\u4fee\u539f\u56e0\u5bf9\u6bd4\u5206\u6790")),l.a.createElement(K,{key:"sub32",title:"\u670d\u52a1\u8d28\u91cf\u5206\u6790"},l.a.createElement(b.a.Item,{key:"sub321"},"\u8fd0\u7ef4\u8d39\u7528\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub322"},"\u8fd0\u7ef4\u6548\u7387\u5206\u6790"),l.a.createElement(b.a.Item,{key:"sub323"},"\u8fd0\u7ef4\u6d41\u7a0b\u5206\u6790"))),l.a.createElement(K,{key:"sub4",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"tool"}),l.a.createElement("span",null,"\u8fd0\u7ef4\u670d\u52a1"))},l.a.createElement(b.a.Item,{key:"sub41"},"\u4eba\u5de5\u62a5\u4fee"),l.a.createElement(b.a.Item,{key:"sub42"},"\u62a5\u4fee\u5904\u7406"),l.a.createElement(b.a.Item,{key:"sub43"},"\u62a5\u4fee\u5386\u53f2")),l.a.createElement(K,{key:"sub5",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"desktop"}),l.a.createElement("span",null,"\u8bbe\u65bd\u5de1\u68c0"))},l.a.createElement(b.a.Item,{key:"sub51"},"\u5de1\u68c0\u8def\u7ebf\u7ef4\u62a4"),l.a.createElement(b.a.Item,{key:"sub52"},"\u5de1\u68c0\u5de5\u4f5c\u8bb0\u5f55")))),l.a.createElement(J.a,null,l.a.createElement(H,{style:{margin:"0 16px"}},l.a.createElement(P.a,{style:{margin:"16px 0"}},l.a.createElement(P.a.Item,null,"User"),l.a.createElement(P.a.Item,null,"Bill")),l.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},"Bill is a cat."))))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Police"},"Police")}}]),t}(n.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Monitor"},"Monitor")}}]),t}(n.Component),X=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"System"},"System")}}]),t}(n.Component),Y=a(344),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).login=function(e){e.preventDefault();var t=a.refs.username.value,n=a.refs.password.value;"admin"==t&&"123456"==n?a.setState({loginFlag:!0}):alert("\u767b\u5f55\u5931\u8d25")},a.state={loginFlag:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.loginFlag?l.a.createElement(Y.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.login,className:"loginBox"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",ref:"username",className:"text"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"password",ref:"password",className:"text"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"\u767b\u5f55",className:"btn"})))}}]),t}(n.Component),Q=b.a.SubMenu,V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={current:"home"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"App-header-logo"},l.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"})),l.a.createElement("div",{className:"App-header-menu"},l.a.createElement(b.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",theme:"dark"},l.a.createElement(b.a.Item,{key:"home"},l.a.createElement(d.a,{to:"/"},"\u4ea4\u901a\u8bbe\u5907\u7ba1\u7406\u7cfb\u7edf")),l.a.createElement(b.a.Item,{key:"facility"},l.a.createElement(d.a,{to:"/facility"},"\u4ea4\u901a\u8bbe\u65bd\u7ba1\u7406\u7cfb\u7edf")),l.a.createElement(b.a.Item,{key:"police"},l.a.createElement(d.a,{to:"/police"},"\u8b66\u529b\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf")),l.a.createElement(b.a.Item,{key:"monitor"},l.a.createElement(d.a,{to:"/monitor"},"\u8b66\u529b\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf")),l.a.createElement(b.a.Item,{key:"system"},l.a.createElement(d.a,{to:"/system"},"\u8b66\u529b\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf")),l.a.createElement(Q,{key:"admin",title:"admin",style:{float:"right",lineHeight:"60px"}},l.a.createElement(b.a.Item,{key:"password"},"\u4fee\u6539\u5bc6\u7801"),l.a.createElement(b.a.Item,{key:"exit"},l.a.createElement(d.a,{to:"/login"},"\u9000\u51fa")))))),l.a.createElement("section",{style:{height:"90vh"}},l.a.createElement(E.a,{exact:!0,path:"/",component:F}),l.a.createElement(E.a,{path:"/facility",component:W}),l.a.createElement(E.a,{path:"/police",component:R}),l.a.createElement(E.a,{path:"/monitor",component:G}),l.a.createElement(E.a,{path:"/system",component:X}),l.a.createElement(E.a,{path:"/login",component:$}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[157,2,1]]]);
//# sourceMappingURL=main.c7f40861.chunk.js.map