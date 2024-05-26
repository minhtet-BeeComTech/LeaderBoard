import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {fontWeight, fontSize} from '@theme/attributes';

declare global {
  namespace CommonComponents {
    type FontWeight = keyof typeof fontWeight;

    type FontSize = keyof typeof fontSize;

    //* start button types
    type ButtonCom = {
      text?: string;
      color?: any;
      btnLeftRender?: React.ReactNode;
      btnRightRender?: React.ReactNode;
      children?: React.ReactNode;
      btnLoadingRender?: React.ReactNode;
      btnContentRender?: React.ReactNode;
      appearance?: string;
      bgColor?: any;
      weight?: any;
      onPress?: any;
      disabled?: boolean;
      style?: any;
      link?: any;
      size?: any;
      textStyle?: any;
      activeOpacity?: any;
      isLoading?: boolean;
      gradientProps?: any;
      indicatorProps?: any;
      disabledBgColor?: any;
      disabledBorderColor?: any;
      borderColor?: any;
      activityIndicatorColor?: any;
      btnHeight?: number;
      numberOfLines?: number;
      ellipsizeMode?: string;
      isPressable?: boolean;
      bdWidth?: number;
      bdRadius?: number;
    };
    //* end button types

    type CardCom = {
      isShadow?: boolean;
      pressable?: boolean;
      children?: React.ReactNode;
      onPress?: () => void;
      bgColor?: any;
      bdColor?: any;
      style?: any;
      onLayout?: any;
      disabled?: boolean | undefined;
      delayPressIn?: any;
      delayPressOut?: any;
      activeOpacity?: any;
      onPressIn?: any;
    };

    //* start grid types
    type RowCom = {
      children?: React.ReactNode;
      style?: any;
    };
    type ColCom = {
      style?: any;
      children?: React.ReactNode;
    };
    //* end grid types

    type IconCom = {
      type?: any;
      name?: string;
      color?: string;
      iconSize?: any;
      style?: any;
      onPress?: () => void;
    };

    //* start image types
    type ImageCom = {
      thumbnailSource?: any;
      source?: any;
      style?: any;
      resizeMode?: any;
      isCalHeight?: any;
    };
    //* end image types

    //* start layout types
    type ContainerCom = {
      vertical_offset?: any;
      loadingBgColor?: string;
      loadingProps?: any;
      isCommingSoon?: boolean;
      commingSoonProps?: any;
      netInfoProps?: any;
      isFooter?: any;
      isChat?: boolean;
      isStatusBarHide?: boolean;
      isScrollToTop?: boolean;
      chatIconBottom?: any;
      scrollToTopBottom?: any;
      navigation?: any;
      isLoading?: boolean;
      refreshing?: any;
      onRefresh?: any;
      full?: any;
      isScroll?: boolean;
      headerRender?: React.ReactNode;
      headerChild?: React.ReactNode;
      isHeader?: boolean;
      children?: React.ReactNode;
      SH?: any;
      edges?: any;
      back?: any;
      primary?: any;
      headerStyle?: any;
      text?: string | undefined;
      bottomSafeStyle?: any;
      headerBgColor?: any;
      menu?: any;
      safeAreaBgColor?: any;
      handleScroll?: any;
      rightComponent?: any;
      borderColor?: any;
      handleCustomBack?: any;
      customBack?: any;
      bg?: any;
      scrollRef?: any;
      statusBarStyle?: any;
      containerBgColor?: any;
      statusBgColor?: any;
      statusBarProps?: any;
      isTranslucent?: boolean;
      headerTextProps?: any;
      backIconProps?: any;
    };

    type FooterCom = {
      state?: any;
      descriptors?: any;
      navigation?: any;
      getCart_data?: any;
    };

    type FooterFixCom = {
      edges?: any;
      bgColor?: any;
      children?: React.ReactNode;
      style?: any;
    };

    type HeaderCom = {
      children?: React.ReactNode;
      headerRender?: any;
      headerLeftRender?: any;
      headerCenterRender?: any;
      headerRightRender?: any;
      navigation?: any;
      text?: any;
      back?: any;
      menu?: any;
      isCenter?: any;
      handleCustomBack?: any;
      isCustomBack?: any;
      headerStyle?: any;
      bgColor?: any;
      style?: any;
      isHeader?: boolean;
      headerChild?: any;
      headerTextProps?: any;
      backIconProps?: any;
    };

    type LoaderCom = {
      type?: any;
      loadingBgColor?: any;
      isLoading?: boolean | undefined;
    };
    //* end layout types

    type FlatListCom = {
      refreshing?: any;
      onRefresh?: any;
      emptytext?: any;
      isLoading?: any;
      isScrollToTop?: boolean;
      dictionary_data?: any;
      scrollToTopBottom?: any;
      langStore?: any;
      data?: any;
      numColumns?: number | undefined;
      stickyHeaderIndices?: any;
      showsVerticalScrollIndicator?: boolean | undefined;
      ListHeaderComponent?: any;
      renderItem?: any;
      keyExtractor?: any;
      onEndReached?: any;
      columnWrapperStyle?: any;
      ListFooterComponentStyle?: any;
      onScroll?: any;
      ListEmptyComponent?: any;
      flatRef?: any;
      style?: StyleProp<ViewStyle>;
    };

    //* start modal types
    type ModalCom = {
      children?: React.ReactNode;
      isTimer?: boolean;
      isAlway?: boolean;
      isVisible?: any;
      setIsVisible?: any;
      style?: any;
      modalContainerProps?: any;
      modalContentProps?: any;
      statusBgColor?: any;
      statusBarStyle?: any;
      handleClose?: any;
      animationIn?: any;
      animationOut?: any;
    };

    type DialogCom = {
      renderChild: React.ReactNode;
      renderModalHeader: React.ReactNode;
      renderModalBody: React.ReactNode;
      renderModalFooter: React.ReactNode;
      handleRightBtn: React.ReactNode;
      handleClose: () => void;
      title: string;
      titleColor?: any;
      description: string;
      subDescription: string;
      handleLeftBtn: any;
      leftBtnProps: any;
      rightBtnProps: any;
      isAlway: boolean;
      isModalHeader: boolean;
      isModalBody: boolean;
      isModalFooter: boolean;
      dialogContainerProps?: any;
      dialogBodyContainerProps?: any;
      dialogHeaderContainerProps?: any;
      dialogFooterContainerProps?: any;
    };
    //* end modal types

    //* start slider types
    //* end slider types

    type TextCom = {
      style?: any;
      weight?: FontWeight;
      children?: React.ReactNode;
      size?: FontSize;
      numberOfLines?: number;
      color?: any;
      textAlign?: 'left' | 'right' | 'center' | 'justify';
      lang?: any;
      link?: any;
      disabled?: any;
      onPress?: () => void;
      ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    };
  }

  namespace CustomComponents {}
  namespace FormComponents {
    type CheckBoxCom = {
      value?: any;
      onValueChange?: any;
      children?: React.ReactNode;
      tickStyle?: any;
      handleBlur?: () => void;
      error?: any;
      type?: string;
    };

    type FieldWrapper = {
      value?: any;
      label?: any;
      required?: any;
      children?: React.ReactNode;
      materialLabel?: any;
      isFocus?: any;
      desc?: string;
    };

    type InputCom = {
      inputRef?: any;
      secure?: any;
      seedetect?: any;
      materialLabel?: any;
      iconLeftName?: string;
      iconRightName?: string;
      type?: string;
      leftRender?: any;
      rightRender?: any;
      placeholderTextColor?: any;
      placeholder?: string;
      value?: any;
      onChangeText?: any;
      style?: any;
      keyboardType?: any;
      returnKeyType?: any;
      onSubmitEditing?: any;
      onBlur?: any;
      seedetect_custom?: boolean;
      onFocus?: any;
      multiline?: any;
      scrollEnabled?: any;
      numberOfLines?: any;
      label?: string | undefined;
      inputBgColor?: any;
      inputBdColor?: any;
      autoFocus?: boolean;
      error?: any;
      handleBlur?: () => void;
      iconLeftColor?: any;
      inputStyle?: any;
      maxLength?: any;
      secureTextEntry?: any;
      editable?: any;
      clearable?: boolean;
      renderClearableIcon?: ReactNode;
      onReset?: () => void;
    };

    type PickerCom = {
      itemData?: any;
      value?: any;
      onChange?: any;
      mode?: string;
      placeholder?: any;
      keyType?: any;
      valueType?: any;
      renderTitle?: any;
      customRender?: any;
      modalProps?: any;
      customModalRender?: any;
      handleIsModalVisible?: any;
      isDropDown?: boolean;
      handleBlur?: () => void;
      error?: any;
      pickerContainerProps?: any;
      pickerProps?: any;
      renderPickerItem?: any;
      iconLeftName?: any;
      leftRender?: any;
      iconRightName?: any;
      rightRender?: any;
      customPickerItemProps?: any;
      type?: string;
    };

    type RadioCom = {
      value?: any;
      onValueChange?: any;
      leftRender?: any;
      rightRender?: any;
      type?: any;
      style?: any;
      handleBlur?: () => void;
      error?: any;
      disabled?: any;
    };

    type SwitchCom = {
      value?: any;
      onValueChange?: any;
      switchType?: any;
      toogleProps?: any;
      handleProps?: any;
      handleBlur?: () => void;
      error?: any;
    };

    //* validate form container types

    type VButtomSheetInput = {};

    type VCheckBox = {
      name?: any;
      rules?: any;
      defaultValue?: any;
    };

    type VPicker = {
      name?: any;
      rules?: any;
      defaultValue?: any;
      label?: any;
      placeholder?: any;
      itemData?: any;
      keyType?: any;
      valueType?: any;
      onChange?: any;
      materialLabel?: any;
      required?: any;
      isCapitalize?: any;
      modalProps?: any;
      pickerProps?: any;
      renderPickerItem?: any;
    };

    type VFieldContainer = {
      fieldContainerProps?: any;
      label?: any;
      required?: any;
      children?: React.ReactNode;
      materialLabel?: any;
      isFocus?: any;
      radioLabelPos?: any;
      desc?: string;
      SVGL?: any;
      error?: any;
      value?: any;
      isShowErrMsg?: boolean;
      style?: any;
    };

    type VFileUpload = {};

    type FormContainerCom = {
      onSubmit?: any;
      children?: any;
      FooterForm?: any;
      AvoidType?: string;
      initialValues?: any;
      validationSchema?: any;
    };

    type VRadio = {
      name?: any;
      rules?: any;
      defaultValue?: any;
      radioArr?: any;
      type?: string;
    };

    type VSwitch = {
      name?: any;
      rules?: any;
      defaultValue?: any;
    };

    type VInput = {
      name?: any;
      rules?: any;
      defaultValue?: any;
      placeholder?: string;
      secure?: any;
      required?: any;
      label?: any;
      SVGL?: any;
      materialLabel?: any;
      returnKeyType?: any;
      keyboardType?: any;
      multiline?: any;
      scrollEnabled?: any;
      numberOfLines?: any;
      style?: any;
      placeholderTextColor?: any;
      seedetect?: any;
      onSubmitEditing?: any;
      rightRender?: any;
      clearable?: boolean;
      renderClearableIcon?: ReactNode;
      leftRender?: ReactNode;
      onEndEditing?: any;
      maskPattern?: any;
      maskType?: any;
      maskOptions?: any;
      autoCapitalize?: any;
    };

    type ComboBoxCom = {
      children?: any;
      value?: any;
      handleBlur?: any;
      onChange?: any;
      error?: any;
      keyName?: any;
      data?: any;
      comboBoxContainerProps?: any;
      comboBoxWrapProps?: any;
      comboBoxItemProps?: any;
      comboBoxTextProps?: any;
      renderItem?: any;
      isMultiple?: boolean;
      valueName?: string | undefined;
      cardStyle?: any;
    };

    type VComboBox = {
      name?: any;
      keyName?: string;
      valueName?: string;
      rules?: any;
      defaultValue?: string;
      label?: string;
      data?: any[];
      moneyFormat?: any;
      isShowErrMsg?: boolean;
    };
  }
}
