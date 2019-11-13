import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Colors } from '@/resources';

import { Container, Label, Content, Icon } from './style';

type Props = {
  label: string,
  onPress(): void,
  loading: boolean,
  small: boolean,
  icon: string,
  backgroundColor: string
};

const Button = ({
  label,
  onPress,
  loading,
  small,
  icon,
  backgroundColor
}: Props) => {
  const iconOnly = icon && !label;

  return (
    <Container
      onPress={onPress}
      small={small}
      iconOnly={iconOnly}
      backgroundColor={backgroundColor}
    >
      {loading ? (
        <ActivityIndicator size='small' color={Colors.white} />
      ) : (
        <Content>
          {Boolean(icon) && <Icon source={icon} />}
          <Label>{label}</Label>
        </Content>
      )}
    </Container>
  );
};

Button.defaultProps = {
  label: '',
  onPress: () => {},
  loading: false,
  small: false,
  icon: null,
  backgroundColor: Colors.blue
};

export default Button;
