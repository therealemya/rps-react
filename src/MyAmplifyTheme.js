const bgCol = 'white';
export const Container = {
  fontWeight: '400',
  fontSize: '25px',
  fontFamily: 'Bangers'
};
export const FormContainer = {
  textAlign: 'center',
  margin: '0 0',
};
export const FormSection = {
  position: 'relative',
  marginBottom: '20px',
  backgroundColor: bgCol,
  padding: '35px 40px',
  textAlign: 'left',
  display: 'inline-block',
  minWidth: '380px',
  borderRadius: '6px',
  boxShadow: '1px 1px 4px 0 rgba(0,0,0,0.15)',
};
export const FormField = {
  marginBottom: '22px',
};
export const SectionHeader = {
  color: '#555',
  marginBottom: '30px',
  fontSize: '30px',
  fontFamily: 'Bangers',
  fontWeight: '500',
};
export const SectionBody = {
  marginBottom: '30px',
};
//No Account CSS
export const SectionFooter = {
  fontSize: '17px',
  color: '#282C34',
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
};
export const SectionFooterPrimaryContent = {
  marginLeft: 'auto',
};
export const SectionFooterSecondaryContent = {
  marginRight: 'auto',
  alignSelf: 'center',
};
export const Input = {
  display: 'block',
  width: '100%',
  padding: '16px',
  fontSize: '20px',
  fontFamily: 'Bangers',
  color: '#152939',
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #C4C4C4',
  borderRadius: '35px',
  boxSizing: 'border-box',
  marginBottom: '10px',
};
export const Button = {
  display: 'inline-block',
  marginBottom: '0',  
  borderRadius: '15px',
  lineHeight: '1.42857143',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundImage: 'none',  
  backgroundColor: '#519CFF',
  border: 'solid',
  borderColor: '#282C34',
  textTransform: 'uppercase',
  padding: '1em 1em',
  letterSpacing: '1.1px', 
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: 'Bangers',
  color: '#282C34',
  textShadow: '2px 2px white',
};
export const SignInButton = {
  position: 'relative',
  width: '100%',
  borderRadius: '4px',
  backgroundColor: '#519CFF',
  borderColor: '#282C34',
  marginBottom: '10px',
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Bangers',
  color: '#282C34',
  textShadowColor: 'white',
  textShadowOffset: {width: 2, height: 2},
  fontSize: '14px',
  '#google_signin_btn': {
    backgroundColor: '#4285F4',
    fontFamily: 'Roboto',
    border: '1px solid #4285F4',
  },
  '#facebook_signin_btn': {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
  '#amazon_signin_btn': {
    backgroundColor: '#2673B6',
    border: 'none',
  },
};
export const SignInButtonIcon = {
  position: 'absolute',
  left: 0,
  '#google_signin_btn_icon': {
    backgroundColor: '#fff',
    borderRadius: '4px 0 0 4px',
    height: '30px',
    width: '30px',
    padding: '11px',
  },
  '#facebook_signin_btn_icon': {
    height: '33px',
    width: '18px',
    padding: '10px 14px',
  },
  '#amazon_signin_btn_icon': {
    padding: '10px',
    height: '32px',
    width: '32px',
  },
};
export const SignInButtonContent = {
  display: 'block',
  padding: '18px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
};
export const Strike = {
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #bbb',
  lineHeight: '0.1em',
  margin: '32px 0',
  color: '#828282',
};
export const StrikeContent = {
  background: '#fff',
  padding: '0 25px',
  fontSize: '14px',
  fontWeight: '500',
};
export const ActionRow = {
  marginBottom: '15px',
};
export const FormRow = {
  marginBottom: '12px',
};
//Reset Password CSS 
export const A = {
  color: '#519CFF',
  cursor: 'pointer',
  fontSize: '17px',   
};
//Forgot Password CSS
export const Hint = {
    fontSize: '17px',
    color: '#282C34',
};
export const Radio = {
  marginRight: '18px',
  verticalAlign: 'bottom',
};
export const InputLabel = {
  color: '#282C34',
  fontSize: '20px',
  fontFamily: 'Bangers',
  marginBottom: '8px',
};
const MyAmplifyTheme = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,
  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,
  input: Input,
  button: Button,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,
  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
};
export default MyAmplifyTheme;
