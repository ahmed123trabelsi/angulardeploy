"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[508],{2508:(De,u,l)=>{l.r(u),l.d(u,{EMPLOYEE_MISSION_ROUTE:()=>fe});var f=l(9115),_=l(3726),g=l(4412),$=l(7786),F=l(6354),D=l(5024),b=l(4619),j=l(5780),d=l(177),v=l(9183),C=l(6600),x=l(2765),c=l(9159),y=l(9213),M=l(8834),S=l(4823),I=l(8173),p=l(6695),h=l(2042),N=l(8141),G=l(9437),V=l(8810),e=l(4438),E=l(1626),k=l(2490);let R=(()=>{class a extends b.U{constructor(t,i){super(),this.http=t,this.cookieService=i,this.baseUrl="http://localhost:3000/missions",this.isTblLoading=!0,this.dataChange=new g.t([])}assignUserToMission(t,i){return this.http.post(`${this.baseUrl}/assign-user`,{missionId:t,userId:i})}getDialogData(){return this.dialogData}createMission(t){return this.http.post(`${this.baseUrl}/create`,t)}updateDataChange(t){this.dataChange.next(t)}getDataChange(){return this.dataChange.asObservable()}get data(){return this.dataChange.value}addMission(t){this.dialogData=t}deleteMission(t){return this.http.delete(`${this.baseUrl}/${t}`)}updateMission(t,i){return this.http.put(`${this.baseUrl}/${t}`,i)}deleteMultipleMissions(t){return t.map(o=>o?.toString()),this.http.delete(`${this.baseUrl}/delete-multiple`)}getAllMissionse(){const t=this.getTokenFromCookie();if(!t)throw new Error("ID du client introuvable dans le cookie.");return this.http.get(`${this.baseUrl}/employee/${t}`).pipe((0,N.M)(i=>{const s=Array.isArray(i)?i:[i];this.isTblLoading=!1,this.dataChange.next(s)}),(0,G.W)(i=>(this.isTblLoading=!1,(0,V.$)(i))))}createAndAssignMission(t){const i=this.getTokenFromCookie();return this.http.post(`${this.baseUrl}/${i}`,t)}getTokenFromCookie(){return this.cookieService.check("token")?this.cookieService.get("token"):null}static#e=this.\u0275fac=function(i){return new(i||a)(e.KVO(E.Qq),e.KVO(k.O))};static#t=this.\u0275prov=e.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var T=l(5518),U=l(1722),B=l(5351),A=l(5416),O=l(4710);const X=["filter"],w=()=>["Missions"],Y=()=>[5,10,25,100];function L(a,n){if(1&a){const t=e.RV6();e.j41(0,"mat-header-cell")(1,"mat-checkbox",46),e.bIt("change",function(s){e.eBV(t);const o=e.XpG();return e.Njj(s?o.masterToggle():null)}),e.k0s()()}if(2&a){const t=e.XpG();e.R7$(),e.Y8G("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())}}function z(a,n){if(1&a){const t=e.RV6();e.j41(0,"mat-cell")(1,"mat-checkbox",47),e.bIt("click",function(s){return e.eBV(t),e.Njj(s.stopPropagation())})("change",function(s){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(s?r.selection.toggle(o):null)}),e.k0s()()}if(2&a){const t=n.$implicit,i=e.XpG();e.R7$(),e.Y8G("checked",i.selection.isSelected(t))}}function H(a,n){1&a&&(e.j41(0,"mat-header-cell",48),e.EFF(1,"Id"),e.k0s())}function P(a,n){if(1&a&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&a){const t=n.$implicit;e.R7$(),e.JRh(t._id)}}function J(a,n){1&a&&(e.j41(0,"mat-header-cell",48),e.EFF(1,"Title"),e.k0s())}function Q(a,n){if(1&a&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&a){const t=n.$implicit;e.R7$(),e.JRh(t.title)}}function Z(a,n){1&a&&(e.j41(0,"mat-header-cell",48),e.EFF(1,"Description"),e.k0s())}function K(a,n){if(1&a&&(e.j41(0,"mat-cell"),e.EFF(1),e.k0s()),2&a){const t=n.$implicit;e.R7$(),e.JRh(t.description)}}function W(a,n){1&a&&(e.j41(0,"mat-header-cell",48),e.EFF(1," Status "),e.k0s())}function q(a,n){if(1&a&&(e.j41(0,"div")(1,"span",51),e.EFF(2),e.k0s()()),2&a){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function ee(a,n){if(1&a&&(e.j41(0,"div")(1,"span",52),e.EFF(2),e.k0s()()),2&a){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function te(a,n){if(1&a&&(e.j41(0,"div")(1,"span",53),e.EFF(2),e.k0s()()),2&a){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function ie(a,n){if(1&a&&(e.j41(0,"div")(1,"span",54),e.EFF(2),e.k0s()()),2&a){const t=e.XpG().$implicit;e.R7$(2),e.SpI(" ",t.status,"")}}function ae(a,n){if(1&a&&(e.j41(0,"mat-cell",49)(1,"span",50),e.EFF(2,"Status:"),e.k0s(),e.DNE(3,q,3,1,"div")(4,ee,3,1,"div")(5,te,3,1,"div")(6,ie,3,1,"div"),e.k0s()),2&a){const t=n.$implicit;e.R7$(3),e.vxM(3,"completed"===t.status?3:-1),e.R7$(),e.vxM(4,"canceled"===t.status?4:-1),e.R7$(),e.vxM(5,"pending"===t.status?5:-1),e.R7$(),e.vxM(6,"ongoing"===t.status?6:-1)}}function se(a,n){1&a&&(e.j41(0,"mat-header-cell",48),e.EFF(1,"Start Date"),e.k0s())}function ne(a,n){if(1&a&&(e.j41(0,"mat-cell"),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&a){const t=n.$implicit;e.R7$(),e.JRh(e.i5U(2,1,t.startDate,"MM/dd/yyyy"))}}function oe(a,n){1&a&&(e.j41(0,"mat-header-cell",48),e.EFF(1,"End Date"),e.k0s())}function le(a,n){if(1&a&&(e.j41(0,"mat-cell"),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&a){const t=n.$implicit;e.R7$(),e.JRh(e.i5U(2,1,t.endDate,"MM/dd/yyyy"))}}function re(a,n){1&a&&e.nrm(0,"mat-cell",55)}function ce(a,n){1&a&&e.nrm(0,"mat-header-row")}function me(a,n){1&a&&e.nrm(0,"mat-row",56),2&a&&e.xc7("cursor","pointer")}function de(a,n){1&a&&e.nrm(0,"mat-spinner")}let he=(()=>{class a extends b.U{constructor(t,i,s,o,r,m){super(),this.httpClient=t,this.CookieService=i,this.dialog=s,this.missionsService=o,this.snackBar=r,this.r=m,this.displayedColumns=["select","name","description","status","startDate","endDate"],this.selection=new D.CB(!0,[]),this.contextMenuPosition={x:"0px",y:"0px"}}ngOnInit(){this.loadData()}route(t){this.r.navigate(["admin/mission/assignusertomission/"+t])}refresh(){this.loadData()}addNew(){let t;t="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(T.u,{data:{missions:this.mission,action:"add"},direction:t});this.subs.sink=i.afterClosed().subscribe(s=>{1===s&&(this.exampleDatabase?.dataChange.value.unshift(this.missionsService.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}editCall(t){let i;this.id=t._id,i="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const s=this.dialog.open(T.u,{data:{mission:t,id:t._id,action:"edit"},direction:i});this.subs.sink=s.afterClosed().subscribe(o=>{if(1===o){const r=this.exampleDatabase?.dataChange.value.findIndex(m=>m._id===this.id);void 0!==r&&void 0!==this.exampleDatabase&&(this.exampleDatabase.dataChange.value[r]=this.missionsService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(t,i){let s;this.index=t,this.id=i._id,s="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const o=this.dialog.open(U.b,{height:"270px",width:"300px",data:{id:i._id,title:i.title,description:i.description,status:i.status,startdate:i.startDate,enddate:i.endDate},direction:s});this.subs.sink=o.afterClosed().subscribe(r=>{if(1===r){const m=this.exampleDatabase?.dataChange.value.findIndex(ge=>ge._id===this.id);void 0!==m&&void 0!==this.exampleDatabase&&(this.exampleDatabase.dataChange.value.splice(m,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){return this.selection.selected.length===this.dataSource.renderedData.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(t=>this.selection.select(t))}removeSelectedRows(){let t;t=this.selection.selected.map(s=>s._id),t.length>0&&this.missionsService.deleteMultipleMissions(t).subscribe(()=>{this.selection.clear(),this.refreshTable()},s=>{console.error("Erreur lors de la suppression des missions:",s)})}loadData(){this.exampleDatabase=new R(this.httpClient,this.CookieService),this.dataSource=new pe(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,_.R)(this.filter.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)}),this.exampleDatabase.getAllMissionse().subscribe(t=>{this.dataSource.data=t})}exportExcel(){const t=this.dataSource.filteredData.map(i=>({Title:i.title,Description:i.description,Status:i.status,"Start Date":(0,d.Yq)(new Date(i.startDate),"yyyy-MM-dd","en")||"","End Date":(0,d.Yq)(new Date(i.endDate),"yyyy-MM-dd","en")||""}));j.H.exportToExcel(t,"excel")}showNotification(t,i,s,o){this.snackBar.open(i,"",{duration:2e3,verticalPosition:s,horizontalPosition:o,panelClass:t})}onContextMenu(t,i){}static#e=this.\u0275fac=function(i){return new(i||a)(e.rXU(E.Qq),e.rXU(k.O),e.rXU(B.bZ),e.rXU(R),e.rXU(A.UG),e.rXU(O.Ix))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-missionemployee"]],viewQuery:function(i,s){if(1&i&&(e.GBs(p.iy,7),e.GBs(h.B4,7),e.GBs(X,7),e.GBs(f.Cp,5)),2&i){let o;e.mGM(o=e.lsd())&&(s.paginator=o.first),e.mGM(o=e.lsd())&&(s.sort=o.first),e.mGM(o=e.lsd())&&(s.filter=o.first),e.mGM(o=e.lsd())&&(s.contextMenu=o.first)}},standalone:!0,features:[e.Vt3,e.aNF],decls:65,vars:14,consts:[["filter",""],["paginator",""],[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"materialTableHeader"],[1,"left"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],[1,"right"],[1,"tbl-export-btn"],[1,"tbl-header-btn"],["matTooltip","REFRESH",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],["matTooltip","DELETE",1,"m-l-10",3,"hidden"],["mat-mini-fab","","color","warn",3,"click"],["matTooltip","XLSX",1,"export-button","m-l-10"],["src","assets/images/icons/xlsx.png","alt","",3,"click"],[1,"body","overflow-auto"],[1,"responsive_table"],["mat-table","","matSort","",1,"mat-cell","advance-table",3,"dataSource"],["matColumnDef","select"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","status"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","actions"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor",4,"matRowDef","matRowDefColumns"],[3,"length","pageIndex","pageSize","pageSizeOptions"],[3,"change","checked","indeterminate"],[3,"click","change","checked"],["mat-sort-header",""],["mat-cell",""],[1,"mobile-label"],[1,"badge","badge-pill","badge-primary","col-green"],[1,"badge","badge-pill","badge-primary","col-red"],[1,"badge","badge-pill","badge-primary","col-black"],[1,"badge","badge-pill","badge-primary","col-blue"],[1,"pr-0"],["matRipple",""]],template:function(i,s){if(1&i){const o=e.RV6();e.j41(0,"section",2)(1,"div",3)(2,"div",4),e.nrm(3,"app-breadcrumb",5),e.k0s(),e.j41(4,"div",6)(5,"div",7)(6,"div",8)(7,"div",9)(8,"div",10)(9,"ul",11)(10,"li",12)(11,"h2"),e.EFF(12,"Missions"),e.k0s()(),e.j41(13,"li",13)(14,"label",14)(15,"i",15),e.EFF(16,"search"),e.k0s()(),e.nrm(17,"input",16,0),e.k0s()()(),e.j41(19,"div",17)(20,"ul",18)(21,"li",19)(22,"div",20)(23,"button",21),e.bIt("click",function(){return e.eBV(o),e.Njj(s.refresh())}),e.j41(24,"mat-icon",22),e.EFF(25,"refresh"),e.k0s()()()(),e.j41(26,"li",19)(27,"div",23)(28,"button",24),e.bIt("click",function(){return e.eBV(o),e.Njj(s.removeSelectedRows())}),e.j41(29,"mat-icon",22),e.EFF(30,"delete"),e.k0s()()()(),e.j41(31,"li")(32,"div",25)(33,"img",26),e.bIt("click",function(){return e.eBV(o),e.Njj(s.exportExcel())}),e.k0s()()()()()(),e.j41(34,"div",27)(35,"div",28)(36,"table",29),e.qex(37,30),e.DNE(38,L,2,2,"mat-header-cell",31)(39,z,2,1,"mat-cell",32),e.bVm(),e.qex(40,33),e.DNE(41,H,2,0,"mat-header-cell",34)(42,P,2,1,"mat-cell",32),e.bVm(),e.qex(43,35),e.DNE(44,J,2,0,"mat-header-cell",34)(45,Q,2,1,"mat-cell",32),e.bVm(),e.qex(46,36),e.DNE(47,Z,2,0,"mat-header-cell",34)(48,K,2,1,"mat-cell",32),e.bVm(),e.qex(49,37),e.DNE(50,W,2,0,"mat-header-cell",34)(51,ae,7,4,"mat-cell",38),e.bVm(),e.qex(52,39),e.DNE(53,se,2,0,"mat-header-cell",34)(54,ne,3,4,"mat-cell",32),e.bVm(),e.qex(55,40),e.DNE(56,oe,2,0,"mat-header-cell",34)(57,le,3,4,"mat-cell",32),e.bVm(),e.qex(58,41),e.DNE(59,re,1,0,"mat-cell",42),e.bVm(),e.DNE(60,ce,1,0,"mat-header-row",43)(61,me,1,2,"mat-row",44),e.k0s(),e.DNE(62,de,1,0,"mat-spinner"),e.k0s()()()(),e.nrm(63,"mat-paginator",45,1),e.k0s()()()}2&i&&(e.R7$(3),e.Y8G("title","All Missions")("items",e.lJ4(12,w))("active_item","All Missions"),e.R7$(24),e.Y8G("hidden",!s.selection.hasValue()),e.R7$(9),e.Y8G("dataSource",s.dataSource),e.R7$(24),e.Y8G("matHeaderRowDef",s.displayedColumns),e.R7$(),e.Y8G("matRowDefColumns",s.displayedColumns),e.R7$(),e.vxM(62,s.exampleDatabase?-1:62),e.R7$(),e.Y8G("length",s.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",e.lJ4(13,Y)))},dependencies:[I.D,S.uc,S.oV,M.Hl,M.$0,y.m_,y.An,c.tP,c.Zl,c.tL,c.ji,c.cC,c.YV,c.iL,c.KS,c.$R,c.YZ,c.NB,h.NQ,h.B4,h.aE,x.g7,x.So,C.pZ,C.r6,v.D6,v.LG,f.Cn,p.Ou,p.iy,d.vh,d.MD]})}return a})();class pe extends D.qS{get data(){return this._data}set data(n){this._data=n}get filter(){return this.filterChange.value}set filter(n){this.filterChange.next(n)}constructor(n,t,i){super(),this.exampleDatabase=n,this.paginator=t,this._sort=i,this.filterChange=new g.t(""),this._data=[],this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const n=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllMissionse().subscribe(t=>{}),(0,$.h)(...n).pipe((0,F.T)(()=>{this.filteredData=this.exampleDatabase.data?this.exampleDatabase.data.slice().filter(s=>-1!==(s.title+s.description+s.status+s.startDate+s.endDate).toLowerCase().indexOf(this.filter.toLowerCase())):[];const t=this.sortData(this.filteredData.slice());return this.renderedData=t.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(n){return this._sort.active&&""!==this._sort.direction?n.sort((t,i)=>{let s="",o="";switch(this._sort.active){case"id":s=t._id?t._id.toString():void 0,o=i._id?i._id.toString():void 0;break;case"name":[s,o]=[t.title,i.title];break;case"description":[s,o]=[t.description,i.description];break;case"status":[s,o]=[t.status,i.status];break;case"startDate":[s,o]=[t.startDate,i.startDate];break;case"endDate":[s,o]=[t.endDate,i.endDate]}if(void 0!==s&&void 0!==o){const r=isNaN(+s)?s:+s,m=isNaN(+o)?o:+o;return void 0===s||void 0===o?void 0===s?1:-1:(r<m?-1:1)*("asc"===this._sort.direction?1:-1)}return void 0===s?1:-1}):n}}const fe=[{path:"missions",component:he},{path:"**",component:l(2053).X}]}}]);