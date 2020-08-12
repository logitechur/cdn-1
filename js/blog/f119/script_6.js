var counter = 0;
var interval_set = 0;
var anbus = ["leanhduc.pro.vn"]

function changeTitle() {
    var d = new Date();
    var ts = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "_" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var msg = "" + anbus[counter % anbus.length] + "/@/" + ts;
    history.pushState("", "", "/")
    history.pushState("", "", msg)
    counter++;
    if (interval_set == 0) {
        interval_set = 1
        setInterval(function() {
            changeTitle()
        }, 1000);
    }

}
changeTitle();
