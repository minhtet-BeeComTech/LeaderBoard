import {
  Platform,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';

//* input field wrapper
export const StyledFieldContainer = styled(View)(() => ({
  position: 'relative',
}));

//* text and textArea input
export const StyledInputContainer = styled(View)(() => ({
  position: 'relative',
}));

type StyledInputProps = {
  editable?: any;
  isError?: boolean;
};
export const StyledInput = styled(TextInput)<StyledInputProps>(
  (props: any) => ({
    backgroundColor:
      props.theme.color.form[props?.inputBgColor] ||
      props?.inputBgColor ||
      props.theme.color.form.inputBgColor,
    color: props.theme.color.typo.text,
    borderWidth: props.theme.formVariable.borderWidth,
    borderColor: props?.isError
      ? props.theme.color.form.error40
      : props.theme.color.form[props?.inputBdColor] ||
        props?.inputBdColor ||
        props.theme.color.form.inputBdColor,
    borderRadius: props.theme.formVariable.borderRadius,
    height: 44,
    paddingLeft: props.iconLeftName || props.leftRender ? 40 : 15,
    alignItems: 'flex-start',
    fontSize:
      props.theme.fontSize[props?.size] ||
      props.size ||
      props.theme.fontSize.md,
  }),
);
/* shadow-color: #00000029;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.20;
  shadow-radius: 2.22px;
  elevation: 3; */

//* start radio button
export const StyledRadioCon = styled(TouchableOpacity)(() => ({
  marginBottom: 10,
  alignItems: 'center',
  flexDirection: 'row',
}));

type StyledRadioCircleProps = {
  value?: any;
};
export const StyledRadioCircle = styled(View)<StyledRadioCircleProps>(
  (props: any) => ({
    backgroundColor: props.value
      ? props.theme.color.form.radio_container
      : 'transparent',
    borderColor:
      props.theme.color.form[props.RadioBdColor] ||
      props.RadioBdColor ||
      props.theme.color.form.RadioBdColor,
    width: 20,
    height: 20,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

export const StyledRB = styled(View)((props: any) => ({
  backgroundColor:
    props.theme.color.form[props.activeRBgColor] ||
    props.activeRBgColor ||
    props.theme.color.form.activeRBgColor,
  width: 12,
  height: 12,
  borderRadius: 50,
}));
//* end radio button

//* start checkBox
/* margin-bottom: 10px; */
export const StyledCheckBoxCon = styled(TouchableOpacity)(() => ({
  alignItems: 'center',
  flexDirection: 'row',
}));

type StyledCheckBoxProps = {
  value?: any;
};
export const StyledCheckBox = styled(View)<StyledCheckBoxProps>(
  (props: any) => ({
    backgroundColor: props.theme.color.form.checkboxBgColor,
    borderColor: props.theme.color.form.checkboxBgColor,
    width: 20,
    height: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 5,
  }),
);

export const StyledTick = styled(View)((props: any) => ({
  borderRightColor: props.theme.color.form.check_selected,
  borderBottomColor: props.theme.color.form.check_selected,
  width: 5,
  height: 12,
  top: -1,
  borderRightWidth: 2,
  borderBottomWidth: 2,
  transform: 'rotate(45deg)',
}));
/* ${(props?: any) => `background-color: ${props.value ? props.theme.color.form.radio_container : 'transparent'}`}; */
// background-color: transparent;
//* end checkBox

//* file upload button
export const StyledFileUpload = styled(TouchableOpacity)((props: any) => ({
  backgroundColor: props.theme.color.form.inputBgColor,
  borderColor: props.theme.color.form.borderColor,
  borderRadius: props.theme.formVariable.borderRadius,
  width: '100%',
  height: 40,
  borderWidth: 1,
  paddingLeft: 10,
}));

//* image upload button
export const StyledImagePicker = styled(TouchableOpacity)((props: any) => ({
  backgroundColor: props.theme.color.form.inputBgColor,
  borderColor: props.theme.color.form.borderColor,
  borderRadius: props.theme.formVariable.borderRadius,
  width: '100%',
  height: 40,
  borderWidth: 1,
  paddingLeft: 10,
}));
//* end image picker

//* qr upload button
export const StyledQrInput = styled(TouchableOpacity)((props: any) => ({
  backgroundColor: props.theme.color.form.inputBgColor,
  borderColor: props.theme.color.form.borderColor,
  borderRadius: props.theme.formVariable.borderRadius,
  width: '100%',
  height: 40,
  borderWidth: 1,
  paddingLeft: 10,
}));

//* start picker input
export const StyledPickerContainer = styled(View)((props: any) => ({
  borderColor: props.theme.color.form.borderColor,
  backgroundColor: props.inputBgColor || props.theme.color.form.inputBgColor,
  borderRadius: props.theme.formVariable.borderRadius,
  borderWidth: 1,
  padding: 0,
  margin: 0,
}));

export const StyledPicker = styled(Picker)((props: any) => ({
  height: Platform.OS === 'ios' ? 'auto' : 40,
  marginTop: -5,
  marginBottom: 5,
  marginLeft: -6,
  marginRight: -6,
}));

export const StyledPickerItem = styled(Picker.Item)((props: any) => ({
  paddingLeft: 10,
}));
//* end picker

//* start custom picker input
type StyledCustomPickerContainerProps = {
  isError?: boolean;
};
/* shadow-color: #00000029;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.20;
  shadow-radius: 2.22px;
  elevation: 3; */
export const StyledCustomPickerContainer = styled(
  View,
)<StyledCustomPickerContainerProps>((props: any) => ({
  backgroundColor:
    props.theme.color.form[props.inputBgColor] ||
    props.inputBgColor ||
    props.theme.color.form.inputBgColor,
  borderWidth: props.theme.formVariable.borderWidth,
  bordercolor: props?.isError
    ? props.theme.color.form.error40
    : props.theme.color.form[props?.inputBdColor] ||
      props?.inputBdColor ||
      props.theme.color.form.inputBdColor,
  borderRadius: props.theme.formVariable.borderRadius,
  position: 'relative',
  height: 45,
  overflow: 'hidden',
}));

export const StyledCustomPickerContent = styled(TouchableOpacity)(() => ({
  flex: 1,
  justifyContent: 'center',
}));

export const StyledCustomPicker = styled(ScrollView)``;
export const StyledCustomPickerItem = styled(TouchableOpacity)(() => ({
  paddingVertical: 13,
  paddingHorizontal: 10,
}));
//* end picker

//* datetimepicker
export const StyledDateTimePicker = styled(TouchableOpacity)((props: any) => ({
  backgroundColor: props.theme.color.form.inputBgColor,
  borderColor: props.theme.color.form.borderColor,
  borderRadius: props.theme.formVariable.borderRadius,
  position: 'relative',
  justifyContent: 'center',
  paddingLeft: 10,
  height: 40,
  borderWidth: 1,
}));

export const StyledPickerWrapper = styled(View)((props: any) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
}));

//* Switch
type StyledSwitchProps = {
  value?: any;
};
export const SwitchContainerStyled = styled(View)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}));

export const SwitchToggleStyled = styled(TouchableOpacity)<StyledSwitchProps>(
  (props: any) => ({
    width: 48,
    height: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: props.value
      ? props.theme.color.form[props.switchEnableBgColor] ||
        props.switchEnableBgColor ||
        props.theme.color.form.switchEnableBgColor
      : props.theme.color.form[props.switchUnableBgColor] ||
        props.switchUnableBgColor ||
        props.theme.color.form.switchUnableBgColor,
  }),
);

export const SwitchHandleStyled = styled(View)((props: any) => ({
  width: 21,
  height: 21,
  borderRadius: 21 / 2,
  backgroundColor: props.value
    ? props.theme.color.form[props.switchEnableHandleColor] ||
      props.switchEnableHandleColor ||
      props.theme.color.form.switchEnableHandleColor
    : props.theme.color.form[props.switchUnableHandleColor] ||
      props.switchUnableHandleColor ||
      props.theme.color.form.switchUnableHandleColor,
  transform: `translateX(${props.value ? '24px' : '2px'})`,
}));
//* end Switch
