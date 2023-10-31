/* eslint-disable react/jsx-pascal-case */

import React from "react";
import * as SL_Components from './SL_Components';

function SignUp_LogIn() {
    // signIn 
     const [signIn, toggle] = React.useState(true);

      return(
          <SL_Components.Container>
              <SL_Components.SignUpContainer signinIn={signIn}>
                  <SL_Components.Form>
                      <SL_Components.Title>Create Account</SL_Components.Title>
                      <SL_Components.Input type='text' placeholder='Name' />
                      <SL_Components.Input type='email' placeholder='Email' />
                      <SL_Components.Input type='password' placeholder='Password' />
                      <SL_Components.Button>Sign Up</SL_Components.Button>
                  </SL_Components.Form>
              </SL_Components.SignUpContainer>

              <SL_Components.SignInContainer signinIn={signIn}>
                   <SL_Components.Form>
                       <SL_Components.Title>Sign in</SL_Components.Title>
                       <SL_Components.Paragraph>
                          Enter your complete details
                      </SL_Components.Paragraph>
                       <SL_Components.Input type='email' placeholder='Email' />
                       <SL_Components.Input type='password' placeholder='Password' />
                       <SL_Components.Anchor href='#'>Forgot your password?</SL_Components.Anchor>
                       <SL_Components.Button>Sign In</SL_Components.Button>
                   </SL_Components.Form>
              </SL_Components.SignInContainer>

              <SL_Components.OverlayContainer signinIn={signIn}>
                  <SL_Components.Overlay signinIn={signIn}>

                  <SL_Components.LeftOverlayPanel signinIn={signIn}>
                      <SL_Components.Title>Welcome Back!</SL_Components.Title>
                      <SL_Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </SL_Components.Paragraph>
                      <SL_Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </SL_Components.GhostButton>
                      </SL_Components.LeftOverlayPanel>

                      <SL_Components.RightOverlayPanel signinIn={signIn}>
                        <SL_Components.Title>Hello, Friend!</SL_Components.Title>
                        <SL_Components.Paragraph>
                        Enter your personal details and let’s start your rice stress scanning
                        </SL_Components.Paragraph>
                            <SL_Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </SL_Components.GhostButton> 
                      </SL_Components.RightOverlayPanel>
  
                  </SL_Components.Overlay>
              </SL_Components.OverlayContainer>

          </SL_Components.Container>
      )
}

export default SignUp_LogIn;



