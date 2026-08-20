const ApiReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    // Address module
    case "SET_API_DISTRICT":
      return {
        ...state,
        isLoading: false,
        district: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_UPAZILA":
      return {
        ...state,
        isLoading: false,
        upazila: action.payload,
        isError: false,
      };

    // Home module
    case "SET_API_HOME":
      return {
        ...state,
        isLoading: false,
        home: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_HOME":
      return {
        ...state,
        isLoading: false,
        unpaginate_home: action.payload,
        isError: false,
      };

    case "SET_API_BANNER":
      return {
        ...state,
        isLoading: false,
        banner: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_BANNER":
      return {
        ...state,
        isLoading: false,
        unpaginate_banner: action.payload,
        isError: false,
      };

    case "SET_API_FEATURE":
      return {
        ...state,
        isLoading: false,
        feature: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_FEATURE":
      return {
        ...state,
        isLoading: false,
        unpaginate_feature: action.payload,
        isError: false,
      };

    // Book module
    case "SET_API_CATEGORY":
      return {
        ...state,
        isLoading: false,
        category: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_CATEGORY":
      return {
        ...state,
        isLoading: false,
        unpaginate_category: action.payload,
        isError: false,
      };

    case "SET_API_Book":
      return {
        ...state,
        isLoading: false,
        book: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_Book":
      return {
        ...state,
        isLoading: false,
        unpaginate_book: action.payload,
        isError: false,
      };

    // Blog Module
    case "SET_API_BLOG":
      return {
        ...state,
        isLoading: false,
        blog: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_BLOG":
      return {
        ...state,
        isLoading: false,
        unpaginate_blog: action.payload,
        isError: false,
      };

    // Opera Module
    case "SET_API_OPERA_SECTION":
      return {
        ...state,
        isLoading: false,
        opera_section: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_OPERA_SECTION":
      return {
        ...state,
        isLoading: false,
        unpaginate_opera_section: action.payload,
        isError: false,
      };

    case "SET_API_OPERA_CLIENT":
      return {
        ...state,
        isLoading: false,
        opera_client: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_OPERA_CLIENT":
      return {
        ...state,
        isLoading: false,
        unpaginate_opera_client: action.payload,
        isError: false,
      };

    case "SET_API_WRITTER_CHIRKUT":
      return {
        ...state,
        isLoading: false,
        writter_chirkut: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_WRITTER_CHIRKUT":
      return {
        ...state,
        isLoading: false,
        unpaginate_writter_chirkut: action.payload,
        isError: false,
      };

    //Contact Module
    case "SET_API_CONTACT":
      return {
        ...state,
        isLoading: false,
        contact: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_CONTACT":
      return {
        ...state,
        isLoading: false,
        unpaginate_contact: action.payload,
        isError: false,
      };

    // Settings Module
    case "SET_API_CLIENT":
      return {
        ...state,
        isLoading: false,
        client: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_CLIENT":
      return {
        ...state,
        isLoading: false,
        unpaginate_client: action.payload,
        isError: false,
      };

    case "SET_API_GENERAL_SETTINGS":
      return {
        ...state,
        isLoading: false,
        general_settings: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_GENERAL_SETTINGS":
      return {
        ...state,
        isLoading: false,
        unpaginate_general_settings: action.payload,
        isError: false,
      };

    // User / Customer module
    case "SET_ALL_USERS":
      return {
        ...state,
        isLoading: false,
        all_users: action.payload,
        isError: false,
      };

    case "SET_CURRENT_USER_API":
      return {
        ...state,
        isLoading: false,
        c_user: action.payload,
        isError: false,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ApiReducer;
