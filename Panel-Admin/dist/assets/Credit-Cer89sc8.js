import{r as l,j as e,B as C,k as s,F as b,I as g,S as f,c as x}from"./index-JOrpMNhF.js";import{d as O,D as j,a as w,b as V,c as N,e as E}from"./DataGrid-DR8JU-SN.js";import{M as m,a as o}from"./axios-ChMsnGDK.js";import"./Checkbox-DNkkIThj.js";const z=[{field:"Nom",headerName:"Nom & Prenom",width:250,editable:!0},{field:"ArticleVendu",headerName:"Article Vendu",width:200,editable:!0},{field:"Qte",headerName:"Qte",width:200,editable:!0},{field:"PrixAchat",headerName:"Prix Achat",type:"number",width:150,editable:!0},{field:"PrixVente",headerName:"Prix Vente",type:"number",width:150,editable:!0},{field:"Credit",headerName:"Rest",type:"number",width:150,editable:!0},{field:"Avance",headerName:"Avance",type:"number",width:150,editable:!0},{field:"Benefice",headerName:"Benefice",type:"number",width:150,editable:!0},{field:"created_at",headerName:"Date de Vente",type:"number",width:200,editable:!0}];function K(){const[y,D]=l.useState([]),[P,d]=l.useState(!1),[k,u]=l.useState(!1),[i,S]=l.useState({Nom:"",ArticleVendu:"",Qte:"",Avance:"",PrixVente:"",PrixAchat:""}),[v,A]=l.useState({ID_Credit:"",Avance:""}),[I,h]=l.useState([]),[W,_]=l.useState(""),p=async()=>{try{const a=(await o.get("http://127.0.0.1:4000/Credit/selectAllCredit")).data.map((n,r)=>({...n,id:n.ID_Credit||`id-${r}`}));D(a)}catch(t){console.log(t)}},L=async t=>{try{let a;switch(t){case"Divers":a=await o.get("http://127.0.0.1:4000/Divers/selectAllDivers"),h(a.data.map(n=>({label:n.Article,value:n.Article})));break;case"Vapes":a=await o.get("http://127.0.0.1:4000/VapeController/selectAllVapes"),h(a.data.map(n=>({label:n.NomVape,value:n.NomVape})));break;case"Liquides":a=await o.get("http://127.0.0.1:4000/StockController/selectAllLiquide"),h(a.data.map(n=>({label:n.NomLiquide,value:n.NomLiquide})));break;default:h([])}}catch(a){console.log(a)}};l.useEffect(()=>{p()},[]);const M=t=>{const{value:a}=t.target;_(a),L(a)},c=t=>{const{name:a,value:n}=t.target;S(r=>({...r,[a]:n}))},Q=t=>{const{name:a,value:n}=t.target;A(r=>({...r,[a]:n}))},q=async()=>{try{const{Nom:t,ArticleVendu:a,Qte:n,Avance:r,PrixVente:T,PrixAchat:F}=i;await o.post("http://127.0.0.1:4000/Credit/insertCredit",{Nom:t,ArticleVendu:a,Qte:n,Avance:r,PrixVente:T,PrixAchat:F}),d(!1),p()}catch(t){console.log(t)}},R=async()=>{try{const{ID_Credit:t,Avance:a}=v;await o.post("http://127.0.0.1:4000/Credit/insertAvance",{ID_Credit:t,Avance:a}),u(!1),p()}catch(t){console.log(t)}},B=t=>{A({ID_Credit:t.row.ID_Credit,Avance:""}),u(!0)};return e.jsxs(C,{sx:{height:700,width:"100%",background:"white",marginTop:"3%"},children:[e.jsx(C,{children:e.jsx(O,{sx:{cursor:"pointer",marginLeft:"3%",marginTop:"2%"},onClick:()=>d(!0)})}),e.jsxs(j,{open:P,onClose:()=>d(!1),children:[e.jsx(w,{children:"Add New Credit"}),e.jsxs(V,{children:[e.jsx(s,{label:"Nom & Prenom",name:"Nom",value:i.Nom,onChange:c,variant:"outlined",fullWidth:!0,sx:{mb:1}}),e.jsxs(b,{fullWidth:!0,variant:"outlined",sx:{mb:1},children:[e.jsx(g,{children:"Category"}),e.jsxs(f,{label:"Category",value:W,onChange:M,children:[e.jsx(m,{value:"Divers",children:"Divers"}),e.jsx(m,{value:"Vapes",children:"Vapes"}),e.jsx(m,{value:"Liquides",children:"Liquides"})]})]}),e.jsxs(b,{fullWidth:!0,variant:"outlined",sx:{mb:1},children:[e.jsx(g,{children:"Article Vendu"}),e.jsx(f,{label:"Article Vendu",name:"ArticleVendu",value:i.ArticleVendu,onChange:c,children:I.map((t,a)=>e.jsx(m,{value:t.value,children:t.label},a))})]}),e.jsx(s,{label:"Qte",name:"Qte",value:i.Qte,onChange:c,variant:"outlined",fullWidth:!0,sx:{mb:1}}),e.jsx(s,{label:"Avance",name:"Avance",value:i.Avance,onChange:c,variant:"outlined",fullWidth:!0,sx:{mb:1}}),e.jsx(s,{label:"Prix Achat",name:"PrixAchat",value:i.PrixAchat,onChange:c,variant:"outlined",fullWidth:!0,sx:{mb:1}}),e.jsx(s,{label:"Prix Vente",name:"PrixVente",value:i.PrixVente,onChange:c,variant:"outlined",fullWidth:!0,sx:{mb:1}})]}),e.jsxs(N,{children:[e.jsx(x,{onClick:()=>d(!1),children:"Cancel"}),e.jsx(x,{onClick:q,variant:"contained",color:"primary",children:"Add"})]})]}),e.jsxs(j,{open:k,onClose:()=>u(!1),children:[e.jsx(w,{children:"Insert Avance"}),e.jsxs(V,{children:[e.jsx(s,{label:"ID Credit",name:"ID_Credit",value:v.ID_Credit,variant:"outlined",fullWidth:!0,sx:{mb:1}}),e.jsx(s,{label:"Avance",name:"Avance",value:v.Avance,onChange:Q,variant:"outlined",fullWidth:!0,sx:{mb:1}})]}),e.jsxs(N,{children:[e.jsx(x,{onClick:()=>u(!1),children:"Cancel"}),e.jsx(x,{onClick:R,variant:"contained",color:"primary",children:"Add"})]})]}),e.jsx(E,{rows:y,columns:z,initialState:{pagination:{paginationModel:{pageSize:10}}},pageSizeOptions:[5],checkboxSelection:!0,disableRowSelectionOnClick:!0,onRowClick:B,sx:{marginTop:"2%"}})]})}export{K as default};
