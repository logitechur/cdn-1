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
                "name": "Bigcityboi - Binz, Touliver ",
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
                "name": "Buồn Thì Cứ Khóc Đi"
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
