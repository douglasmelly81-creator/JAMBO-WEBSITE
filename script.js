var WA_NUMBER="2547XXXXXXXX"; // replace with your number, country code first, no + or spaces (e.g. 254712345678)
function wa(t){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(t)}
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa(a.getAttribute("data-wa"))});
var sp=new URLSearchParams(location.search).get("service"),sv=document.getElementById("service");if(sp&&sv)sv.value=sp;
document.querySelectorAll("form[data-wa-form]").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();
var t="*"+f.getAttribute("data-wa-form")+"*\n";f.querySelectorAll("input,select,textarea").forEach(function(i){if(i.value)t+=i.name+": "+i.value+"\n"});
window.open(wa(t),"_blank")})});