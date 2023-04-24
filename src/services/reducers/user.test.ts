import { userActionCreator } from '../action-creators/user'
import { Progress } from '../types/common'
import { initialState as UserInitialState, userReducer } from './user'

const testUser = {
  name: 'Alan Mock',
  email: 'alan@mock.com',
}

const anotherTestUser = {
  name: 'Alan Mock the Second',
  email: 'alan-ii@mock.com',
}

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {} as any)).toEqual(UserInitialState)
  })

  // Register
  it('should handle RegisterRequest', () => {
    expect(userReducer(undefined, userActionCreator.userRegisterRequest())).toEqual({
      ...UserInitialState,
      registrationProgress: Progress.WORK,
    })
  })
  it('should handle RegisterSuccess', () => {
    expect(
      userReducer(
        { ...UserInitialState, registrationProgress: Progress.WORK },
        userActionCreator.userRegisterSuccess(testUser),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
      registrationProgress: Progress.SUCCESS,
    })
  })
  it('should handle RegisterError', () => {
    expect(
      userReducer(
        { ...UserInitialState, registrationProgress: Progress.WORK, user: testUser },
        userActionCreator.userRegisterError(),
      ),
    ).toEqual({
      ...UserInitialState,
      registrationProgress: Progress.ERROR,
    })
  })
  it('should handle RegisterClearProgress', () => {
    expect(
      userReducer(
        { ...UserInitialState, registrationProgress: Progress.SUCCESS, user: testUser },
        userActionCreator.userRegisterClearProgress(),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
    })
  })

  // Login
  it('should handle LoginRequest', () => {
    expect(userReducer(undefined, userActionCreator.userLoginRequest())).toEqual({
      ...UserInitialState,
      loginProgress: Progress.WORK,
    })
  })
  it('should handle LoginSuccess', () => {
    expect(
      userReducer({ ...UserInitialState, loginProgress: Progress.WORK }, userActionCreator.userLoginSuccess(testUser)),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
      loginProgress: Progress.SUCCESS,
    })
  })
  it('should handle LoginError', () => {
    expect(
      userReducer(
        { ...UserInitialState, loginProgress: Progress.WORK, user: testUser },
        userActionCreator.userLoginError(),
      ),
    ).toEqual({
      ...UserInitialState,
      loginProgress: Progress.ERROR,
    })
  })
  it('should handle LoginClearProgress', () => {
    expect(
      userReducer(
        { ...UserInitialState, loginProgress: Progress.SUCCESS, user: testUser },
        userActionCreator.userLoginClearProgress(),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
    })
  })

  // Forgot Password
  it('should handle ForgotPasswordRequest', () => {
    expect(userReducer(undefined, userActionCreator.userForgotPasswordRequest())).toEqual({
      ...UserInitialState,
      forgotPasswordProgress: Progress.WORK,
    })
  })
  it('should handle ForgotPasswordSuccess', () => {
    expect(userReducer(undefined, userActionCreator.userForgotPasswordSuccess())).toEqual({
      ...UserInitialState,
      forgotPasswordProgress: Progress.SUCCESS,
    })
  })
  it('should handle ForgotPasswordError', () => {
    expect(userReducer(undefined, userActionCreator.userForgotPasswordError())).toEqual({
      ...UserInitialState,
      forgotPasswordProgress: Progress.ERROR,
    })
  })
  it('should handle ForgotPasswordClearProgress', () => {
    expect(userReducer(undefined, userActionCreator.userForgotPasswordClearProgress())).toEqual(UserInitialState)
  })

  // Reset Password
  it('should handle ResetPasswordRequest', () => {
    expect(userReducer(undefined, userActionCreator.userResetPasswordRequest())).toEqual({
      ...UserInitialState,
      resetPasswordProgress: Progress.WORK,
    })
  })
  it('should handle ResetPasswordSuccess', () => {
    expect(userReducer(undefined, userActionCreator.userResetPasswordSuccess())).toEqual({
      ...UserInitialState,
      resetPasswordProgress: Progress.SUCCESS,
    })
  })
  it('should handle ResetPasswordError', () => {
    expect(userReducer(undefined, userActionCreator.userResetPasswordError())).toEqual({
      ...UserInitialState,
      resetPasswordProgress: Progress.ERROR,
    })
  })
  it('should handle ResetPasswordClearProgress', () => {
    expect(userReducer(undefined, userActionCreator.userResetPasswordClearProgress())).toEqual(UserInitialState)
  })

  // Token Refresh
  it('should handle RefreshTokenRequest', () => {
    expect(userReducer({ ...UserInitialState, user: testUser }, userActionCreator.userRefreshTokenRequest())).toEqual({
      ...UserInitialState,
      user: testUser,
      refreshTokenProgress: Progress.WORK,
    })
  })
  it('should handle RefreshTokenSuccess', () => {
    expect(
      userReducer(
        { ...UserInitialState, refreshTokenProgress: Progress.WORK, user: testUser },
        userActionCreator.userRefreshTokenSuccess(),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
      refreshTokenProgress: Progress.SUCCESS,
    })
  })
  it('should handle RefreshTokenError', () => {
    expect(
      userReducer(
        { ...UserInitialState, refreshTokenProgress: Progress.WORK, user: testUser },
        userActionCreator.userRefreshTokenError(),
      ),
    ).toEqual({
      ...UserInitialState,
      refreshTokenProgress: Progress.ERROR,
    })
  })

  // Logout
  it('should handle LogoutRequest', () => {
    expect(userReducer({ ...UserInitialState, user: testUser }, userActionCreator.userLogoutRequest())).toEqual({
      ...UserInitialState,
      user: testUser,
      logoutProgress: Progress.WORK,
    })
  })
  it('should handle LogoutSuccess', () => {
    expect(
      userReducer(
        { ...UserInitialState, logoutProgress: Progress.WORK, user: testUser },
        userActionCreator.userLogoutSuccess(),
      ),
    ).toEqual({
      ...UserInitialState,
      logoutProgress: Progress.SUCCESS,
    })
  })
  it('should handle LogoutError', () => {
    expect(
      userReducer(
        { ...UserInitialState, logoutProgress: Progress.WORK, user: testUser },
        userActionCreator.userLogoutError(),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
      logoutProgress: Progress.ERROR,
    })
  })

  // Get User
  it('should handle GetProfileRequest', () => {
    expect(userReducer(undefined, userActionCreator.userGetProfileRequest())).toEqual({
      ...UserInitialState,
      getProfileProgress: Progress.WORK,
    })
  })
  it('should handle GetProfileSuccess', () => {
    expect(
      userReducer(
        { ...UserInitialState, getProfileProgress: Progress.WORK },
        userActionCreator.userGetProfileSuccess(testUser),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
      getProfileProgress: Progress.SUCCESS,
    })
  })
  it('should handle GetProfileError', () => {
    expect(
      userReducer({ ...UserInitialState, getProfileProgress: Progress.WORK }, userActionCreator.userGetProfileError()),
    ).toEqual({
      ...UserInitialState,
      getProfileProgress: Progress.ERROR,
    })
  })

  // Edit User
  it('should handle EditProfileRequest', () => {
    expect(userReducer({ ...UserInitialState, user: testUser }, userActionCreator.userEditProfileRequest())).toEqual({
      ...UserInitialState,
      user: testUser,
      editProfileProgress: Progress.WORK,
    })
  })
  it('should handle EditProfileSuccess', () => {
    expect(
      userReducer(
        { ...UserInitialState, user: testUser, editProfileProgress: Progress.WORK },
        userActionCreator.userEditProfileSuccess(anotherTestUser),
      ),
    ).toEqual({
      ...UserInitialState,
      user: anotherTestUser,
      editProfileProgress: Progress.SUCCESS,
    })
  })
  it('should handle EditProfileError', () => {
    expect(
      userReducer(
        { ...UserInitialState, user: testUser, editProfileProgress: Progress.WORK },
        userActionCreator.userEditProfileError(),
      ),
    ).toEqual({
      ...UserInitialState,
      user: testUser,
      editProfileProgress: Progress.ERROR,
    })
  })
})
