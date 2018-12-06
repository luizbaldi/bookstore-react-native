import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Label } from './style'
import { Colors } from '../../resources'

type Props = {
  label: string,
  onPress(): void,
  loading: boolean
}

const Button = ({ label, onPress, loading }: Props) => (
  <Container onPress={onPress}>
    {loading
      ? <ActivityIndicator size='small' color={Colors.white} />
      : <Label>{label}</Label>
    }
  </Container>
)

export default Button
