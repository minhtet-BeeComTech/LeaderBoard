import {Text} from 'react-native';
import styled from '@emotion/native';

import * as themeConfig from 'theme/attributes';

type FontWeight = keyof typeof themeConfig.fontWeight;

type FontSize = keyof typeof themeConfig.fontSize;

type Language = 'en' | 'my';

type StyledTextProps = {
  weight?: FontWeight;
  size?: FontSize;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  color?: string;
  link?: string;
};

const getLineHeight = (fontSize: number, lang: 'en' | 'my') => {
  const multiplier =
    fontSize > 20 ? (lang === 'en' ? 0.8 : 1.5) : lang === 'en' ? 0.5 : 0.9;

  return fontSize + fontSize * multiplier;
};

const getFontFamily = (fontWeight: FontWeight, language: Language = 'en') => {
  const fonts = {
    en: 'Inter',
    my: 'Inter',
  };

  switch (fontWeight) {
    case 'xxxs':
      return `${fonts[language]}-Thin`;
    case 'xxs':
      return `${fonts[language]}-ExtraLight`;
    case 'xs':
      return `${fonts[language]}-Light`;
    case 'sm':
      return `${fonts[language]}-Regular`;
    case 'md':
      return `${fonts[language]}-Medium`;
    case 'lg':
      return `${fonts[language]}-SemiBold`;
    case 'xl':
      return `${fonts[language]}-Bold`;
    case 'xxl':
      return `${fonts[language]}-ExtraBold`;
    case 'xxxl':
      return `${fonts[language]}-Black`;
    default:
      return `${fonts[language]}-Regular`;
  }
};

export const StyledText = styled(Text)<StyledTextProps>((props: any) => ({
  fontFamily: getFontFamily(props.weight || 'sm', props.theme.langCode),
  fontSize:
    props.theme.fontSize[props.size] || props.size || props.theme.fontSize.md,
  textAlign: props.textAlign || 'left',
  lineHeight: getLineHeight(
    props.theme.fontSize[props.size || 'md'],
    props.theme.langCode,
  ),
  color:
    props.theme.color.typo[props.color] ||
    props.color ||
    props.theme.color.typo.text,
  ...(props.link && {
    textDecorationLine: 'underline',
    textDecorationColor:
      props.theme.color.typo[props.color] ||
      props.color ||
      props.theme.color.typo.text,
  }),
}));
