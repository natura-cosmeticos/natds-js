import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CardProps } from './Card.props'

type CardStyleProps = Required<Pick<CardProps, 'elevation' | 'radius'>>

const styles = createUseStyles((theme: Theme) => ({
  card: {
    backgroundColor: theme.color.surface,
    borderRadius: ({ radius }: CardStyleProps) => (radius ? theme.borderRadius.medium : 'none'),
    boxShadow: ({ elevation }: CardStyleProps) => (elevation ? theme.elevation.micro : 'none'),
    display: 'inline-block',
    overflow: 'hidden'
  }
}))

export default styles
