// label, type, name, value, placeholder

export const loginFormFields = [
    ['Username', 'text', 'userName', '', 'Enter your username'],
    ['Password', 'password', 'password', '', 'Enter your password']
]

export const signupFormFields = [
    ['Email', 'email', 'email', '', 'Enter your email'],
    ['Username', 'text', 'userName', '', 'Enter your username'],
    ['Password', 'password', 'password', '', 'Enter your password'],
]

export const banMemberFormFields = [
    ['Ban Reasons', 'textArea', 'reason', '', 'Enter your reasons for banning this member...'],
    ['Ban Duration', 'select', 'duration', '', '']
]

export const createThreadFormFields = [
    ['Thread Title', 'text', 'title', '', 'Enter your thread title'],
    ['Post Content', 'textArea', 'content', '', 'Enter the content for your first post in this thread...'],
]

export const createPostFormFields = [
    ['Replying', 'textArea', 'reply', '', 'Replying to this thread...'],
    ['Attach File', 'fileInput', 'file', '', ''],       // havent handle file input
]

export const reportFormFields = [
    ['Report this content as', 'selectMany', 'reasons', '', 'Select report reasons'],
    ['Other reasons for your report (Optional)', 'textArea', 'otherReasons', '', 'Enter other report reasons...']
]

export const formSelectOption = [
    {
        formType: 'searchBar',
        title: 'Select Sort Option',
        name: 'sortOption',
        options: [
            {
                value: "latest",
                label: "Latest Threads",
            },
            {
                value: "mostLikes",
                label: "Most Likes",
            },
            {
                value: "trending",
                label: "Trending Threads",
            },
        ],
    },
    {
        formType: 'ban member',
        title: 'Select Ban Duration',
        name: 'duration',
        options: [
            {
                value: '1',
                label: '1 Day',
            },
            {
                value: '7',
                label: '1 Week',
            },
            {
                value: "31",
                label: '1 Month',
            },
            {
                value: null,
                label: '1000 Years',
            },
        ],
    },
];

export const formCheckBoxes = [
    {
        formType: 'report content',
        title: 'Select Report Reasons',
        name: 'reasons',
        options: [
            {
                value: "body-shaming",
                label: "Body Shaming",
            },
            {
                value: "threatening",
                label: "Threatening",
            },
            {
                value: "toxic",
                label: "Toxic",
            },
        ],
    },
]