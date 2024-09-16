// label, type, name, value, placeholder

export const loginFormFields = [
    ['Username', 'text', 'username', '', 'Enter your username'],
    ['Password', 'password', 'password', '', 'Enter your password']
]

export const signupFormFields = [
    ['Username', 'text', 'username', '', 'Enter your username'],
    ['Password', 'password', 'password', '', 'Enter your password'],
    ['Email', 'email', 'email', '', 'Enter your email'],
]

export const banMemberFormFields = [
    ['Ban Reasons', 'textArea', 'reason', '', 'Enter your reasons for banning this member...'],
    ['Ban Duration', 'select', 'duration', '', '']
]

export const createThreadFormFields = [
    ['Thread Title', 'text', 'title', '', 'Enter your thread title'],
    ['Thread Tags', 'selectMany', 'tagSet', '', 'Select tags for your new thread (Optional)'],
]

export const createPostFormFields = [
    ['Replying', 'textArea', 'content', '', 'Replying to this thread...'],
    ['Attach Files', 'fileInput', 'fileUpload', '', ''],
]

export const reportPostFormFields = [
    ['Report this content as', 'selectMany', 'toxic-tags', '', 'Select report reasons'],
    ['Other reasons for your report (Optional)', 'textArea', 'reason', '', 'Enter other report reasons...']
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
        formType: 'report post',
        title: 'Select Report Reasons',
        name: '',
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
    {
        formType: 'create thread',
        title: 'Select Tags',
        name: 'tagSet',
        options: [
            {
                value: "2",
                label: "Fitness",
            },
            {
                value: "3",
                label: "Sharing",
            },
            {
                value: "4",
                label: "Eatclean",
            },
            {
                value: "5",
                label: "Gym",
            },
        ],
    },
]