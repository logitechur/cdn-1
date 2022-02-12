$(".loader").delay(1000).fadeOut("fast");
function showthongbao(str) {
    $("#thongbaostr").html(str);
    $("#thongbao").modal("show");
}
function openlink(url) {
    window.open(url, "_blank").focus();
}

function show_alert(str) {
    $("#alert").css("display", "inline");
    $("#alert").addClass("animate__backInLeft");
    setTimeout(() => {
        $("#alert").removeClass("animate__backInLeft");
        $("#alert").addClass("animate__backOutLeft");
    }, 3000);
    setTimeout(() => {
        $("#alert").removeClass("animate__backOutLeft");
        $("#alert").removeClass("animate__backInLeft");
        $("#alert").css("display", "none");
    }, 3000);
}
function copytext(str) {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    showthongbao("Đã copy !");
}
