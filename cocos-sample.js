cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
    },

    // use this for initialization
    onLoad: function () {
        window["GD_OPTIONS"] = {
            "gameId": "75c8d40f998d4099832a973d533105cc",
            "loader": { enabled: true },
            "onEvent": function (event) {
                switch (event.name) {
                    case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio
                        break;
                    case "SDK_GAME_PAUSE":
                        // pause game logic / mute audio
                        break;
                    case "SDK_GDPR_TRACKING":
                        // this event is triggered when your user doesn't want to be tracked
                        break;
                    case "SDK_GDPR_TARGETING":
                        // this event is triggered when your user doesn't want personalised targeting of ads and such
                        break;
                }
            },
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://html5.api.gamedistribution.com/main.min.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'gamedistribution-jssdk'));
    },

    GDShowAd: function () {
        if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
            gdsdk.showAd();
        }
    },
    GDShowRewardedAd: function () {
        if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
            gdsdk.showAd('rewarded');
        }
    },
    GDShowDisplayAd: function () {
        if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
            gdsdk
                .showAd(window.gdsdk.AdType.Display, { containerId: "CONTAINER_ID_TO_PUT_AD_IN" })
                .then(() => console.info('showAd(window.gdsdk.AdType.Display) resolved.'))
                .catch(error => console.info(error));
        }
    },

    // called every frame
    update: function (dt) {
    },
});
