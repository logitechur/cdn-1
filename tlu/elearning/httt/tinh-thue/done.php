<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <title>Tính thuế thu nhập cá nhân</title>
    <link href='./image/favicon.png' rel='icon' type='image/x-icon' />
    <link rel="stylesheet" href="//cdn.leanhduc.pro.vn/bootstrap/5.1.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="//cdn.leanhduc.pro.vn/font-awesome/pro-5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <meta content='Tính thuế thu nhập cá nhân' name='description' />
    <meta content='https://cdn.leanhduc.pro.vn/tlu/elearning/httt/image/image.jpeg' property='og:image' />
</head>

<body>
    <div class="anhduc-wrap">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h2>Bảng thuế cá nhân</h2>
                    <div class='table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tháng</th>
                                    <th>Thu nhập</th>
                                    <th>Thuế thu nhập</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                for ($i = 1; $i <= 12; $i++) {
                                    echo "<tr>";
                                    echo "<td>$i</td>";
                                    echo "<td>";
                                    if (isset($_POST["thang$i"])) {
                                        echo $_POST["thang$i"];
                                    }
                                    echo "</td>";

                                    echo "<td>";
                                    if (isset($_POST["thang$i"])) {
                                        $a = floatval($_POST["thang$i"]);
                                        $b = floatval($_POST["songuoipt"]);
                                        $arraythuedanop[] = tienthuethang($a, $b);
                                        $arraythuethucte[] = $a;
                                        echo round(tienthuethang($a, $b), 10);
                                    }
                                    echo "</td>";

                                    echo "</tr>";
                                }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h2>Thông tin cá nhân</h2>
                    <div class='table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Năm</th>
                                    <th>Họ và tên</th>
                                    <th>Bảo hiểm xã hội</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><?php if (isset($_POST["year"])) {
                                            echo $_POST["year"];
                                        } ?></td>
                                    <td><?php if (isset($_POST["name"])) {
                                            echo $_POST["name"];
                                        } ?></td>
                                    <td><?php if (isset($_POST["baohiem"])) {
                                            echo $_POST["baohiem"];
                                        } ?></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2>Kết quả</h2>
                    <div class='table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Đã nộp</th>
                                    <th>Thực tế</th>
                                    <th>
                                        <?php
                                        $sumdanop = array_sum($arraythuedanop);
                                        $sumthucte = array_sum($arraythuethucte);
                                        $c = $sumthucte / 12;
                                        $d = floatval($_POST["songuoipt"]);
                                        $sumthuctenop = tienthuethang($c, $d) * 12;
                                        if ($sumdanop > $sumthuctenop) {
                                            echo "Nhận lại";
                                        } else {
                                            echo "Trả thêm";
                                        }
                                        ?>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><?php echo $sumdanop; ?></td>
                                    <td><?php echo $sumthuctenop; ?></td>
                                    <td>
                                        <?php
                                        if ($sumdanop > $sumthuctenop) {
                                            echo $sumdanop - $sumthuctenop;
                                        } else {
                                            echo $sumthuctenop - $sumdanop;
                                        }
                                        ?>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button onclick="window.open('/')" class="btn btn-primary float-end">Tính lại</button>
                </div>
            </div>
        </div>
    </div>
    <hr />
    <div id="footer">
        <a href="/"><i class="fad fa-home"></i> Trang chủ</a>
    </div>
</body>

</html>
<?php
function tienthuethang($tienthunhap, $songuoiphuthuoc)
{
    if ($_POST["baohiem"] === "Yes") {
        if ($_POST["trulaodong"] != NULL) {
            $c = floatval($_POST["trulaodong"]);
            if ($_POST["truphuthuoc"] != NULL) {
                $d = floatval($_POST["truphuthuoc"]);
            } else {
                $d = 4.4;
            }
        } else {
            $c = 11;
            $d = floatval($_POST["truphuthuoc"]);
        }
        $baohiem = 4.42 * 0.08;
        $nguoithuphuoc = $songuoiphuthuoc * $d;
        $thuethunhap = $tienthunhap - $c - $nguoithuphuoc - $baohiem;
        return tinhthue($thuethunhap);
    } else {
        if ($_POST["trulaodong"] != NULL) {
            $c = floatval($_POST["trulaodong"]);
            if ($_POST["truphuthuoc"] != NULL) {
                $d = floatval($_POST["truphuthuoc"]);
            } else {
                $d = 4.4;
            }
        } else {
            $c = 11;
            $d = floatval($_POST["truphuthuoc"]);
        }
        $nguoithuphuoc = $songuoiphuthuoc * $d;
        $thuethunhap = $tienthunhap - $c - $nguoithuphuoc;
        return tinhthue($thuethunhap);
    }
}
function tinhthue($thuethunhap)
{
    if ($thuethunhap < 0) {
        return $thuethunhap = 0.0;
    }

    if ($thuethunhap <= 5) {
        return $thuethunhap = $thuethunhap * 0.05;
    }

    if ($thuethunhap > 5 & $thuethunhap <= 10) {
        return $thuethunhap = $thuethunhap * 0.1 - 0.25;
    }

    if ($thuethunhap > 10 & $thuethunhap <= 18) {
        return $thuethunhap = $thuethunhap * 0.15 - 0.75;
    }

    if ($thuethunhap > 18 & $thuethunhap <= 32) {
        return $thuethunhap = $thuethunhap * 0.2 - 1.65;
    }

    if ($thuethunhap > 32 & $thuethunhap <= 52) {
        return $thuethunhap = $thuethunhap * 0.25 - 3.25;
    }

    if ($thuethunhap > 52 & $thuethunhap <= 80) {
        return $thuethunhap = $thuethunhap * 0.30 - 5.85;
    }

    if ($thuethunhap > 80) {
        return $thuethunhap = $thuethunhap * 0.35 - 9.85;
    }
}
// Kết nối datebase
$link = mysqli_connect("localhost", "username", "password", "thongtin");
// Kiểm tra kết nối
if ($link === false) {
    die("ERROR: Không thể kết nối. " . mysqli_connect_error());
}
// Làm sạch dữ liệu đầu vào để đảm bảo an toàn
$YEAR = mysqli_real_escape_string($link, $_POST['year']);
$NAME = mysqli_real_escape_string($link, $_POST['name']);
$BHXH = mysqli_real_escape_string($link, $_POST['baohiem']);
$MTLD = mysqli_real_escape_string($link, $_POST['trulaodong']);
$MTPT = mysqli_real_escape_string($link, $_POST['truphuthuoc']);
$SNPT = mysqli_real_escape_string($link, $_POST['songuoipt']);
$str1 = implode(", ", $arraythuethucte);
$TNCN = mysqli_real_escape_string($link, $str1);
$str2 = implode(", ", $arraythuedanop);
$TTN = mysqli_real_escape_string($link, $str2);
$TTDN = mysqli_real_escape_string($link, $sumdanop);
$TTTT = mysqli_real_escape_string($link, $sumthuctenop);
// Cố gắng thực thi câu lệnh insert
$sql = "INSERT INTO thongtin (YEAR, NAME, BHXH, MTLD, MTPT, SNPT, TNCN, TTN, TTDN, TTTT) VALUES ('$YEAR', '$NAME', '$BHXH', '$MTLD', '$MTPT', '$SNPT', '$TNCN', '$TTN', '$TTDN', '$TTTT')";
if (mysqli_query($link, $sql)) {
} else {
    echo "ERROR: Không thể thực thi $sql. " . mysqli_error($link);
}
// Close connection
mysqli_close($link);
?>