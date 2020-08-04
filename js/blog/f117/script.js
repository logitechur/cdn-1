// Copyright © 2020 Lê Anh Đức. All rights reserved!

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/leanhduc-mp3/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "1 Phút - Andiez",
                "duration": "6:16",
                "file": "1-Phut-Andiez"
            }, {
                "track": 2,
                "name": "Ai Khóc Nỗi Đau Này - Bảo Anh",
                "duration": "3:39",
                "file": "Ai-Khoc-Noi-Dau-Nay-Bao-Anh"
            }, {
                "track": 3,
                "name": "All Of Me - John Legend",
                "duration": "4:29",
                "file": "All-Of-Me-John-Legend"
            }, {
                "track": 4,
                "name": "Ánh Nắng Của Anh - Đức Phúc",
                "duration": "4:24",
                "file": "Anh-Nang-Cua-Anh-Duc-Phuc"
            }, {
                "track": 5,
                "name": "Anh Thanh Niên - HuyR",
                "duration": "3:51",
                "file": "Anh-Thanh-Nien-HuyR"
            }, {
                "track": 6,
                "name": "Animals - Maroon 5",
                "duration": "3:49",
                "file": "Animals-Maroon-5"
            }, {
                "track": 7,
                "name": "As Long As You Love Me - Justin Bieber",
                "duration": "3:49",
                "file": "As-Long-As-You-Love-Me-Justin-Bieber"
            }, {
                "track": 8,
                "name": "Bạc Phận - Jack",
                "duration": "4:09",
                "file": "Bac-Phan-Jack-K-ICM"
            }, {
                "track": 9,
                "name": "Bài Này Chill Phết - Đen",
                "duration": "4:36",
                "file": "Bai-Nay-Chill-Phet-Den-Min"
            }, {
                "track": 10,
                "name": "Bánh Mì Không - Đạt G, DuUyen",
                "duration": "4:05",
                "file": "Banh-Mi-Khong-Dat-G-Du-Uyen"
            }, {
                "track": 11,
                "name": "Believer - Imagine Dragons",
                "duration": "3:23",
                "file": "Believer-Imagine-Dragons"
            }, {
                "track": 12,
                "name": "Bigcityboi - Binz, Touliver",
                "duration": "3:21",
                "file": "Bigcityboi-Binz-Touliver"
            }, {
                "track": 13,
                "name": "Buông Đôi Tay Nhau Ra - Sơn Tùng M-TP",
                "duration": "3:45",
                "file": "Buong-Doi-Tay-Nhau-Ra-Son-Tung-M-TP"
            }, {
                "track": 14,
                "name": "Buồn Làm Chi Em Ơi - Hoài Lâm",
                "duration": "5:13",
                "file": "Buon-Lam-Chi-Em-Oi-AcousticVersion1-HoaiLam"
            }, {
                "track": 15,
                "name": "Buồn Thì Cứ Khóc Đi",
                "duration": "3:42",
                "file": "Buon-Thi-Cu-Khoc-Di-Lynk-Lee"
            }, {
                "track": 16,
                "name": "Careless Whisper - George Michael",
                "duration": "5:05",
                "file": "Careless-Whisper-George-Michael"
            }, {
                "track": 17,
                "name": "Chạm Khẽ Tim Anh Một Chút Thôi - Noo Phước Thịnh",
                "duration": "5:46",
                "file": "Cham-Khe-Tim-Anh-Mot-Chut-Thoi-Noo-Phuoc-Thinh"
            }, {
                "track": 18,
                "name": "Chân Ái - Orange, Khói",
                "duration": "4:22",
                "file": "Chan-Ai-Orange-Khoi"
            }, {
                "track": 19,
                "name": "Cho Anh Say",
                "duration": "5:07",
                "file": "Cho-Anh-Say-Phan-Duy-Anh-ACV"
            }, {
                "track": 20,
                "name": "Cho Em Gần Anh Thêm Một Chút Nữa - Hương Tràm",
                "duration": "5:14",
                "file": "Cho-Em-Gan-Anh-Them-Chut-Nua-Huong-Tra"
            }, {
                "track": 21,
                "name": "Chúng Ta Không Thuộc Về Nhau - Sơn Tùng M-TP",
                "duration": "3:53",
                "file": "Chung-Ta-Khong-Thuoc-Ve-Nhau-Son-Tung"
            }, {
                "track": 22,
                "name": "Có Ai Thương Em Như Anh - Tóc Tiên",
                "duration": "3:51",
                "file": "Co-Ai-Thuong-Em-Nhu-Anh-Catena-Toc-Tien"
            }, {
                "track": 23,
                "name": "Có Chắc Yêu Là Đây - Sơn Tùng M-TP",
                "duration": "3:22",
                "file": "Co-Chac-Yeu-La-Day-M-TP"
            }, {
                "track": 24,
                "name": "Có Chàng Trai Viết Lên Cây - Phan Mạnh Quỳnh",
                "duration": "5:09",
                "file": "Co-Chang-Trai-Viet-Len-Cay-Phan-Manh-Quynh"
            }, {
                "track": 25,
                "name": "Cơn Mưa Ngang Qua - Sơn Tùng M-TP",
                "duration": "3:53",
                "file": "Con-Mua-Ngang-Qua-Son-Tung-M-TP"
            }, {
                "track": 26,
                "name": "Cô Thắm Không Về - Phát Hồ, Jokes Bii, Thiện",
                "duration": "4:05",
                "file": "Co-Tham-Khong-Ve-Phat-Ho-Jokes-Bii-T"
            }, {
                "track": 27,
                "name": "Cưới Nhau Đi - Bùi Anh Tuấn, Hiền Hồ",
                "duration": "4:21",
                "file": "Cuoi-Nhau-Di-Yes-I-Do-Bui-Anh-Tuan"
            }, {
                "track": 28,
                "name": "Cứ Thế Rời Xa - Yến Tatto, Great",
                "duration": "3:53",
                "file": "Cu-The-Roi-Xa-Yen-Tatoo-Great"
            }, {
                "track": 29,
                "name": "Demons - Imagine Dragons",
                "duration": "2:57",
                "file": "Demons-Imagine-Dragons"
            }, {
                "track": 30,
                "name": "Đợi Người - Hori Slart",
                "duration": "3:08",
                "file": "Doi-Nguoi-Hori-Slart"
            }, {
                "track": 31,
                "name": "Đừng Quên Tên Anh - Hoa Vinh",
                "duration": "5:47",
                "file": "Dung-Quen-Ten-Anh-Hoa-Vinh"
            }, {
                "track": 32,
                "name": "Đừng Xin Lỗi Nữa - Erik, Min",
                "duration": "5:51",
                "file": "Dung-Xin-Loi-Nua-Erik-Min"
            }, {
                "track": 33,
                "name": "Duyên Mình Lỡ - Hương Tràm",
                "duration": "5:27",
                "file": "Duyen-Minh-Lo-Huong-Tram"
            }, {
                "track": 34,
                "name": "Em Bỏ Hút Thuốc Chưa - Bích Phương",
                "duration": "3:36",
                "file": "Em-Bo-Hut-Thuoc-Chua-Bich-Phuong"
            }, {
                "track": 35,
                "name": "Em Có Nghe - Kha",
                "duration": "4:15",
                "file": "Em-Co-Nghe-Kha"
            }, {
                "track": 36,
                "name": "Em Của Ngày Hôm Qua - Sơn Tùng M-TP",
                "duration": "3:52",
                "file": "Em-Cua-Ngay-Hom-Qua-Son-Tung-M-TP"
            }, {
                "track": 37,
                "name": "Em Gì Ơi - Jack",
                "duration": "4:06",
                "file": "Em-Gi-Oi-Jack-K-ICM"
            }, {
                "track": 38,
                "name": "Em Không Sai Chúng Ta Sai - Erik",
                "duration": "4:51",
                "file": "Em-Khong-Sai-Chung-Ta-Sai-Erik"
            }, {
                "track": 39,
                "name": "Gác Lại Âu Lo - Da LAB, Miu Lê",
                "duration": "4:42",
                "file": "Gac-Lai-Au-Lo-Da-LAB-Miu-Le"
            }, {
                "track": 40,
                "name": "Girls Like You - Maroon 5, Cardi B",
                "duration": "3:55",
                "file": "Girls-Like-You-Maroon-5-Cardi-B"
            }, {
                "track": 41,
                "name": "Hoa Nở Không Màu - Hoài Lâm",
                "duration": "5:28",
                "file": "Hoa-No-Khong-Mau-Hoai-Lam"
            }, {
                "track": 42,
                "name": "Hơn Cả Yêu - Đức Phúc",
                "duration": "4:16",
                "file": "Hon-Ca-Yeu-Duc-Phuc"
            }, {
                "track": 43,
                "name": "How Long - Charlie Puth",
                "duration": "3:20",
                "file": "How-Long-Charlie-Puth"
            }, {
                "track": 44,
                "name": "Khác Biệt To Lớn - Trịnh Thăng Bình, Liz Kim",
                "duration": "4:00",
                "file": "Khac-Biet-To-Lon-Trinh-Thang-Binh"
            }, {
                "track": 45,
                "name": "Khó Vẽ Nụ Cười - Đạt G, DuUyen",
                "duration": "5:32",
                "file": "Kho-Ve-Nu-Cuoi-Dat-G-Du-Uyen"
            }, {
                "track": 46,
                "name": "Lạ Lùng - Vũ",
                "duration": "4:21",
                "file": "La-Lung-Vu"
            }, {
                "track": 47,
                "name": "Love Yourself - Justin Bieber",
                "duration": "3:53",
                "file": "Love-Yourself-Justin-Bieber"
            }, {
                "track": 48,
                "name": "Một Cú Lừa - Bích Phương",
                "duration": "3:28",
                "file": "Mot-Cu-Lua-Bich-Phuong"
            }, {
                "track": 49,
                "name": "Một Nhà - Da Lab",
                "duration": "3:05",
                "file": "Mot-Nha-Da-Lab"
            }, {
                "track": 50,
                "name": "My Love - Westlife",
                "duration": "3:52",
                "file": "My-Love-Westlife"
            }, {
                "track": 51,
                "name": "Nến Và Hoa - Rhymastic",
                "duration": "2:46",
                "file": "Nen-Va-Hoa-Rhymastic"
            }, {
                "track": 52,
                "name": "Người Hay Quên Em Đi - Mỹ Tâm",
                "duration": "3:52",
                "file": "Nguoi-Hay-Quen-Em-Di-My-Tam"
            }, {
                "track": 53,
                "name": "Như Ngày Hôm Qua - Sơn Tùng M-TP",
                "duration": "3:41",
                "file": "Nhu-Ngay-Hom-Qua-Son-Tung-M-TP"
            }, {
                "track": 54,
                "name": "Như Những Phút Ban Đầu - Hoài Lâm",
                "duration": "5:34",
                "file": "Nhu-Nhung-Phut-Ban-Dau-Hoai-Lam"
            }, {
                "track": 55,
                "name": "Nơi Mình Dừng Chân - Mỹ Tâm",
                "duration": "4:02",
                "file": "Noi-Minh-Dung-Chan-My-Tam"
            }, {
                "track": 56,
                "name": "Nơi Tình Yêu Bắt Đầu - Bùi Anh Tuấn",
                "duration": "4:36",
                "file": "Noi-Tinh-Yeu-Bat-Dau-Bui-Anh-Tuan"
            }, {
                "track": 57,
                "name": "Nước Mắt Em Lau Bằng Tình Yêu Mới - Da LAB, Tóc Tiên",
                "duration": "4:45",
                "file": "Nuoc-Mat-Em-Lau-Bang-Tinh-Yeu-Moi-Da-Lab"
            }, {
                "track": 58,
                "name": "Ok - Binz",
                "duration": "2:34",
                "file": "Ok-Binz"
            }, {
                "track": 59,
                "name": "Sai Người Sai Thời Điểm - Thanh Hưng",
                "duration": "6:07",
                "file": "Sai-Nguoi-Sai-Thoi-Diem-Thanh-Hung"
            }, {
                "track": 60,
                "name": "Sao Anh Chưa Về Nhà - AMee, Ricky Star",
                "duration": "4:07",
                "file": "Sao-Anh-Chua-Ve-Nha-AMEE-Ricky-Star"
            }, {
                "track": 61,
                "name": "Sau Tất Cả - Erik",
                "duration": "3:54",
                "file": "Sau-Tat-Ca-Erik"
            }, {
                "track": 62,
                "name": "So Far - Binz",
                "duration": "3:24",
                "file": "So-Far-Binz"
            }, {
                "track": 63,
                "name": "Someone Like You - Adele",
                "duration": "4:47",
                "file": "Someone-Like-You-Adele"
            }, {
                "track": 64,
                "name": "Sợ Rằng Em Biết Anh Còn Yêu Em - Juun Đăng Dũng",
                "duration": "5:22",
                "file": "So-Rang-Em-Biet-Anh-Con-Yeu-Em-Juun-Dang-Dung"
            }, {
                "track": 65,
                "name": "Take Me To Your Heart - Michael Learns To Rock",
                "duration": "3:58",
                "file": "Take-Me-To-Your-Heart-Michael-Learns-T"
            }, {
                "track": 66,
                "name": "Tạm Biệt Nhé - Lynk Lee, Phuc Bang",
                "duration": "4:47",
                "file": "Tam-Biet-Nhe-Lynk-Lee-Phuc-Bang"
            }, {
                "track": 67,
                "name": "Thanh Xuân Của Chúng Ta - Bảo Anh, Bùi Anh Tuấn",
                "duration": "3:16",
                "file": "Thanh-Xuan-Cua-Chung-Ta-Bao-Anh-Bui-Anh-Tuan"
            }, {
                "track": 68,
                "name": "Thanh Xuân - Da Lab",
                "duration": "3:40",
                "file": "Thanh-Xuan-Da-LAB"
            }, {
                "track": 69,
                "name": "That Girl - Olly Murs",
                "duration": "2:56",
                "file": "That-Girl-Olly-Murs"
            }, {
                "track": 70,
                "name": "The 1 - Taylor Swift",
                "duration": "3:30",
                "file": "The-1-Taylor-Swift"
            }, {
                "track": 71,
                "name": "Thinking Out Loud - Ed Sheeran",
                "duration": "4:41",
                "file": "Thinking-Out-Loud-Ed-Sheeran"
            }, {
                "track": 72,
                "name": "Thuận Theo Ý Trời - Bùi Anh Tuấn",
                "duration": "3:57",
                "file": "Thuan-Theo-Y-Troi-Bui-Anh-Tuan"
            }, {
                "track": 73,
                "name": "Thunder - Imagine Dragons",
                "duration": "3:07",
                "file": "Thunder-Imagine-Dragons"
            }, {
                "track": 74,
                "name": "Tìm Lại Bầu Trời - Tuấn Hưng",
                "duration": "5:28",
                "file": "Tim-Lai-Bau-Troi-Tuan-Hung"
            }, {
                "track": 75,
                "name": "Tình Nhân Ơi - Orange, Binz, Superbrothe",
                "duration": "4:14",
                "file": "Tinh-Nhan-Oi-Orange-Binz-Superbrothe"
            }, {
                "track": 76,
                "name": "Tình Sầu Thiên Thu Muôn Lối - Doãn Hiếu",
                "duration": "4:23",
                "file": "Tinh-Sau-Thien-Thu-Muon-Loi-Doan-Hieu"
            }, {
                "track": 77,
                "name": "Từ Chối Nhẹ Nhàng Thôi - Bích Phương, Phúc Du",
                "duration": "4:06",
                "file": "Tu-Choi-Nhe-Nhang-Thoi-Bich-Phuong"
            }, {
                "track": 78,
                "name": "Why Not Me - Enrique Iglesias",
                "duration": "3:39",
                "file": "Why-Not-Me-Enrique-Iglesias"
            }, {
                "track": 79,
                "name": "Worth It - Fifth Harmony, Kid Ink",
                "duration": "3:44",
                "file": "Worth-It-Fifth-Harmony-Kid-Ink"
            }, {
                "track": 80,
                "name": "Yêu Đơn Phương - OnlyC, Karik",
                "duration": "4:32",
                "file": "Ye-Don-Phuong-OnlyC-Karik"
            }, {
                "track": 81,
                "name": "Yêu 5 - Rhymastic",
                "duration": "4:00",
                "file": "Yeu-5-Rhymastic"
            }, {
                "track": 82,
                "name": "Yêu Là Tha Thu - OnlyC",
                "duration": "4:33",
                "file": "Yeu-La-Tha-Thu-OnlyC"
            }, {
                "track": 83,
                "name": "Yêu - Min",
                "duration": "3:56",
                "file": "Yeu-Min"
            }, {
                "track": 84,
                "name": "Yêu Thì Yêu Không Yêu Thì Yêu - AMee",
                "duration": "3:10",
                "file": "Yeu-Thi-Yeu-Khong-Yeu-Thi-Yeu-AMEE"
            }, {
                "track": 85,
                "name": "Yêu Từ Đâu Mà Ra - Lil Zpoet",
                "duration": "4:02",
                "file": "Yeu-Tu-Da-Ma-Ra-Lil-Zpoet"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
