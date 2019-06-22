// GLOBAL

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User 

const ME = "/me";
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Github 

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Naver

const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

// API 
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";

// Video

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    me: ME,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`;
        } else 
            return USER_DETAIL
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if(id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: id => {
        if(id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: id => {
        if(id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    naver: NAVER,
    naverCallback: NAVER_CALLBACK,
    api: API,
    registerView: REGISTER_VIEW,
    addComment: ADD_COMMENT,
};

export default routes;