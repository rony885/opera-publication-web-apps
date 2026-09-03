import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";

import ApiReducer from "../reducer/ApiReducer";

const AppContext = createContext();

const initialState = {
  // loading & error
  isLoading: false,
  isError: false,

  // Address Module
  district: [],
  upazila: [],
  upazilas: [],
  unions: [],

  // Home module
  home: [],
  unpaginate_home: [],
  banner: [],
  unpaginate_banner: [],
  feature: [],
  unpaginate_feature: [],

  // Product module
  category: [],
  unpaginate_category: [],

  book: [],
  unpaginate_book: [],

  // Blog Module
  blog: [],
  unpaginate_blog: [],

  // Opera Module
  opera_section: {},
  unpaginate_opera_section: {},
  opera_client: [],
  unpaginate_opera_client: [],
  writter_chirkut: [],
  unpaginate_writter_chirkut: [],

  // Contact Module
  contact: [],
  unpaginate_contact: [],

  // Settings Module
  client: [],
  unpaginate_client: [],

  general_settings: {},
  unpaginate_general_settings: {},

  // User / Customer module
  all_users: [],
  c_user: {},
};

const ApiContext = ({ children }) => {
  const [state, dispatch] = useReducer(ApiReducer, initialState);

  // all urls
  const urls = {
    // Address Module
    district: `${process.env.REACT_APP_BASE_URL}/address_api/districts/`,
    upazila: `${process.env.REACT_APP_BASE_URL}/address_api/upazilas/`,

    // Home module
    home: `${process.env.REACT_APP_BASE_URL}/home_api/home/`,
    unpaginate_home: `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_home/`,
    banner: `${process.env.REACT_APP_BASE_URL}/home_api/banner/`,
    unpaginate_banner: `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_banner/`,
    feature: `${process.env.REACT_APP_BASE_URL}/home_api/feature/`,
    unpaginate_feature: `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_feature/`,

    // Product module
    category: `${process.env.REACT_APP_BASE_URL}/product_api/category/`,
    unpaginateCategory: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_category/`,

    book: `${process.env.REACT_APP_BASE_URL}/book_api/book/`,
    unpaginateBook: `${process.env.REACT_APP_BASE_URL}/book_api/unpaginate_book/`,

    // Blog Module
    blog: `${process.env.REACT_APP_BASE_URL}/blog_api/blog/`,
    unpaginateBlog: `${process.env.REACT_APP_BASE_URL}/blog_api/unpaginate_blog/`,

    // Opera Module
    operaSection: `${process.env.REACT_APP_BASE_URL}/opera_api/opera_section/1`,
    unpaginateOperaSection: `${process.env.REACT_APP_BASE_URL}/opera_api/unpaginate_opera_section/1`,
    operaClient: `${process.env.REACT_APP_BASE_URL}/opera_api/opera_clients/`,
    unpaginateOperaClient: `${process.env.REACT_APP_BASE_URL}/opera_api/unpaginate_opera_clients/`,
    writterChirkut: `${process.env.REACT_APP_BASE_URL}/opera_api/writter_chirkut/`,
    unpaginateWritterChirkut: `${process.env.REACT_APP_BASE_URL}/opera_api/unpaginate_writter_chirkut/`,

    // Contact Module
    contact: `${process.env.REACT_APP_BASE_URL}/contact_api/contact/`,
    unpaginateContact: `${process.env.REACT_APP_BASE_URL}/contact_api/unpaginate_contact/`,

    // Settings module
    client: `${process.env.REACT_APP_BASE_URL}/settings_api/client/`,
    unpaginateClient: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_client/`,

    generalSettings: `${process.env.REACT_APP_BASE_URL}/settings_api/generalSettings/1/`,
    unpaginateGeneralSettings: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_generalSettings/1/`,

    // User / Customer module
    allUsers: `${process.env.REACT_APP_BASE_URL}/custom_user/all_users/`,
    currentUser: `${process.env.REACT_APP_BASE_URL}/custom_user/ `,
  };

  // Fetch data function with useCallback
  const fetchData = useCallback(async (url, actionType) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      dispatch({ type: actionType, payload: result });
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      dispatch({ type: "API_ERROR" });
    }
  }, []);

  // const fetchData = useCallback(async (url, actionType) => {
  //   dispatch({ type: "SET_LOADING" });

  //   try {
  //     const response = await axios.get(url);

  //     // axios automatically returns parsed data
  //     dispatch({ type: actionType, payload: response.data });
  //   } catch (error) {
  //     console.error(`Error fetching data from ${url}:`, error);
  //     dispatch({ type: "API_ERROR" });
  //   }
  // }, []);

  // Memoize all fetch functions using useCallback
  // Address module

  const fetchDistrict = useCallback(
    () => fetchData(urls.district, "SET_API_DISTRICT"),
    [fetchData, urls.district],
  );

  const fetchUpazila = useCallback(
    () => fetchData(urls.upazila, "SET_API_UNPAGINATE_UPAZILA"),
    [fetchData, urls.upazila],
  );

  // Home module
  const fetchHome = useCallback(
    () => fetchData(urls.home, "SET_API_HOME"),
    [fetchData, urls.home],
  );
  const fetchUnpaginateHome = useCallback(
    () => fetchData(urls.unpaginate_home, "SET_API_UNPAGINATE_HOME"),
    [fetchData, urls.unpaginate_home],
  );

  const fetchBanner = useCallback(
    () => fetchData(urls.banner, "SET_API_BANNER"),
    [fetchData, urls.banner],
  );
  const fetchUnpaginateBanner = useCallback(
    () => fetchData(urls.unpaginate_banner, "SET_API_UNPAGINATE_BANNER"),
    [fetchData, urls.unpaginate_banner],
  );

  const fetchFeature = useCallback(
    () => fetchData(urls.feature, "SET_API_FEATURE"),
    [fetchData, urls.feature],
  );
  const fetchUnpaginateFeature = useCallback(
    () => fetchData(urls.unpaginate_feature, "SET_API_UNPAGINATE_FEATURE"),
    [fetchData, urls.unpaginate_feature],
  );

  // Book module
  const fetchCategory = useCallback(
    () => fetchData(urls.category, "SET_API_CATEGORY"),
    [fetchData, urls.category],
  );
  const fetchUnpaginateCategory = useCallback(
    () => fetchData(urls.unpaginateCategory, "SET_API_UNPAGINATE_CATEGORY"),
    [fetchData, urls.unpaginateCategory],
  );

  const fetchBook = useCallback(
    () => fetchData(urls.book, "SET_API_Book"),
    [fetchData, urls.book],
  );
  const fetchUnpaginateBook = useCallback(
    () => fetchData(urls.unpaginateBook, "SET_API_UNPAGINATE_Book"),
    [fetchData, urls.unpaginateBook],
  );

  // Blog Module
  const fetchBlog = useCallback(
    () => fetchData(urls.blog, "SET_API_BLOG"),
    [fetchData, urls.blog],
  );
  const fetchUnpaginateBlog = useCallback(
    () => fetchData(urls.unpaginateBlog, "SET_API_UNPAGINATE_BLOG"),
    [fetchData, urls.unpaginateBlog],
  );

  // Opera Module
  const fetchOperaSection = useCallback(
    () => fetchData(urls.operaSection, "SET_API_OPERA_SECTION"),
    [fetchData, urls.operaSection],
  );
  const fetchUnpaginateOperaSection = useCallback(
    () =>
      fetchData(
        urls.unpaginateOperaSection,
        "SET_API_UNPAGINATE_OPERA_SECTION",
      ),
    [fetchData, urls.unpaginateOperaSection],
  );

  const fetchOperaClient = useCallback(
    () => fetchData(urls.operaClient, "SET_API_OPERA_CLIENT"),
    [fetchData, urls.operaClient],
  );
  const fetchUnpaginateOperaClient = useCallback(
    () =>
      fetchData(urls.unpaginateOperaClient, "SET_API_UNPAGINATE_OPERA_CLIENT"),
    [fetchData, urls.unpaginateOperaClient],
  );

  const fetchWritterChirkut = useCallback(
    () => fetchData(urls.writterChirkut, "SET_API_WRITTER_CHIRKUT"),
    [fetchData, urls.writterChirkut],
  );
  const fetchUnpaginateWritterChirkut = useCallback(
    () =>
      fetchData(
        urls.unpaginateWritterChirkut,
        "SET_API_UNPAGINATE_WRITTER_CHIRKUT",
      ),
    [fetchData, urls.unpaginateWritterChirkut],
  );

  // Contact Module
  const fetchContact = useCallback(
    () => fetchData(urls.contact, "SET_API_CONTACT"),
    [fetchData, urls.contact],
  );
  const fetchUnpaginateContact = useCallback(
    () => fetchData(urls.unpaginateContact, "SET_API_UNPAGINATE_CONTACT"),
    [fetchData, urls.unpaginateContact],
  );

  // Settings Module
  const fetchClient = useCallback(
    () => fetchData(urls.client, "SET_API_CLIENT"),
    [fetchData, urls.client],
  );
  const fetchUnpaginateClient = useCallback(
    () => fetchData(urls.unpaginateClient, "SET_API_UNPAGINATE_CLIENT"),
    [fetchData, urls.unpaginateClient],
  );

  const fetchGeneralSettings = useCallback(
    () => fetchData(urls.generalSettings, "SET_API_GENERAL_SETTINGS"),
    [fetchData, urls.generalSettings],
  );
  const fetchUnpaginateGeneralSettings = useCallback(
    () =>
      fetchData(
        urls.unpaginateGeneralSettings,
        "SET_API_UNPAGINATE_GENERAL_SETTINGS",
      ),
    [fetchData, urls.unpaginateGeneralSettings],
  );

  // User / Customer module
  const fetchAllUsers = useCallback(
    () => fetchData(urls.allUsers, "SET_ALL_USERS"),
    [fetchData, urls.allUsers],
  );

  const fetchCurrentUser = useCallback(async () => {
    const aT = localStorage.getItem(
      "operaPublicationSuperuserandstaffAccessToken",
    );
    if (aT) {
      try {
        const response = await fetch(urls.currentUser, {
          headers: {
            Authorization: `Bearer ${aT}`,
          },
        });
        const data = await response.json();
        dispatch({ type: "SET_CURRENT_USER_API", payload: data });
      } catch (error) {
        console.error("Error fetching current user:", error);
        dispatch({ type: "API_ERROR" });
      }
    }
  }, [urls.currentUser]);

  // Fetch current user every time
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchDistrict,
        fetchUpazila,

        fetchHome,
        fetchUnpaginateHome,
        fetchBanner,
        fetchUnpaginateBanner,
        fetchFeature,
        fetchUnpaginateFeature,

        fetchCategory,
        fetchUnpaginateCategory,
        fetchBook,
        fetchUnpaginateBook,

        fetchClient,
        fetchUnpaginateClient,
        fetchGeneralSettings,
        fetchUnpaginateGeneralSettings,

        fetchBlog,
        fetchUnpaginateBlog,

        fetchOperaSection,
        fetchUnpaginateOperaSection,
        fetchOperaClient,
        fetchUnpaginateOperaClient,
        fetchWritterChirkut,
        fetchUnpaginateWritterChirkut,

        fetchContact,
        fetchUnpaginateContact,

        fetchAllUsers,
        fetchCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApiContext = () => useContext(AppContext);

export { ApiContext, AppContext, useApiContext };
