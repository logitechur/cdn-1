<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <title>Tính thuế thu nhập cá nhân</title>
    <link href='./image/favicon.png' rel='icon' type='image/x-icon' />
    <link rel="stylesheet" href="//cdn.leanhduc.pro.vn/bootstrap/5.1.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <meta content='Tính thuế thu nhập cá nhân' name='description' />
    <meta content='https://cdn.leanhduc.pro.vn/tlu/elearning/httt/image/image.jpeg' property='og:image' />
</head>

<body>

    <div class="anhduc-wrap">
        <div class="container">
            <form action="done.php" method="post">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Thông tin cá nhân</h2>
                        <div class="form-group">
                            <lable>Năm:</lable>
                            <p><input class="form-control" type="text" name="year" value="" placeholder="2021"></p>
                        </div>
                        <div class="form-group">
                            <lable>Họ và tên:</lable>
                            <p><input class="form-control" type="text" name="name" value="" placeholder="Nguyễn Văn A" /></p>
                        </div>
                        <div class="form-group">
                            <lable>Bảo hiểm xã hội:</lable>
                            <p>
                                <input type="radio" name="baohiem" value="Yes" /> Có
                                <input type="radio" name="baohiem" value="No" /> Không
                            </p>
                        </div>
                        <div class="form-group">
                            <lable>Mức miễn trừ với người lao động:</lable>
                            <p><input class="form-control" type="text" name="trulaodong" value="" placeholder="11" /></p>
                        </div>
                        <div class="form-group">
                            <lable>Mức miễn trừ với người phụ thuộc:</lable>
                            <p><input class="form-control" type="text" name="truphuthuoc" value="" placeholder="4.4" /></p>
                        </div>
                        <div class="form-group">
                            <lable>Số người phụ thuộc:</lable>
                            <p><input class="form-control" type="text" name="songuoipt" value="" placeholder="0" /></p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h2>Thu nhập cá nhân</h2>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <lable>Tháng 1:</lable>
                                    <p><input class="form-control" type="text" name="thang1" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 2:</lable>
                                    <p><input class="form-control" type="text" name="thang2" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 3:</lable>
                                    <p><input class="form-control" type="text" name="thang3" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 4:</lable>
                                    <p><input class="form-control" type="text" name="thang4" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 5:</lable>
                                    <p><input class="form-control" type="text" name="thang5" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 6:</lable>
                                    <p><input class="form-control" type="text" name="thang6" value=""></p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <lable>Tháng 7:</lable>
                                    <p><input class="form-control" type="text" name="thang7" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 8:</lable>
                                    <p><input class="form-control" type="text" name="thang8" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 9:</lable>
                                    <p><input class="form-control" type="text" name="thang9" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 10:</lable>
                                    <p><input class="form-control" type="text" name="thang10" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 11:</lable>
                                    <p><input class="form-control" type="text" name="thang11" value=""></p>
                                </div>
                                <div class="form-group">
                                    <lable>Tháng 12:</lable>
                                    <p><input class="form-control" type="text" name="thang12" value=""></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary float-end">Xác nhận</button>
            </form>
        </div>
    </div>
</body>

</html>