export default {
    isLoading(state: any) {
        return state.isLoading;
    },
    error(state: any) {
        return state.error;
    },
    isEmailVerificationLoading(state: any) {
        return state.isEmailVerificationLoading;
    },
    emailVerificationError(state: any) {
        return state.emailVerificationError;
    },
    isEmailEditLoading(state: any) {
        return state.isEmailEditLoading;
    },
    emailEditError(state: any) {
        return state.emailEditError;
    },
    isPhoneEditLoading(state: any) {
        return state.isPhoneEditLoading;
    },
    phoneEditError(state: any) {
        return state.phoneEditError;
    },
    isPasswordEditLoading(state: any) {
        return state.isPasswordEditLoading;
    },
    passwordEditError(state: any) {
        return state.passwordEditError;
    },
    userInfo(state: any) {
        return state.userInfo;
    },
    isUserVerified(state: any) {
        return state.isUserVerified;
    }
};