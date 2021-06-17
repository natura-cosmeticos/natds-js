import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CardProps } from './Card.props'

const styles = createUseStyles((theme: Theme) => ({
  card: {
    backgroundColor: theme.color.surface,
    borderRadius: ({ radius }: CardProps) => (radius && radius ? theme.borderRadius.medium : 'none'),
    boxShadow: ({ elevation }: CardProps) => (elevation && elevation ? theme.elevation.micro : 'none'),
    display: 'inline-block',
    maxWidth: 328,
    overflow: 'hidden'
  }
}))

export default styles
