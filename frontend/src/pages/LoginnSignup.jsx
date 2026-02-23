import { useState } from "react";

const getStrength = (pwd) => {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
};

const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
const strengthColor = ["", "#ef4444", "#f97316", "#eab308", "#22c55e"];

/* ── Floating Label Input ── */
const FloatInput = ({ label, type = "text", value, onChange, error, icon, rightEl, isLogin }) => {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  return (
    <div className="mb-2">
      <div className={`
        relative flex items-center rounded-xl border-2 min-h-[48px] transition-colors
        ${error ? 'border-red-400' : focused 
          ? (isLogin ? 'border-sky-400' : 'border-emerald-400') 
          : 'border-gray-200'}
        bg-white/92
      `}>
        {icon && (
          <span className="pl-3 flex items-center flex-shrink-0">
            {icon}
          </span>
        )}
        <div className="relative flex-1">
          <input
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent border-none outline-none text-base text-gray-800 pt-4 pb-1 px-2 box-border"
            style={{ paddingLeft: icon ? '8px' : '14px' }}
          />
          <label className={`
            absolute left-[14px] transition-all duration-200 pointer-events-none font-medium
            ${icon ? 'left-2' : 'left-3.5'}
            ${floated ? 'text-[10px] top-1' : 'text-sm top-3.5'}
            ${floated 
              ? (isLogin ? 'text-sky-500' : 'text-emerald-500') 
              : 'text-gray-400'}
          `}>
            {label}
          </label>
        </div>
        {rightEl && (
          <span className="pr-3 flex items-center flex-shrink-0">
            {rightEl}
          </span>
        )}
      </div>
      {error && <p className="text-xs text-red-400 mt-0.5 ml-1">{error}</p>}
    </div>
  );
};

const EyeIcon = ({ show, toggle }) => (
  <button 
    type="button" 
    onClick={toggle} 
    className="bg-none border-none cursor-pointer p-1.5 text-gray-400 flex items-center justify-center"
  >
    {show ? (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ) : (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )}
  </button>
);

const SocialBtn = ({ children }) => (
  <button type="button" className="
    flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl
    border-2 border-gray-200 bg-white/92 text-gray-600 text-xs font-semibold
    cursor-pointer transition-all min-h-[40px]
  ">
    {children}
  </button>
);

function LoginnSignup() {
  const [activeTab, setActiveTab]         = useState("login");
  const [showLoginPwd, setShowLoginPwd]   = useState(false);
  const [showPwd, setShowPwd]             = useState(false);
  const [showConfirm, setShowConfirm]     = useState(false);
  const [rememberMe, setRememberMe]       = useState(false);
  const [loginSuccess, setLoginSuccess]   = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const [loginData,   setLoginData]   = useState({ username: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [signupData,  setSignupData]  = useState({
    firstName: "", lastName: "", email: "",
    password: "", confirmPassword: "", mobile: "", agreed: false,
  });
  const [signupErrors, setSignupErrors] = useState({});

  const pwdStrength = getStrength(signupData.password);

  const validateLogin = () => {
    const e = {};
    if (!loginData.username.trim()) e.username = "Username is required";
    if (!loginData.password) e.password = "Password is required";
    else if (loginData.password.length < 6) e.password = "Min 6 characters";
    return e;
  };

  const validateSignup = () => {
    const e = {};
    if (!signupData.firstName.trim()) e.firstName = "Required";
    if (!signupData.lastName.trim())  e.lastName  = "Required";
    if (!signupData.email.trim())     e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signupData.email)) e.email = "Invalid email";
    if (!signupData.password)         e.password = "Required";
    else if (signupData.password.length < 8) e.password = "Min 8 chars";
    if (signupData.confirmPassword !== signupData.password) e.confirmPassword = "Doesn't match";
    if (!signupData.mobile.trim())    e.mobile = "Required";
    if (!signupData.agreed)           e.agreed = "You must agree to continue";
    return e;
  };

  const handleLoginSubmit = (ev) => {
    ev.preventDefault();
    const errs = validateLogin();
    if (Object.keys(errs).length) { setLoginErrors(errs); return; }
    setLoginErrors({});
    setLoginSuccess(true);
    setTimeout(() => setLoginSuccess(false), 3000);
  };

  const handleSignupSubmit = (ev) => {
    ev.preventDefault();
    const errs = validateSignup();
    if (Object.keys(errs).length) { setSignupErrors(errs); return; }
    setSignupErrors({});
    setSignupSuccess(true);
    setTimeout(() => setSignupSuccess(false), 3000);
  };

  const isLogin = activeTab === "login";

  const iconUser = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
  const iconLock = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
  const iconMail = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
  const iconPhone = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const googleIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
  const fbIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const loginGrad = "bg-gradient-to-br from-sky-400 to-blue-600";
  const signupGrad = "bg-gradient-to-br from-teal-400 to-emerald-500";
  const pageBg = isLogin
    ? "bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100"
    : "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50";

  return (
    <div className={`min-h-screen w-full ${pageBg} flex items-center justify-center p-2 box-border transition-colors duration-700 font-sans overflow-hidden`}>
      {/* Card */}
      <div className="relative w-full max-w-[450px] bg-white/85 backdrop-blur-xl rounded-2xl border-2 p-5 mx-auto shadow-xl max-h-[98vh] overflow-y-auto scrollbar-hide"
        style={{ 
          borderColor: isLogin ? 'rgba(56,189,248,0.35)' : 'rgba(52,211,153,0.35)'
        }}
      >
        {/* Shimmer top bar */}
        <div className={`absolute top-0 left-[15%] right-[15%] h-1 rounded-t-md ${
          isLogin ? loginGrad : signupGrad
        }`} />

        {/* Logo */}
<div className="text-center mb-3">
  <div className={`
    w-[70px] h-[70px] mx-auto rounded-full flex items-center justify-center overflow-hidden border-2
    ${isLogin 
      ? 'bg-white border-white' 
      : 'bg-white border-white'}
  `}>
    <img 
      src="src/assets/icons/logo.png" 
      alt="Logo" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* Tab Toggle */}
        <div className={`
          flex p-1 rounded-full mb-4 border-2
          ${isLogin ? 'bg-sky-50 border-sky-200' : 'bg-emerald-50 border-emerald-200'}
        `}>
          <button 
            onClick={() => setActiveTab("login")} 
            className={`
              flex-1 py-2.5 rounded-full border-none cursor-pointer font-bold text-sm transition-all
              ${isLogin 
                ? `${loginGrad} text-white shadow-lg` 
                : 'bg-transparent text-emerald-600'}
            `}
          >
            Login
          </button>
          <button 
            onClick={() => setActiveTab("signup")} 
            className={`
              flex-1 py-2.5 rounded-full border-none cursor-pointer font-bold text-sm transition-all
              ${!isLogin 
                ? `${signupGrad} text-white shadow-lg` 
                : 'bg-transparent text-sky-600'}
            `}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN */}
        {isLogin && (
          <div>
            <form onSubmit={handleLoginSubmit} noValidate>
              <FloatInput label="Username" value={loginData.username} isLogin={true}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                error={loginErrors.username} icon={iconUser} />

              <FloatInput label="Password" type={showLoginPwd ? "text" : "password"} isLogin={true}
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                error={loginErrors.password} icon={iconLock}
                rightEl={<EyeIcon show={showLoginPwd} toggle={() => setShowLoginPwd(!showLoginPwd)} />} />

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div 
                    onClick={() => setRememberMe(!rememberMe)} 
                    className={`
                      w-9 h-4 rounded-full relative cursor-pointer transition-colors flex-shrink-0
                      ${rememberMe ? 'bg-sky-400' : 'bg-gray-300'}
                    `}
                  >
                    <div className={`
                      absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-all
                      ${rememberMe ? 'left-[20px]' : 'left-0.5'}
                    `} />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Remember me</span>
                </label>
                <button type="button" className="text-xs text-sky-500 font-semibold bg-none border-none cursor-pointer py-1 px-2">
                  Forgot password?
                </button>
              </div>

              {loginSuccess && (
                <div className="mb-4 p-2.5 bg-sky-50 border border-sky-200 rounded-xl flex items-center gap-2">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0284c7" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-sky-800 font-semibold">Login successful! Redirecting...</span>
                </div>
              )}

              <button 
                type="submit" 
                className={`
                  w-full py-3 rounded-xl text-white font-bold text-base tracking-wide
                  border-none cursor-pointer mb-4 shadow-lg min-h-[44px]
                  ${loginGrad}
                `}
              >
                Sign In
              </button>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 whitespace-nowrap">or continue with</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="flex gap-2">
                <SocialBtn>{googleIcon} Google</SocialBtn>
                <SocialBtn>{fbIcon} Facebook</SocialBtn>
              </div>
            </form>
          </div>
        )}

        {/* SIGNUP - Compact version without scroll bar */}
        {!isLogin && (
          <form onSubmit={handleSignupSubmit} noValidate>
            <div className="flex gap-2">
              <div className="flex-1">
                <FloatInput label="First" value={signupData.firstName} isLogin={false}
                  onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                  error={signupErrors.firstName} />
              </div>
              <div className="flex-1">
                <FloatInput label="Last" value={signupData.lastName} isLogin={false}
                  onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                  error={signupErrors.lastName} />
              </div>
            </div>

            <FloatInput label="Email" type="email" value={signupData.email} isLogin={false}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              error={signupErrors.email} icon={iconMail} />

            <FloatInput label="Password" type={showPwd ? "text" : "password"} value={signupData.password} isLogin={false}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              error={signupErrors.password} icon={iconLock}
              rightEl={<EyeIcon show={showPwd} toggle={() => setShowPwd(!showPwd)} />} />

            {signupData.password.length > 0 && (
              <div className="mb-2 -mt-1">
                <div className="flex gap-1 mb-0.5">
                  {[1,2,3,4].map((i) => (
                    <div 
                      key={i} 
                      className="flex-1 h-1 rounded-full transition-all"
                      style={{ 
                        background: i <= pwdStrength ? strengthColor[pwdStrength] : '#e5e7eb'
                      }}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-semibold" style={{ color: strengthColor[pwdStrength] }}>
                  {pwdStrength > 0 && `${strengthLabel[pwdStrength]} password`}
                </p>
              </div>
            )}

            <FloatInput label="Confirm Password" type={showConfirm ? "text" : "password"} value={signupData.confirmPassword} isLogin={false}
              onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
              error={signupErrors.confirmPassword} icon={iconLock}
              rightEl={<EyeIcon show={showConfirm} toggle={() => setShowConfirm(!showConfirm)} />} />

            <FloatInput label="Mobile" type="tel" value={signupData.mobile} isLogin={false}
              onChange={(e) => setSignupData({ ...signupData, mobile: e.target.value })}
              error={signupErrors.mobile} icon={iconPhone} />

            {/* Terms */}
            <div className="mb-3">
              <label className="flex items-start gap-2 cursor-pointer">
                <div 
                  onClick={() => setSignupData({ ...signupData, agreed: !signupData.agreed })} 
                  className={`
                    mt-0.5 w-4 h-4 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all cursor-pointer
                    ${signupData.agreed 
                      ? 'bg-emerald-500 border-emerald-500' 
                      : 'bg-white border-gray-300'}
                  `}
                >
                  {signupData.agreed && (
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <span className="text-emerald-500 font-semibold">Terms</span>
                  {" "}&{" "}
                  <span className="text-emerald-500 font-semibold">Privacy</span>
                </span>
              </label>
              {signupErrors.agreed && <p className="text-[10px] text-red-400 mt-1 ml-6">{signupErrors.agreed}</p>}
            </div>

            {signupSuccess && (
              <div className="mb-3 p-2 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-emerald-700 font-semibold">Account created! 🎉</span>
              </div>
            )}

            <button 
              type="submit" 
              className={`
                w-full py-3 rounded-xl text-white font-bold text-base tracking-wide
                border-none cursor-pointer mb-3 shadow-lg min-h-[44px]
                ${signupGrad}
              `}
            >
              Create Account
            </button>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 whitespace-nowrap">or sign up with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex gap-2">
              <SocialBtn>{googleIcon} Google</SocialBtn>
              <SocialBtn>{fbIcon} Facebook</SocialBtn>
            </div>
          </form>
        )}

        <p className={`
          text-center text-[10px] tracking-widest uppercase mt-3
          ${isLogin ? 'text-sky-300' : 'text-emerald-300'}
        `}>
          Wheels & Waves LK
        </p>
      </div>

      {/* Add scrollbar hiding styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default LoginnSignup;