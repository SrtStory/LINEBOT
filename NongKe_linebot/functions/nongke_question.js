function getQuestion() {
    return {
        type: "bubble",
        header: {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "text",
                    text: "Most Questions",
                    color: "#AAAAAA"
                }
            ]
        },
        body: {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "box",
                    layout: "vertical",
                    flex: 1,
                    contents: [
                        {
                            type: "image",
                            url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_1.png",
                            gravity: "bottom",
                            size: "sm",
                            // aspectRatio: "4:3",
                            // aspectMode: "cover"
                        },
                        {
                            type: "image",
                            url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_2.png",
                            margin: "md",
                            size: "sm",
                            // aspectRatio: "4:3",
                            // aspectMode: "cover"
                        }
                    ]
                },
                {
                    type: "box",
                    layout: "vertical",
                    flex: 2,
                    contents: [
                        {
                            type: "text",
                            text: "About",
                            size: "xs",
                            flex: 1,
                           // gravity: "top"
                        },
                        {
                            separator: true,
                        },
                        {
                            type: "text",
                            text: "Report",
                            size: "xs",
                            flex: 1,
                           // gravity: "center"
                        },
                        {
                            separator: true,
                        },
                        {
                            type: "text",
                            text: "Hotkey",
                            size: "xs",
                            flex: 1,
                          //  gravity: "center"
                        },
                        {
                            separator: true,
                        },
                        {
                            type: "text",
                            text: "Questions",
                            size: "xs",
                            flex: 1,
                           // gravity: "bottom"

                        },
                        {
                            type: "text",
                            text: "Contact",
                            size: "xs",
                            flex: 1,
                            //gravity: "bottom"
                        }
                    ]
                }
            ]
        },
        footer: {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "button",
                    action: {
                        type: "uri",
                        label: "More",
                        uri: "https://linecorp.com"
                    }
                }
            ]
        }
    };
}
module.exports = {
    getQuestion,
};