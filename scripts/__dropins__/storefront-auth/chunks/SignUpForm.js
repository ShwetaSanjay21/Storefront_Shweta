/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as c,jsxs as $}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as nr,classes as Pr}from"@dropins/tools/lib.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{g as br,c as _r,a as Nr}from"./createCustomerAddress.js";import{useState as p,useEffect as Er,useCallback as U,useMemo as Lr}from"@dropins/tools/preact-hooks.js";import{s as mr,b as yr}from"./simplifyTransformAttributesForm.js";import{v as Mr,u as Ur,a as Cr}from"./usePasswordValidationMessage.js";import{a as Sr}from"./getCustomerToken.js";import{p as xr,E as Tr}from"./getStoreConfig.js";import{c as O,g as qr,u as vr,B as ur}from"./Button2.js";import{c as Br}from"./transform-attributes-form.js";import{f as dr,E as Ar}from"./focusOnEmptyPasswordField.js";import{Header as Kr,InLineAlert as jr,InputPassword as cr,Field as Ir,Checkbox as Gr}from"@dropins/tools/components.js";import{u as Hr,F as Vr}from"./Button.js";import{S as Wr}from"./SkeletonLoader.js";const fr=(n,e)=>e!=null&&e.length?n.map(r=>{var d;const t=(d=e.find(({code:s})=>s===r.code))==null?void 0:d.defaultValue;return t?{...r,defaultValue:t}:r}):n,$r=({inputsDefaultValueSet:n,fieldsConfigForApiVersion1:e,apiVersion2:r})=>{const[t,d]=p([]);return Er(()=>{(async()=>{if(r){const o=await br("customer_account_create");if(o!=null&&o.length)if(n!=null&&n.length){const _=fr(o,n);d(_)}else d(o)}else{const o=mr(yr),_=mr(e),E=fr(o,n);d(e&&e.length?_:E)}})()},[r,e,n]),{fieldsListConfigs:t.map(s=>({...s,...s.code==="email"?{autocomplete:"username"}:{}}))}},Or=(n,e)=>{const r=["dob","email","firstname","gender","is_subscribed","lastname","middlename","password","prefix","suffix","taxvat"],t=Br(n,"snakeCase",{firstName:"firstname",lastName:"lastname"});if(!e)return{...t,...t!=null&&t.gender?{gender:Number(t==null?void 0:t.gender)}:{}};const d={},s=[];return Object.keys(t).forEach(o=>{r.includes(o)?d[o]=o.includes("gender")?Number(t[o]):t[o]:s.push({attribute_code:o,value:t[o]})}),s.length>0&&(d.custom_attributes=s),d},Jr=({requireRetypePassword:n,addressesData:e,translations:r,isEmailConfirmationRequired:t,apiVersion2:d=!0,passwordConfigs:s,isAutoSignInEnabled:o,routeRedirectOnSignIn:_,routeSignIn:E,onErrorCallback:C,onSuccessCallback:g,setActiveComponent:w,handleSetInLineAlertProps:F,routeRedirectOnEmailConfirmationClose:T})=>{const[l,m]=p(!1),[i,I]=p(""),[q,u]=p(""),[G,v]=p(""),[J,H]=p(!1),[Q,B]=p({userName:"",status:!1}),[f,S]=p(""),[X,V]=p(!1),[W,L]=p(!1),[Y,Z]=p(!0),k=U(a=>{const h=a.target.value;m(!h.length),h.length&&i.length&&h!==i&&u(r.passwordMismatch)},[i,r.passwordMismatch]),z=U(a=>{const h=a.target.value;u(h.length?"":r.requiredFieldError),h.length&&f.length&&h!==f&&u(r.passwordMismatch)},[f,r.passwordMismatch,r.requiredFieldError]),R=U(a=>{I(a),u(a?f===a?"":r.passwordMismatch:r.requiredFieldError)},[r,f]),D=U(({target:a})=>{Z(a.checked)},[]),rr=U(()=>{if(O(w)){w("signInForm");return}O(E)&&(window.location.href=E())},[w,E]),A=U(a=>{S(a),m(!a.length),a===i&&u("")},[i]),P=U(()=>{F(),S(""),O(T)?window.location.href=T():(H(!1),w==null||w("signInForm"))},[F,T,w]),K=()=>{V(!0),L(!1)},er=(a,h)=>{const tr=f.length&&i.length,j=f!==i,x=()=>{m(!f.length),i||u(r.requiredFieldError),tr&&j&&u(r.passwordMismatch)},y=()=>{u(i.length?r.passwordMismatch:r.requiredFieldError),dr(a,f,i)};return h?n&&(q.length||j)?(K(),y(),!0):(dr(a,f,""),x(),!1):(K(),x(),!0)};return{showPasswordErrorMessage:l,confirmPassword:i,confirmPasswordMessage:q,isKeepMeLogged:Y,userEmail:G,showEmailConfirmationForm:J,isSuccessful:Q,isClickSubmit:X,signUpPasswordValue:f,isLoading:W,onSubmitSignUp:async(a,h)=>{var sr,or,ir;if(F(),u(""),L(!0),er(a,h))return;const{confirmPasswordField:tr,...j}=qr(a.target),{email:x,password:y,is_subscribed:gr}=j,hr=(s==null?void 0:s.requiredCharacterClasses)||0,pr=(s==null?void 0:s.minLength)||1;if(!Mr(y,hr)||pr>(y==null?void 0:y.length)){K();return}const wr=Or({...j,is_subscribed:!!gr||!1},d),N=await _r(wr,d);if((sr=N==null?void 0:N.errors)!=null&&sr.length){const{errors:M}=N;F==null||F({type:"error",text:(or=M[0])==null?void 0:or.message}),C==null||C(M),v(x)}else{const M=N==null?void 0:N.firstName;if(xr(Tr.CREATE_ACCOUNT_EVENT,{...N}),t||!o){if(g==null||g({userName:M,status:!0}),t){(ir=a.target)==null||ir.reset(),S(""),H(!0),v(x),L(!1);return}if(!o){L(!1),B({userName:M,status:!0});return}}const b=await Sr({email:x,password:y,translations:r,handleSetInLineAlertProps:F,onErrorCallback:C});if(b!=null&&b.userName){if(e!=null&&e.length)for(const ar of e)try{await Nr(ar)}catch(Fr){console.error(r.failedCreateCustomerAddress,ar,Fr)}O(_)?window.location.href=_():(g==null||g({userName:b==null?void 0:b.userName,status:!0}),B({userName:b==null?void 0:b.userName,status:!0}))}else g==null||g({userName:M,status:!0}),B({userName:M,status:!0})}L(!1)},signInButton:rr,handleSetSignUpPasswordValue:A,onKeepMeLoggedChange:D,handleHideEmailConfirmationForm:P,handleConfirmPasswordChange:R,onBlurPassword:k,onBlurConfirmPassword:z}},me=({requireRetypePassword:n=!1,addressesData:e,formSize:r="default",inputsDefaultValueSet:t,fieldsConfigForApiVersion1:d,apiVersion2:s=!0,isAutoSignInEnabled:o=!0,hideCloseBtnOnEmailConfirmation:_=!1,routeRedirectOnEmailConfirmationClose:E,routeRedirectOnSignIn:C,routeSignIn:g,onErrorCallback:w,onSuccessCallback:F,setActiveComponent:T,slots:l})=>{const m=Hr({title:"Auth.SignUpForm.title",buttonPrimary:"Auth.SignUpForm.buttonPrimary",buttonSecondary:"Auth.SignUpForm.buttonSecondary",keepMeLoggedText:"Auth.SignUpForm.keepMeLoggedText",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage",failedCreateCustomerAddress:"Auth.SignUpForm.failedCreateCustomerAddress",placeholder:"Auth.InputPassword.placeholder",floatingLabel:"Auth.InputPassword.floatingLabel",requiredFieldError:"Auth.FormText.requiredFieldError.default",confirmPasswordPlaceholder:"Auth.SignUpForm.confirmPassword.placeholder",confirmPasswordFloatingLabel:"Auth.SignUpForm.confirmPassword.floatingLabel",passwordMismatch:"Auth.SignUpForm.confirmPassword.passwordMismatch"}),{passwordConfigs:i,isEmailConfirmationRequired:I}=Ur(),{fieldsListConfigs:q}=$r({fieldsConfigForApiVersion1:d,apiVersion2:s,inputsDefaultValueSet:t}),{inLineAlertProps:u,handleSetInLineAlertProps:G}=vr(),{showPasswordErrorMessage:v,confirmPassword:J,confirmPasswordMessage:H,isKeepMeLogged:Q,userEmail:B,showEmailConfirmationForm:f,isSuccessful:S,isClickSubmit:X,signUpPasswordValue:V,isLoading:W,onSubmitSignUp:L,signInButton:Y,handleSetSignUpPasswordValue:Z,onKeepMeLoggedChange:k,handleHideEmailConfirmationForm:z,handleConfirmPasswordChange:R,onBlurPassword:D,onBlurConfirmPassword:rr}=Jr({requireRetypePassword:n,addressesData:e,translations:m,isEmailConfirmationRequired:I,apiVersion2:s,passwordConfigs:i,isAutoSignInEnabled:o,routeRedirectOnSignIn:C,routeSignIn:g,onErrorCallback:w,onSuccessCallback:F,setActiveComponent:T,handleSetInLineAlertProps:G,routeRedirectOnEmailConfirmationClose:E}),{isValidUniqueSymbols:A,defaultLengthMessage:P}=Cr({password:V,isClickSubmit:X,passwordConfigs:i}),K=Lr(()=>v?m.requiredFieldError:A==="error"||(P==null?void 0:P.status)==="error"?" ":"",[P==null?void 0:P.status,A,v,m.requiredFieldError]),er=!I&&(e==null?void 0:e.length);return!q.length&&s?c("div",{className:`auth-sign-up-form auth-sign-up-form--${r} skeleton-loader`,"data-testid":"SignUpForm",children:c(Wr,{activeSkeleton:"signUpForm"})}):S.status&&(l!=null&&l.SuccessNotification)?c(nr,{"data-testid":"successNotificationTestId",name:"SuccessNotification",slot:l==null?void 0:l.SuccessNotification,context:{isSuccessful:S}}):f?c(Ar,{formSize:r,userEmail:B,inLineAlertProps:u,hideCloseBtnOnEmailConfirmation:_,handleSetInLineAlertProps:G,onPrimaryButtonClick:z}):$("div",{className:Pr(["auth-sign-up-form",`auth-sign-up-form--${r}`]),"data-testid":"SignUpForm",children:[c(Kr,{title:m.title,divider:!1,className:"auth-sign-up-form__title"}),u.text?c(jr,{className:"auth-sign-up-form__notification",type:u.type,variant:"secondary",heading:u.text,icon:u.icon}):null,$(Vr,{onSubmit:L,className:"auth-sign-up-form__form",loading:W,name:"signUp_form",fieldsConfig:q,slots:l,children:[$(cr,{validateLengthConfig:P,className:"auth-sign-up-form__form__field",autoComplete:"current-password",name:"password",minLength:i==null?void 0:i.minLength,errorMessage:K,defaultValue:V,uniqueSymbolsStatus:A,requiredCharacterClasses:i==null?void 0:i.requiredCharacterClasses,onValue:Z,placeholder:m.placeholder,floatingLabel:m.floatingLabel,onBlur:D,children:[n?c("div",{className:"auth-sign-up-form__form__confirm-wrapper",children:c(cr,{className:"auth-sign-up-form__form__field auth-sign-up-form__form__field--confirm-password",autoComplete:"confirmPassword",name:"confirmPasswordField",placeholder:m.confirmPasswordPlaceholder,floatingLabel:m.confirmPasswordFloatingLabel,errorMessage:H,defaultValue:J,onValue:R,onBlur:rr})}):null,er?c("div",{className:"auth-sign-up-form__automatic-login","data-testid":"automaticLogin",children:c(Ir,{children:c(Gr,{name:"",placeholder:m.keepMeLoggedText,label:m.keepMeLoggedText,checked:Q,onChange:k})})}):null]}),c(nr,{name:"PrivacyPolicyConsent","data-testid":"privacyPolicyConsent",slot:l==null?void 0:l.PrivacyPolicyConsent},"privacyPolicyConsent"),$("div",{className:"auth-sign-up-form-buttons",children:[c(ur,{className:"auth-sign-up-form-buttons--signin",type:"button",variant:"tertiary",style:{padding:0},buttonText:m.buttonSecondary,enableLoader:!1,onClick:Y}),c(ur,{type:"submit",buttonText:m.buttonPrimary,variant:"primary",enableLoader:W})]})]}),c("div",{id:"createCustomerV2"})]})};export{me as S};
