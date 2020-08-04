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
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 8,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 9,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 10,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 11,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 12,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 13,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 14,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 15,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 16,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 17,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 18,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 19,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 20,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 21,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 22,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 23,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 24,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 25,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 26,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 27,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 28,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 29,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 30,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 31,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 32,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 33,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 34,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 35,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 36,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 37,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 38,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 39,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 40,
                "name": "",
                "duration": "",
                "file": ""
            }, {
                "track": 41,
                "name": "",
                "duration": "",
                "file": ""
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
