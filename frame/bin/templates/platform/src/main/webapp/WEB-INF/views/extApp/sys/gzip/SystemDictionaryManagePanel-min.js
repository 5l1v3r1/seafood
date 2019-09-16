SystemDictionaryPanel=Ext.extend(Disco.Ext.CrudListPanel,{id:"systemDictionaryPanel",title:"\u701b\u6940\u5400\u9352\u55d9\u88ab\u7ee0\uff04\u608a",baseUrl:"systemDictionary.java",showView:false,createForm:function(){var a=new Ext.form.FormPanel({frame:true,labelWidth:60,labelAlign:"right",defaults:{anchor:"-40",xtype:"textfield"},items:[{xtype:"hidden",name:"id"},{fieldLabel:"\u7f02\u6827\u5f7f",name:"sn",allowBlank:false,width:300,helpText:"\u701b\u6940\u5400\u9352\u55d9\u88ab\u9428\u52eb\u656e\u6d93\ufffd\u93cd\u56ea\u7611\u951b\u5c80\u25bc\u6434\u5fce\u8151\u95ab\u6c33\u7e43\u7f02\u6827\u5f7f\u93c9\u30e9\ufffd\u590b\u5ae8\u701b\u6940\u5400\u934a\ufffd!"},{fieldLabel:"\u935a\u5d87\u041e",name:"title",allowBlank:false},{xtype:"textarea",fieldLabel:"\u7ee0\ufffd\u6d60\ufffd",name:"intro"}]});return a},createWin:function(b,a){return this.initWin(438,200,"\u701b\u6940\u5400\u9352\u55d9\u88ab\u7ee0\uff04\u608a",b,a)},storeMapping:["id","sn","title","intro","children"],initComponent:function(){this.cm=new Ext.grid.ColumnModel([{header:"\u7f02\u682b\u721c",sortable:true,width:50,dataIndex:"sn"},{header:"\u935a\u5d87\u041e",sortable:true,width:50,dataIndex:"title"},{header:"\u7ee0\ufffd\u6d60\ufffd",sortable:true,dataIndex:"intro"}]);SystemDictionaryPanel.superclass.initComponent.call(this)},afterList:function(){this.searchField.hide()}});SystemDictionaryDetailPanel=Ext.extend(Disco.Ext.CrudListPanel,{id:"systemDictionaryDetailPanel",title:"\u701b\u6940\u5400\u934a\u80a9\ue178\u941e\ufffd",baseUrl:"systemDictionaryDetail.java",pageSize:20,showView:false,createForm:function(){var a=new Ext.form.FormPanel({frame:true,labelWidth:80,labelAlign:"right",defaults:{anchor:"-20",xtype:"textfield"},items:[{xtype:"hidden",name:"id"},{xtype:"hidden",name:"parentSn"},{fieldLabel:"\u935a\u5d87\u041e",name:"title",allowBlank:false},{fieldLabel:"\u934a\ufffd",name:"tvalue",allowBlank:false},{fieldLabel:"\u93c4\u5267\u305a\u6924\u54c4\u7c2d",name:"sequence"}]});return a},save:function(c,a,b){this.fp.form.baseParams={parentId:this.parentId};SystemDictionaryDetailPanel.superclass.save.call(this,c,a,b)},createWin:function(b,a){return this.initWin(288,160,"\u701b\u6940\u5400\u934a\u80a9\ue178\u941e\ufffd",b,a)},storeMapping:["id","title","tvalue","sequence","parent"],initComponent:function(){this.cm=new Ext.grid.ColumnModel([new Ext.grid.RowNumberer({header:"\u6434\u5fd3\u5f7f",width:40}),{header:"\u935a\u5d87\u041e",sortable:true,width:300,dataIndex:"title"},{header:"\u934a\ufffd",sortable:true,width:300,dataIndex:"tvalue"},{header:"\u93c4\u5267\u305a\u6924\u54c4\u7c2d",sortable:true,width:300,dataIndex:"sequence"}]);this.gridButtons=[{text:"\u6d93\u5a44\u0429",cls:"x-btn-text-icon",icon:"img/ria/up.gif",handler:this.swapSequence(""),scope:this},{text:"\u6d93\u5b2c\u0429",cls:"x-btn-text-icon",icon:"img/ria/down.gif",handler:this.swapSequence(true),scope:this},"-"];SystemDictionaryDetailPanel.superclass.initComponent.call(this)},afterList:function(){this.searchField.setWidth(100);this.grid.on("render",function(){this.disableOperaterItem("btn_add")},this);this.store.on("load",function(){this.enableOperaterItem("btn_add")},this)}});SystemDictionaryManagePanel=Ext.extend(Ext.Panel,{id:"systemDictionaryManagePanel",closable:true,autoScroll:true,border:false,layout:"border",defaults:{bodyStyle:"border-top:none;"},initComponent:function(){SystemDictionaryManagePanel.superclass.initComponent.call(this);this.dictionaryPanel=new SystemDictionaryPanel({title:"\u701b\u6940\u5400\u9352\u55d9\u88ab"});this.detailPanel=new SystemDictionaryDetailPanel({title:"\u701b\u6940\u5400\u7487\ufe3d\u510f"});this.add({layout:"fit",region:"west",width:"45%",items:[this.dictionaryPanel.list()]},{layout:"fit",region:"center",items:[this.detailPanel.list()]});this.dictionaryPanel.grid.on("rowclick",function(b,a){this.detailPanel.store.removeAll();var c=this.dictionaryPanel.store.getAt(a);this.detailPanel.store.reload({params:{parentId:c.get("id"),start:0}});this.detailPanel.parentId=c.get("id")},this,{buffer:200})}});