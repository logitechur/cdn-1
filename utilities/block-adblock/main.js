! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"> <div class="header"> <h2 style="color:#fff;">Đã phát hiện Ad Blocker</h2> </div> <div class="isi"> <p>Xin vui lòng hỗ trợ chúng tôi bằng cách tắt trình chặn quảng cáo của bạn!</p> <div class="tombol"><button class="1 active">Adblock</button><button class="2">Adblock Plus</button></div> <div class="caranya"> <div class="1 active"> <ol> <li>Click on the AdBlock icon in your browser.<br>Nhấp vào biểu tượng AdBlock trong trình duyệt của bạn.<br><img src=" https://1.bp.blogspot.com/-arF80cUN1dY/YLzuC3slp9I/AAAAAAAAYzc/hEqegue0VUMevu8o_SfqHPz7BuNuaQWqQCLcBGAsYHQ/s64/block-1.png" alt="Adblock"></li> <li>Choose, Don\'t run on pages on this domain.<br>Chọn, Không chạy trên các trang trên miền này.<br><img src=" https://1.bp.blogspot.com/-n8zrLbnsMCE/YLzuC5xrKLI/AAAAAAAAYzk/Z09gE9N_ds8W-wioY-EEMecPF2prf21DACLcBGAsYHQ/s295/block-2.jpg" alt="Adblock" width="300px"></li> <li>The browser icon should have turned grey.<br>Biểu tượng trình duyệt phải chuyển sang màu xám.<br><img src=" https://1.bp.blogspot.com/-rT1Vi2bTeSk/YLzuC7lVGLI/AAAAAAAAYzg/IAI8K-1Y9GEZ958GP5_gLYA--dUcYz26wCLcBGAsYHQ/s64/block-3.png" alt="Adblock"></li> <li>Refresh the page if it didn\'t refresh automatically. Thanks!<br>Làm mới trang nếu nó không tự động làm mới. Cảm ơn!</li> </ol> </div> <div class="2"> <ol> <li>Click on the AdBlock Plus icon in your browser.<br>Nhấp vào biểu tượng AdBlock Plus trong trình duyệt của bạn.<br><img src=" https://1.bp.blogspot.com/-pf8oRbtDbwE/YLzuD9a698I/AAAAAAAAYzo/XHJBPNALKuk42jJUJxxwaih5qGjaL8spgCLcBGAsYHQ/s0/block-4.png" alt="Adblock"></li> <li>Click the "This Website" button.<br>Nhấp vào nút "Trang web này".<br><img src=" https://1.bp.blogspot.com/-w48ELralR7Y/YLzuEJpyGgI/AAAAAAAAYzw/91rIdKHglZo1qQob8c48Bm7X4LF0fWYsgCLcBGAsYHQ/s605/off-ads-plus.jpg" alt="Adblock" width="250px"></li> <li>Click "Refresh"<br>Nhấp vào "Làm mới"<br><img src=" https://1.bp.blogspot.com/-nlMOYeDENsY/YLzuEEzyKvI/AAAAAAAAYzs/bQEkz1Z_2G8rwTqxYidSK_WgxzTGxhRLgCLcBGAsYHQ/s516/off-ads-plus-1.jpg" alt="Adblock" width="250px"></li> </ol> </div> </div> </div> </div>';

        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".caranya > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";

    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
