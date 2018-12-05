window.csdn.anonymousUserLimit.judgment = function(){return true}
var targetBtn = document.getElementById("btn-readmore");
if(targetBtn)
{
    targetBtn.click();
}
function killAdblock(selector){
    var target = document.querySelector(selector);
    if(target)
    {
        target.remove();
    }
}
//2018年12月5日出现强制要求加入AdBlock白名单,干掉
(function killAdblockWarning(){
    var it = window.setInterval(";");
    for(var i=0;i<it;i++)
    {
        window.clearInterval(i);
    }
    killAdblock(".check-adblock-bg");
    killAdblock(".adblock");
})()