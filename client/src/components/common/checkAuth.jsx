import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname, isAuthenticated);

  // ✅ Redirect to Login if not authenticated & not already on auth pages
  const isAuthPage =
    pathname.includes("/login") || pathname.includes("/register");
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" />;
  }

  // ✅ Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthPage) {
    return (
      <Navigate
        to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"}
      />
    );
  }

  // ✅ Handle home redirection
  if (pathname === "/") {
    return (
      <Navigate
        to={
          isAuthenticated
            ? user?.role === "admin"
              ? "/admin/dashboard"
              : "/shop/home"
            : "/auth/login"
        }
      />
    );
  }

  // ✅ Prevent non-admin users from accessing admin pages
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // ✅ Prevent admin users from accessing shop pages
  if (isAuthenticated && user?.role === "admin" && pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
